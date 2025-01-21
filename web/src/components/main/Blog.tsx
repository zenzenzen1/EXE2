import { Link } from 'react-router-dom'
import { images } from '../../include/images'
import { navElements } from '../../include/include'
import Footer from '../common/Footer'
import Header from '../common/Header'
import IncludeStyleScript from '../common/IncludeStyleScript'


function Blog() {
    return (
        <>
            <IncludeStyleScript />
            <Header navChossen={navElements.blog} />
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
                                    <Link to={"/"}
                                    >
                                        Home <i className="fa fa-chevron-right" />
                                    </Link>
                                </span>{" "}
                                <span>
                                    Blog <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-6 d-flex align-items-stretch ftco-animate">
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_2.jpg")' }}
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
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_1.jpg")' }}
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
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_3.jpg")' }}
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
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_4.jpg")' }}
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
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_5.jpg")' }}
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
                            <div className="blog-entry d-md-flex">
                                <a
                                    href="blog-single.html"
                                    className="block-20 img"
                                    style={{ backgroundImage: 'url("/images/image_6.jpg")' }}
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
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    <li>
                                        <a href="#">&lt;</a>
                                    </li>
                                    <li className="active">
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">5</a>
                                    </li>
                                    <li>
                                        <a href="#">&gt;</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Blog