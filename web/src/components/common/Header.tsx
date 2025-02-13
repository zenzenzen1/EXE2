import { Link } from 'react-router-dom'
import { links, navElements, socialMediaLinks } from '../../include/include'
import { information } from '../../include/information'
import "./Header.css";
import { images } from '../../include/images';

type Props = {
    navChossen: string
}

const Header = (props: Props) => {

    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
                id="ftco-navbar"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0",
                }}
            >
                <div className="wrap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <p className="mb-0 phone pl-md-2">
                                    <span className="mr-5">
                                        <span className="fa fa-phone mr-3" />{information.phone}
                                    </span>
                                    <span >
                                        <span className="fa fa-paper-plane mr-3" />{information.email}
                                    </span>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-md-end">
                                <div className="social-media mr-4">
                                    <p className="mb-0 d-flex" style={{ gap: "11%" }}>
                                        {/* <a
                                            href={links.facebook}
                                            target='_blank'
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className="fa fa-facebook">
                                                <i className="sr-only">Facebook</i>
                                            </span>
                                        </a> */}
                                        {socialMediaLinks.map((socialMediaLink, i) => (<a
                                            key={i}
                                            href={socialMediaLink.url}
                                            target='_blank'
                                            className="d-flex align-items-center justify-content-center"
                                        >
                                            <span className={socialMediaLink.icon}>
                                                <i className="sr-only">{socialMediaLink.name}</i>
                                            </span>
                                        </a>))}
                                    </p>
                                </div>
                                {/* <div className="reg">
                                    <p className="mb-0">
                                        <a href="#" className="mr-2">
                                            Sign Up
                                        </a>{" "}
                                        <a href="#">Log In</a>
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Link to={links.home} >
                        <img src={images.logo} alt="logo" width={"40px"} height={"40px"} style={{ borderRadius: "100%" }} />
                    </Link>
                    <Link to={links.home} className="navbar-brand" >
                        Nem <span>Thành Nam</span>
                    </Link>
                    {/* Card Icon + function */}
                    <div className="order-lg-last btn-group">
                        {/* <a
                            href="#"
                            className="btn-cart dropdown-toggle dropdown-toggle-split"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="flaticon-shopping-bag" />
                            <div className="d-flex justify-content-center align-items-center">
                                <small>2</small>
                            </div>
                        </a> */}
                        <Link to={"/cart"} className='btn-cart dropdown-toggle dropdown-toggle-split' >
                            <span className="flaticon-shopping-bag" />
                            <div className="d-flex justify-content-center align-items-center">
                                <small>2</small>
                            </div>
                        </Link>
                        {/* <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-item d-flex align-items-start" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(images/prod-1.jpg)" }}
                                />
                                <div className="text pl-3">
                                    <h4>Bacardi 151</h4>
                                    <p className="mb-0">
                                        <a href="#" className="price">
                                            $25.99
                                        </a>
                                        <span className="quantity ml-3">Quantity: 01</span>
                                    </p>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-start" >
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(images/prod-2.jpg)" }}
                                />
                                <div className="text pl-3">
                                    <h4>Jim Beam Kentucky Straight</h4>
                                    <p className="mb-0">
                                        <a href="#" className="price">
                                            $30.89
                                        </a>
                                        <span className="quantity ml-3">Quantity: 02</span>
                                    </p>
                                </div>
                            </div>
                            <div className="dropdown-item d-flex align-items-start">
                                <div
                                    className="img"
                                    style={{ backgroundImage: "url(images/prod-3.jpg)" }}
                                />
                                <div className="text pl-3">
                                    <h4>Citadelle</h4>
                                    <p className="mb-0">
                                        <a href="#" className="price">
                                            $22.50
                                        </a>
                                        <span className="quantity ml-3">Quantity: 01</span>
                                    </p>
                                </div>
                            </div>
                            <a
                                className="dropdown-item text-center btn-link d-block w-100"
                                href="cart.html"
                            >
                                View All
                                <span className="ion-ios-arrow-round-forward" />
                            </a>
                        </div> */}
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#ftco-nav"
                        aria-controls="ftco-nav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${props.navChossen === "home" ? "active" : ""}`}>
                                <Link to="/" className="nav-link" >
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${props.navChossen === navElements.about ? "active" : ""}`} >
                                <Link to="/about" className="nav-link" >
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item 
                                ${props.navChossen === navElements.products ? "active" : ""}`}
                            // dropdown 
                            >
                                <Link className="nav-link" to="/products">
                                    Products
                                </Link>
                                {/* <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdown04"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Products
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link className="dropdown-item" to="/products">
                                        Products
                                    </Link>
                                    <a className="dropdown-item" href="product-single.html">
                                        Single Product
                                    </a>
                                    <a className="dropdown-item" href="cart.html">
                                        Cart
                                    </a>
                                    <a className="dropdown-item" href="checkout.html">
                                        Checkout
                                    </a>
                                </div> */}
                            </li>
                            <li className={`nav-item ${props.navChossen === navElements.blog ? "active" : ""}`}>
                                <Link to="/blog" className="nav-link" >
                                    Blog
                                </Link>
                            </li>
                            <li className={`nav-item ${props.navChossen === navElements.contact ? "active" : ""}`}>
                                <Link to="/contact" className="nav-link" >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header