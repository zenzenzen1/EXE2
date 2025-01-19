import React, { useEffect } from 'react'
import { indexScript, indexStyle, navElements } from '../../include/include';
import Header from '../common/Header';
import Footer from '../common/Footer';
import IncludeStyleScript from '../common/IncludeStyleScript';
import { images } from '../../include/images';
import SmallAbout from '../common/SmallAbout';
import OwlCarousel from '../common/OwlCarousel';
import FtcoKind from '../common/FtcoKind';
import { Link } from 'react-router-dom';

type Props = {}

function About({ }: Props) {
    // useEffect(() => {
    //     let l: HTMLLinkElement[] = [];
    //     // Link for head
    //     indexStyle.forEach((linkHref) => {
    //         const link = document.createElement('link');
    //         link.rel = 'stylesheet';
    //         link.href = linkHref;
    //         document.head.appendChild(link);
    //         l.push(link);

    //     });


    //     let s: HTMLScriptElement[] = [];
    //     indexScript.forEach((script) => {
    //         const scriptElement = document.createElement("script");
    //         scriptElement.src = script;
    //         scriptElement.async = false;
    //         document.body.appendChild(scriptElement);
    //         s.push(scriptElement);
    //     });

    //     return () => {
    //         s.forEach((script) => {
    //             document.body.removeChild(script); // Cleanup
    //         });
    //         l.forEach((link) => {
    //             document.head.removeChild(link); // Cleanup
    //         });
    //     };
    // }, []);
    return (
        <>

            <Header navChossen={navElements.about} />
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
                                    About us <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">About Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-intro">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex">
                            <div className="intro d-lg-flex w-100 ftco-animate">
                                <div className="icon">
                                    <span className="flaticon-support" />
                                </div>
                                <div className="text">
                                    <h2>Online Support 24/7</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="intro color-1 d-lg-flex w-100 ftco-animate">
                                <div className="icon">
                                    <span className="flaticon-cashback" />
                                </div>
                                <div className="text">
                                    <h2>Money Back Guarantee</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="intro color-2 d-lg-flex w-100 ftco-animate">
                                <div className="icon">
                                    <span className="flaticon-free-delivery" />
                                </div>
                                <div className="text">
                                    <h2>Free Shipping &amp; Return</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SmallAbout />

            <section className="ftco-section">
                <div className="container">
                    <div className="row" style={{ justifyContent: 'center' }}>
                        <FtcoKind />
                    </div>
                </div>
            </section>

            <OwlCarousel />




            <section
                className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img bg-light"
                id="section-counter"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={3000}>
                                        0
                                    </strong>
                                    <span>Our Satisfied Customers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={115}>
                                        0
                                    </strong>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={100}>
                                        0
                                    </strong>
                                    <span>Kinds of Liquor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={40}>
                                        0
                                    </strong>
                                    <span>Our Branches</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            {/* loader */}
            <div id="ftco-loader" className="show fullscreen">
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
            </div>
            <IncludeStyleScript />
        </>

    )
}

export default About