import emailjs from '@emailjs/browser';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { emailjsConstant } from "../../configurations/configuration";
import httpClient from "../../configurations/HttpClient";
import { productInformation } from "../../datas/product";
import { app } from '../../firebase';
import { images } from "../../include/images";
import { CartType } from "../../types/cart";
import { CheckoutType, PaymentMethod, PaymentStatus } from "../../types/Checkout";
import { toVndCurrency } from "../../utils/Utils";
import Footer from "../common/Footer";
import Header from "../common/Header";
import IncludeStyleScript from "../common/IncludeStyleScript";

function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!location.state) {
            navigate("/cart");
        }
    }, [location, navigate]);
    const cart = location.state as CartType;

    const [invalidFields, setInvalidFields] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        additionalAddress: ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [checkoutInformation, setCheckoutInformation] = useState<CheckoutType>({
        name: "",
        phone: "",
        email: "",
        address: "",
        additionalAddress: "",
        priceInformation: cart,
        paymentMethod: PaymentMethod.ONLINE
    });

    const handleFindGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            setCheckoutInformation(state => {
                return {
                    ...state,
                    name: user.displayName || "",
                    email: user.email || "",
                    phone: user.phoneNumber || ""
                }
            });


            // const data = await res.json();
            // console.log(data);
            // navigate("/");
        } catch (error) {
            console.log("google auth error", error);
        }
    }

    const findLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                // console.log(lat, long);
                // console.log(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=8cb39e99d85849e2ab8e2cfb3438f1be`);
                fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=8cb39e99d85849e2ab8e2cfb3438f1be`)
                    .then(response => response.json())
                    .then(data => {
                        setCheckoutInformation({
                            ...checkoutInformation,
                            address: data.features[0].properties.formatted
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
        }
    }

    // console.log({...checkoutInformation, address: ""});
    // console.log(cart);


    const handleChangeCheckoutInformation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckoutInformation({
            ...checkoutInformation,
            [e.target.id]: e.target.value
        });
    }
    // console.log(checkoutInformation);
    const handleCheckout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoading(true);

        const emailjsTemplateParams = {
            from_name: checkoutInformation.name,
            from_email: checkoutInformation.email,
            name: checkoutInformation.name,
            phone: checkoutInformation.phone,
            email: checkoutInformation.email,
            address: checkoutInformation.address + ". " + checkoutInformation.additionalAddress,
            productName: productInformation.name,
            productQuantity: checkoutInformation.priceInformation.productQuantity,
            total: toVndCurrency(checkoutInformation.priceInformation.total)
        };

        switch (checkoutInformation.paymentMethod) {
            case PaymentMethod.ONLINE: {
                httpClient.post("/create-payment-link", {
                    amount: checkoutInformation.priceInformation.total,
                    description: `Thanh toán ${cart?.productQuantity} Nem Nắm`,
                    buyerName: checkoutInformation.name,
                    buyerEmail: checkoutInformation.email,
                    buyerPhone: checkoutInformation.phone,
                    buyerAddress: checkoutInformation.address + ". " + checkoutInformation.additionalAddress,
                    items: [
                        {
                            name: productInformation.name,
                            price: productInformation.price,
                            quantity: cart?.productQuantity
                        }
                    ]
                }, {
                    headers: {},
                    // data: {

                    // } as PaymentRequestType,
                })
                    .then(res => {
                        console.log(res.data.checkoutUrl);
                        window.location.href = res.data.checkoutUrl;
                        emailjs.send(emailjsConstant.serviceId, emailjsConstant.templateId, { ...emailjsTemplateParams, paymentMethod: "Thanh toán online" }, emailjsConstant.publicKey)
                            .then((_result) => {
                                navigate("/", { state: { paymentStatus: PaymentStatus.ORDER } });
                            })
                            .catch((error) => {
                                toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau");
                                console.log(error);
                            });
                        setLoading(false);

                    })
                    .catch(err => {
                        console.log(err);
                        setLoading(false);
                        toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau");
                    })
                    ;
                break;
            }
            case PaymentMethod.COD: {
                emailjs.send(emailjsConstant.serviceId, emailjsConstant.templateId, { ...emailjsTemplateParams, paymentMethod: "Thanh toán khi nhận hàng" }, emailjsConstant.publicKey)
                    .then((_result) => {
                        navigate("/", { state: { paymentStatus: PaymentStatus.ORDER } });
                    })
                    .catch((error) => {
                        toast.error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau");
                        console.log(error);
                    });
                setLoading(false);
                // navigate("/");
                return;
            }
            default:
                break;
        }
        // }, 3000);



    }

    const validateFields = () => {
        const invalidFields = {
            name: "",
            phone: "",
            email: "",
            address: "",
            additionalAddress: ""
        };
        let isValid = true;
        if (checkoutInformation.name.trim() === "") {
            checkoutInformation.name = "";
            invalidFields.name = "Tên không được để trống";
            isValid = false;
        }
        if (checkoutInformation.phone.trim() === "") {
            checkoutInformation.phone = "";
            invalidFields.phone = "SĐT không được để trống";
            isValid = false;
        }
        if (checkoutInformation.email.trim() === "") {
            checkoutInformation.email = "";
            invalidFields.email = "Email không được để trống";
            isValid = false;
        }
        if (checkoutInformation.address.trim() === "") {
            checkoutInformation.address = "";
            invalidFields.address = "Hãy nhập địa chỉ của bạn";
            isValid = false;
        }
        if (checkoutInformation.additionalAddress.trim() === "") {
            checkoutInformation.additionalAddress = "";
            invalidFields.additionalAddress = "Hãy nhập thông tin thêm về địa chỉ của bạn";
            isValid = false;
        }
        setInvalidFields(invalidFields);
        return isValid;
    }

    const showConfirmCheckoutDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        validateFields();
        if (checkoutInformation.name.trim() === "" || checkoutInformation.phone === "" || checkoutInformation.email === "" || checkoutInformation.address === "" || checkoutInformation.additionalAddress === "") {
            toast.error("Hãy điền đầy đủ thông tin có chứa dấu *");
            return;
        }
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept: function () {
                handleCheckout(e);
            },
            reject: function () {
                console.log("reject");
            }
        });
        // handleCheckout(e);
    }

    return (
        <>
            <Header navChossen="" />
            <IncludeStyleScript />
            <ToastContainer />
            <ConfirmDialog />
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: `url(${images.mainImage})` }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-end justify-content-center">
                        <div className="col-md-9 ftco-animate mb-5 text-center">
                            {/* <p className="breadcrumbs mb-0">
                                <span className="mr-2">
                                    <a href="index.html">
                                        Home <i className="fa fa-chevron-right" />
                                    </a>
                                </span>{" "}
                                <span>
                                    Checkout <i className="fa fa-chevron-right" />
                                </span>
                            </p> */}
                            <h2 className="mb-0 bread">Thanh Toán</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 ftco-animate">
                            <form className="billing-form" style={{ color: "black" }}>
                                {/* <h4>Delivery Address <span onClick={findLocation} className="btn btn-primary" style={{ fontSize: "15px", cursor: "pointer" }}>Search Location</span></h4>
                                <div className="form-group row">
                                    <label style={{ paddingRight: 0 }} htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                                    <div className="col-sm-10">
                                        <input style={{ paddingRight: 0 }} type="text" className="form-control" id="inputAddress" name="address"
                                            placeholder="1234 Main St"
                                            required
                                        />
                                    </div>
                                    <label style={{ paddingRight: 0 }} htmlFor="additionalAddress" className="col-sm-2 col-form-label">Additional Address</label>
                                    <div className="col-sm-10">
                                        <input style={{ paddingRight: 0 }} type="text" className="form-control" id="additionalAddress" name="additionalAddress"
                                            placeholder="House number, apartment, studio, or floor"
                                        />
                                    </div>
                                    <label style={{ paddingRight: 0 }} htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
                                    <div className="col-sm-10">
                                        <input style={{ paddingRight: 0 }} type="text" className="form-control" id="phoneNumber" name="phoneNumber"
                                            placeholder="PhoneNumber"
                                            
                                            required
                                        />
                                    </div>

                                </div> */}


                                <h3 className="mb-4 billing-heading">Chi tiết đơn hàng</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-4">
                                        <div className="form-group mb-0">
                                            <label htmlFor="firstname">Tên <span className="text-danger">*</span></label>
                                            <span onClick={handleFindGoogle} className="btn btn-primary ml-4" title="Nhấn để lấy địa chỉ hiện tại" style={{ fontSize: "14px", cursor: "pointer" }}>Lấy thông tin từ google</span>
                                            {/* <input id="name" type="text" className="form-control" placeholder="" required
                                                onChange={handleChangeCheckoutInformation}
                                            /> */}
                                            <InputText id="name" type="text" className="" placeholder="" required
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                value={checkoutInformation.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-0">
                                            <label htmlFor="phone">SĐT <span className="text-danger">*</span></label>
                                            <InputText type="text" className="" id="phone" placeholder="" pattern="[0-9]{10}" title="Phone number must be 10 digits" required
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                value={checkoutInformation.phone}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-0">
                                            <label htmlFor="emailaddress">Email <span className="text-danger">*</span></label>
                                            <InputText type="text" className="" placeholder=""
                                                id="email"
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                value={checkoutInformation.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <span className="text-danger">{invalidFields.name}</span>
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <span className="text-danger">{invalidFields.phone}</span>
                                    </div>
                                    <div className="col-md-4 mb-2">
                                        <span className="text-danger">{invalidFields.email}</span>
                                    </div>
                                    <div className="w-100" />
                                    {/* <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="country">State / Country</label>
                                            <div className="select-wrap">
                                                <div className="icon">
                                                    <span className="ion-ios-arrow-down" />
                                                </div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">France</option>
                                                    <option value="">Italy</option>
                                                    <option value="">Philippines</option>
                                                    <option value="">South Korea</option>
                                                    <option value="">Hongkong</option>
                                                    <option value="">Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="w-100" />
                                    <div className="col-md-6 mt-2">
                                        <div className="form-group mb-0">
                                            <label htmlFor="streetaddress">Địa chỉ <span className="text-danger">*</span></label>
                                            <span onClick={findLocation} className="btn btn-primary ml-2" title="Nhấn để lấy địa chỉ hiện tại" style={{ fontSize: "14px", cursor: "pointer" }}>Địa chỉ của bạn</span>
                                            <InputText
                                                type="text" className="" placeholder="Address"
                                                id="address"
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                required
                                                value={checkoutInformation.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-2">
                                        <div className="form-group mb-0">
                                            <label >Thông tin thêm về địa chỉ <span className="text-danger">*</span></label>
                                            <InputText
                                                type="text"
                                                id="additionalAddress" className=""
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                value={checkoutInformation.additionalAddress}
                                                required={true}
                                                // placeholder="House number, apartment, studio, or floor, additional address"
                                                placeholder="Thông tin thêm về địa chỉ của bạn. Ví dụ: số nhà, tòa nhà, tầng, chung cư, khu vực, ..."
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <span className="text-danger">{invalidFields.address}</span>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <span className="text-danger">{invalidFields.additionalAddress}</span>
                                    </div>
                                </div>

                                {/* END */}
                                <div className="row mt-1 pt-3 d-flex">
                                    <div className="col-md-6 d-flex">
                                        <div className="cart-detail cart-total p-3 p-md-4" style={{ color: "black", fontWeight: "bold" }}>
                                            <h3 className="billing-heading mb-4">Chi tiết đơn hàng</h3>
                                            <p style={{ color: "black" }} className="d-flex">
                                                <span style={{ color: "black" }}>Tiền Sản Phẩm</span>
                                                <span>{toVndCurrency(cart?.subTotal)}</span>
                                            </p>
                                            <p style={{ color: "black" }} className="d-flex">
                                                <span style={{ color: "black" }}>Vận Chuyển</span>
                                                <span>{toVndCurrency(cart?.delivery)}</span>
                                            </p>
                                            <p style={{ color: "black" }} className="d-flex">
                                                <span style={{ color: "black" }}>Giảm Giá</span>
                                                <span>{toVndCurrency(cart?.discount)}</span>
                                            </p>
                                            <hr />
                                            <p style={{ color: "black" }} className="d-flex total-price">
                                                <span style={{ color: "black" }}>Tổng</span>
                                                <span>{toVndCurrency(cart?.total)}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cart-detail p-3 p-md-4">
                                            <h3 className="billing-heading mb-4">Phương thức thanh toán</h3>
                                            {/* <div className="form-group">
                                                <div className="col-md-12">
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optradio" className="mr-2" />{" "}
                                                            Thanh toán khi nhận hàng
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group">
                                                <div className="col-md-12">
                                                    <div className="radio">
                                                        <label>
                                                            <input defaultChecked={true} type="radio" name="optradio" className="mr-2"
                                                                onChange={() => { setCheckoutInformation(state => { return { ...state, paymentMethod: PaymentMethod.ONLINE } }) }}
                                                            />{" "}
                                                            Thanh toán online
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" onChange={() => { setCheckoutInformation(state => { return { ...state, paymentMethod: PaymentMethod.COD } }) }} name="optradio" className="mr-2" />{" "}
                                                            Thanh toán khi nhận hàng
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-group">
                                                <div className="col-md-12">
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optradio" className="mr-2" />{" "}
                                                            Paypal
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="form-group">
                                                <div className="col-md-12">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                defaultValue=""
                                                                className="mr-2"
                                                            />{" "}
                                                            I have read and accept the terms and conditions
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <p>
                                                <button disabled={loading} type="submit" onClick={(e) => showConfirmCheckoutDialog(e)} className="btn btn-primary py-3 px-4">
                                                    {/* Place an order */}
                                                    Xác nhận thanh toán
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>{" "}
                        {/* .col-md-8 */}
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default Checkout