import { Link, useLocation } from 'react-router-dom';
import { images } from '../../include/images';
import { links, navElements } from '../../include/include';
import { information } from '../../include/information';
import Footer from '../common/Footer';
import FtcoIntro from '../common/FtcoIntro';
import FtcoKind from '../common/FtcoKind';
import Header from '../common/Header';
import IncludeStyleScript from '../common/IncludeStyleScript';
import SmallAbout from '../common/SmallAbout';
import { PaymentStatus } from '../../types/Checkout';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const location = useLocation();
    if (location.state && location.state.paymentStatus === PaymentStatus.SUCCESS) {
        toast.success("Thanh Toán thành công. Bạn hãy check mail và số điện thoại thường xuyên.");
        location.state.paymentStatus = undefined;
    }
    
    (() => {
    })();
    return (
        <>
            <IncludeStyleScript />
            <ToastContainer />
            {/* Header */}
            <Header navChossen={navElements.home} />

            {/* END nav */}
            <div
                className="hero-wrap"
                style={{
                    // backgroundImage: 'url("images/bg_2.jpg")' 
                    backgroundImage: `url(${images.mainImage})`
                }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-11 ftco-animate d-flex align-items-end">
                            <div className="text w-100 text-center">
                                <h1 className="mb-4"
                                    dangerouslySetInnerHTML={{
                                        __html: information.slogan
                                    }}
                                >
                                </h1>
                                <p>
                                    <Link to={links.home}
                                        className="btn btn-primary py-2 px-4"
                                    >
                                        My <span>store</span>
                                    </Link>
                                    <Link to={links.home}
                                        className="btn btn-white btn-outline-white py-2 px-4"
                                    >
                                        Read more
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <FtcoIntro />

            <SmallAbout />



            <section className="ftco-section ftco-no-pb" style={{marginBottom: "6em"}}>
                <div className="container">
                    <div className="row" style={{
                        justifyContent: "center"
                    }}>
                        <FtcoKind />
                    </div>
                </div>
            </section>
            {/* <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Our Delightful offerings</span>
                            <h2>Tastefully Yours</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 d-flex">
                            <ProductCard product={{name: "Bacardi 151", price: 20, salePrice: 10, category: ""}} sale={{className: "sale", text: "sale"}}/>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="product ftco-animate">
                                <div
                                    className="img d-flex align-items-center justify-content-center"
                                    style={{ backgroundImage: "url(images/prod-2.jpg)" }}
                                >
                                    <div className="desc">
                                        <p className="meta-prod d-flex">
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-shopping-bag" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-heart" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-visibility" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="text text-center">
                                    <span className="seller">Best Seller</span>
                                    <span className="category">Gin</span>
                                    <h2>Jim Beam Kentucky Straight</h2>
                                    <span className="price">$69.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="product ftco-animate">
                                <div
                                    className="img d-flex align-items-center justify-content-center"
                                    style={{ backgroundImage: "url(images/prod-3.jpg)" }}
                                >
                                    <div className="desc">
                                        <p className="meta-prod d-flex">
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-shopping-bag" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-heart" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-visibility" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="text text-center">
                                    <span className="new">New Arrival</span>
                                    <span className="category">Rum</span>
                                    <h2>Citadelle</h2>
                                    <span className="price">$69.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="product ftco-animate">
                                <div
                                    className="img d-flex align-items-center justify-content-center"
                                    style={{ backgroundImage: "url(images/prod-4.jpg)" }}
                                >
                                    <div className="desc">
                                        <p className="meta-prod d-flex">
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-shopping-bag" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-heart" />
                                            </a>
                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center"
                                            >
                                                <span className="flaticon-visibility" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="text text-center">
                                    <span className="category">Rum</span>
                                    <h2>The Glenlivet</h2>
                                    <span className="price">$69.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <Link to={"/products"} className="btn btn-primary d-block"
                            >
                                View All Products <span className="fa fa-long-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <OwlCarousel /> */}

            <section className="position-relative">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Blog</span>
                            <h2>Recent Blog</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                            <div className="blog-entry d-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("images/image_1.jpg")' }}
                                ></a>
                                <div className="text p-4 bg-light">
                                    <div className="meta">
                                        <p>
                                            <span className="fa fa-calendar" /> 23 April 2020
                                        </p>
                                    </div>
                                    <h3 className="heading mb-3">
                                        <a href="#">The Recipe from a Winemaker’s Restaurent</a>
                                    </h3>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                    <a href="#" className="btn-custom">
                                        Continue <span className="fa fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                            <div className="blog-entry d-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("images/image_2.jpg")' }}
                                ></a>
                                <div className="text p-4 bg-light">
                                    <div className="meta">
                                        <p>
                                            <span className="fa fa-calendar" /> 23 April 2020
                                        </p>
                                    </div>
                                    <h3 className="heading mb-3">
                                        <a href="#">The Recipe from a Winemaker’s Restaurent</a>
                                    </h3>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                    <a href="#" className="btn-custom">
                                        Continue <span className="fa fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                            <div className="blog-entry d-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("images/image_3.jpg")' }}
                                ></a>
                                <div className="text p-4 bg-light">
                                    <div className="meta">
                                        <p>
                                            <span className="fa fa-calendar" /> 23 April 2020
                                        </p>
                                    </div>
                                    <h3 className="heading mb-3">
                                        <a href="#">The Recipe from a Winemaker’s Restaurent</a>
                                    </h3>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                    <a href="#" className="btn-custom">
                                        Continue <span className="fa fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                            <div className="blog-entry d-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("images/image_4.jpg")' }}
                                ></a>
                                <div className="text p-4 bg-light">
                                    <div className="meta">
                                        <p>
                                            <span className="fa fa-calendar" /> 23 April 2020
                                        </p>
                                    </div>
                                    <h3 className="heading mb-3">
                                        <a href="#">The Recipe from a Winemaker’s Restaurent</a>
                                    </h3>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                    <a href="#" className="btn-custom">
                                        Continue <span className="fa fa-long-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer />


            {/* loader */}
            {/* <div id="ftco-loader" className="show fullscreen">
                <svg className="circular" width="48px" height="48px">
                    <circle
                        className="path-bg"
                        cx={24}
                        cy={24}
                        r={22}
                        fill="none"
                        strokeWidth={4}
                        stroke="#eeeeee"
                    />
                    <circle
                        className="path"
                        cx={24}
                        cy={24}
                        r={22}
                        fill="none"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        stroke="#F96D00"
                    />
                </svg>
            </div> */}
        </>

    )
}

export default Home