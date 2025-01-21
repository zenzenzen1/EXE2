import { Link } from 'react-router-dom';
import { images } from '../../include/images';
import { navElements } from '../../include/include';
import Footer from '../common/Footer';
import FtcoKind from '../common/FtcoKind';
import Header from '../common/Header';
import IncludeStyleScript from '../common/IncludeStyleScript';
import OwlCarousel from '../common/OwlCarousel';
import SmallAbout from '../common/SmallAbout';
import StatisticsSaleInfo from '../common/StatisticsSaleInfo';
import { information } from '../../include/information';


function About() {
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
            
            
            <StatisticsSaleInfo branches={information.branches} customers={information.customers} target={information.target} yearsExperience={information.yearsExperience}/>
            
            <Footer />
            {/* loader */}
            <IncludeStyleScript />
        </>

    )
}

export default About