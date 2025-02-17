import { confirmDialog, ConfirmDialog } from "primereact/confirmdialog";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import httpClient from "../../configurations/HttpClient";
import { productInformation } from "../../datas/product";
import { images } from "../../include/images";
import { CartType } from "../../types/cart";
import { CheckoutType } from "../../types/Checkout";
import Footer from "../common/Footer";
import Header from "../common/Header";
import IncludeStyleScript from "../common/IncludeStyleScript";


function Checkout() {
    const location = useLocation();
    const navigate = useNavigate();
    const cart = location.state as CartType;
    console.log(cart);
    const [loading, setLoading] = useState<boolean>(false);
    const [checkoutInformation, setCheckoutInformation] = useState<CheckoutType>({
        name: "",
        phone: "",
        email: "",
        address: "",
        additionalAddress: "",
        phoneNumber: "",
        priceInformation: cart
    });



    const findLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
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

    const handleCheckout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 3000);
        httpClient.post("/create-payment-link", {
            amount: checkoutInformation.priceInformation.total,
            description: `Thanh toán ${cart.productQuantity} Nem Nắm`,
            buyerName: checkoutInformation.name,
            buyerEmail: checkoutInformation.email,
            buyerPhone: checkoutInformation.phone,
            buyerAddress: checkoutInformation.address + ". " + checkoutInformation.additionalAddress,
            items: [
                {
                    name: productInformation.name,
                    price: productInformation.price,
                    quantity: cart.productQuantity
                }
            ]
        }, {
            headers: {},
            // data: {

            // } as PaymentRequestType,
        }

        )
            .then(res => {
                console.log(res.data.checkoutUrl);
                window.location.href = res.data.checkoutUrl;
                setLoading(false);

            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
            ;

    }

    const showConfirmCheckoutDialog = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
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
                            <p className="breadcrumbs mb-0">
                                <span className="mr-2">
                                    <a href="index.html">
                                        Home <i className="fa fa-chevron-right" />
                                    </a>
                                </span>{" "}
                                <span>
                                    Checkout <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">Checkout</h2>
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


                                <h3 className="mb-4 billing-heading">Billing Details</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="firstname">Name</label>
                                            {/* <input id="name" type="text" className="form-control" placeholder="" required
                                                onChange={handleChangeCheckoutInformation}
                                            /> */}
                                            <InputText id="name" type="text" className="" placeholder="" required
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <InputText type="text" className="" id="phone" placeholder="" pattern="[0-9]{10}" title="Phone number must be 10 digits" required
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="emailaddress">Email Address</label>
                                            <InputText type="text" className="" placeholder=""
                                                id="email"
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                            />
                                        </div>
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
                                        <div className="form-group">
                                            <label htmlFor="streetaddress">Street Address</label>
                                            <span onClick={findLocation} className="btn btn-primary" style={{ fontSize: "14px", cursor: "pointer" }}>Search Location</span>
                                            <InputText
                                                type="text" className="mt-2" placeholder="Address"
                                                id="address"
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                required
                                                value={checkoutInformation.address}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <InputText
                                                type="text"
                                                id="additionalAddress" className=""
                                                style={{ width: "-webkit-fill-available" }}
                                                onChange={handleChangeCheckoutInformation}
                                                value={checkoutInformation.additionalAddress}
                                                required
                                                placeholder="House number, apartment, studio, or floor, additional address"
                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* END */}
                                <div className="row mt-1 pt-3 d-flex">
                                    <div className="col-md-6 d-flex">
                                        <div className="cart-detail cart-total p-3 p-md-4">
                                            <h3 className="billing-heading mb-4">Cart Total</h3>
                                            <p className="d-flex">
                                                <span>Subtotal</span>
                                                <span>{cart.subTotal}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Delivery</span>
                                                <span>{cart.delivery}</span>
                                            </p>
                                            <p className="d-flex">
                                                <span>Discount</span>
                                                <span>{cart.discount}</span>
                                            </p>
                                            <hr />
                                            <p className="d-flex total-price">
                                                <span>Total</span>
                                                <span>$17.60</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="cart-detail p-3 p-md-4">
                                            <h3 className="billing-heading mb-4">Payment Method</h3>
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
                                                            <input defaultChecked={true} type="radio" name="optradio" className="mr-2" />{" "}
                                                            Thanh toán online
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
                                                    Place an order
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