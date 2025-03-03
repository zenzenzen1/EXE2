import { ChangeEvent, FocusEvent, useEffect, useMemo, useState } from "react";
import { productInformation } from "../../datas/product";
import Footer from "../common/Footer";
import Header from "../common/Header";
import IncludeStyleScript from "../common/IncludeStyleScript";
import "./Cart.css";
import { Link, useLocation } from "react-router-dom";
import { CartType } from "../../types/cart";
import { toast, ToastContainer } from "react-toastify";
import { PaymentStatus } from "../../types/Checkout";
import { images } from "../../include/images";
import { toNumberWithDecimals, toVndCurrency } from "../../utils/Utils";

function Cart() {
    const location = useLocation();
    if (location.state && location.state.paymentStatus === PaymentStatus.CANCEL) {
        toast.warn("Bạn đã hủy thanh toán");
        location.state.paymentStatus = undefined;
    }

    useEffect(() => {
        return () => {
        }
    }, []);
    const delivery = productInformation.delivery;
    const discount = productInformation.discount;
    const [quantity, setQuantity] = useState<number | undefined>();
    const [cart, setCart] = useState<CartType>({
        productName: productInformation.name,
        productQuantity: quantity || 1,
        subTotal: productInformation.price * (quantity || 1),
        delivery: delivery,
        discount: discount,
        total: productInformation.price * (quantity || 1) + delivery - discount
    });

    const totalPrice = useMemo(() => {
        if (quantity) {

            setCart({
                ...cart,
                productQuantity: quantity || 1,
                subTotal: productInformation.price * (quantity || 1),
                total: productInformation.price * (quantity || 1) + delivery - discount
            });
        }
        return productInformation.price * (quantity || 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        const _quantity = e.target.value;
        if (!_quantity) {
            setQuantity(undefined);
            return;
        }
        const quantity = parseInt(_quantity);
        if (quantity < productInformation.minQuantity) {
            setQuantity(productInformation.minQuantity);
            return;
        }
        if (quantity > productInformation.maxQuantity) {
            // setQuantity(productInformation.maxQuantity);
            return;
        }
        setQuantity(quantity);
    }

    const handleBlurQuantity = (_e: FocusEvent<HTMLInputElement>) => {
        if (!quantity) {
            setQuantity(productInformation.minQuantity);
        }
    }


    return (
        <>
            <IncludeStyleScript />
            <ToastContainer draggable />
            <Header navChossen="" />
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
                                    Cart <i className="fa fa-chevron-right" />
                                </span>
                            </p> */}
                            <h2 className="mb-0 bread">Giỏ Hàng</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section" style={{ color: 'black', paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="container-fluid" style={{ paddingLeft: "4%", paddingRight: "4%" }}>
                    <div className="row">
                        <div
                            className="col-md-8 wrap-about pl-md-5 ftco-animate py-5"
                        // 'url(images/about.jpg)' 
                        >
                            <div className="heading-section">
                                {/* <div
                                    className="img"
                                    style={{ backgroundImage: "url(images/prod-1.jpg)", width: '100px', height: '100px' }}
                                /> */}
                                {/* <span className="subheading">Since 2025</span> */}
                                {/* <h2 className="mb-4">Chào mừng bạn đến với Nem Thành Nam!</h2> */}
                                {/* <p>
                                    <span>Sản phẩm:</span> Nem Nắm Truyền Thống Nam Định
                                </p>
                                <h2 className="mb-4">Tại sao chọn Nem Thành Nam?</h2>
                                <p className='mb-0'>
                                    Chất lượng đảm bảo: Nem được làm từ nguyên liệu sạch, không chất bảo quản.
                                </p> */}
                            </div>
                            <div className="table-wrap">
                                <table className="table product-table">
                                    <thead className="thead-primary">
                                        <tr>
                                            {/* <th>&nbsp;</th> */}
                                            <th>&nbsp;</th>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng</th>
                                            {/* <th>&nbsp;</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="alert" role="alert">
                                            {/* <td>
                                                <label className="checkbox-wrap checkbox-primary">
                                                    <input type="checkbox" />
                                                    <span className="checkmark" />
                                                </label>
                                            </td> */}
                                            <td>
                                                <div
                                                    className="img"
                                                    style={{ backgroundImage: `url(${images.ftcoKinks[1].url})` }}
                                                />
                                            </td>
                                            <td>
                                                <div className="email" >
                                                    <span style={{ color: "black" }}>Nem Nắm Truyền Thống Nam Định</span>
                                                    <span style={{ color: "black", fontSize: "15px" }}>
                                                        Trọng lượng: {productInformation.weight}
                                                    </span>
                                                    <span style={{ color: "black", fontSize: "15px" }}>
                                                        Thành phần: {productInformation.ingredient}
                                                    </span>
                                                    <span style={{ color: "black", fontSize: "15px" }}>
                                                        Hạn sử dụng: {productInformation.expiryDate}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>{toVndCurrency(productInformation.price)}</td>
                                            <td className="quantity">
                                                <div className="input-group">
                                                    <input
                                                        type="number"
                                                        name="quantity"
                                                        className="quantity form-control input-number"
                                                        defaultValue={toNumberWithDecimals(quantity || productInformation.minQuantity)}
                                                        min={1}
                                                        max={100}
                                                        onChange={(e) => handleChangeQuantity(e)}
                                                        onBlur={handleBlurQuantity}
                                                        value={quantity}
                                                    />
                                                </div>
                                            </td>
                                            <td>{toVndCurrency(totalPrice)}</td>
                                            {/* <td>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    data-dismiss="alert"
                                                    aria-label="Close"
                                                >
                                                    <span aria-hidden="true">
                                                        <i className="fa fa-close" />
                                                    </span>
                                                </button>
                                            </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-4 wrap-about pl-md-5 ftco-animate py-5">
                            <div className="col  cart-wrap ftco-animate">
                                <div className="cart-total mb-3">
                                    <h3>Cart Totals</h3>
                                    <p className="d-flex">
                                        <span>Tổng sản phẩm</span>
                                        <span>{toVndCurrency(cart.subTotal)}</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Vận chuyển</span>
                                        <span>{toVndCurrency(cart.delivery)}</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Giảm giá</span>
                                        <span>{toVndCurrency(cart.discount)}</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Tổng</span>
                                        <span>{toVndCurrency(cart.total)}</span>
                                    </p>
                                </div>
                                <p className="text-center">
                                    <Link to="/checkout" state={cart} className="btn btn-primary py-3 px-4">
                                        {/* Proceed to Checkout */}
                                        Tiến hành thanh toán
                                    </Link>

                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>




            <Footer />
        </>
    )
}

export default Cart