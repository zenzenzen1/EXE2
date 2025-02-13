import { ChangeEvent, FocusEvent, useMemo, useState } from "react";
import { productInformation } from "../../datas/product";
import Footer from "../common/Footer";
import Header from "../common/Header";
import IncludeStyleScript from "../common/IncludeStyleScript";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
    const [quantity, setQuantity] = useState<number | undefined>();


    const totalPrice = useMemo(() => {
        return productInformation.price * (quantity || 0);
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
            // setQuantity(productInformation.minQuantity);
        }
    }
    
    
    return (
        <>
            <IncludeStyleScript />
            <Header navChossen="" />
            <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("images/bg_2.jpg")' }}
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
                                    Cart <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">My Cart</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section" style={{ color: 'black', paddingTop: '0px', paddingBottom: '0px' }}>
                <div className="container">
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
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>total</th>
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
                                                    style={{ backgroundImage: "url(images/prod-1.jpg)" }}
                                                />
                                            </td>
                                            <td>
                                                <div className="email" >
                                                    <span style={{ color: "black" }}>Nem Nắm Truyền Thống Nam Định</span>
                                                </div>
                                            </td>
                                            <td>{productInformation.price}</td>
                                            <td className="quantity">
                                                <div className="input-group">
                                                    <input
                                                        type="number"
                                                        name="quantity"
                                                        className="quantity form-control input-number"
                                                        defaultValue={quantity || productInformation.minQuantity}
                                                        min={1}
                                                        max={100}
                                                        onChange={(e) => handleChangeQuantity(e)}
                                                        onBlur={handleBlurQuantity}
                                                        value={quantity}
                                                    />
                                                </div>
                                            </td>
                                            <td>{totalPrice}</td>
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
                                        <span>Subtotal</span>
                                        <span>$20.60</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Delivery</span>
                                        <span>$0.00</span>
                                    </p>
                                    <p className="d-flex">
                                        <span>Discount</span>
                                        <span>$3.00</span>
                                    </p>
                                    <hr />
                                    <p className="d-flex total-price">
                                        <span>Total</span>
                                        <span>$17.60</span>
                                    </p>
                                </div>
                                <p className="text-center">
                                    <Link to="/checkout" className="btn btn-primary py-3 px-4">
                                        Proceed to Checkout
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