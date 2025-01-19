import React, { MouseEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { contactScript, indexScript, indexStyle, links, navElements, socialMediaLinks } from '../../include/include';
import Header from '../common/Header';
import { information } from '../../include/information';
import Footer from '../common/Footer';
import IncludeStyleScript from '../common/IncludeStyleScript';
import { images } from '../../include/images';

type Props = {}

const Contact = (props: Props) => {
    
    const [contact, setContact] = useState<{name: string, email: string, message: string, subject: string}>({
        name: "",
        email: "",
        message: "",
        subject: ""});
    const sendEmail = (e: MouseEvent) => {
    }
    return (
        <>
            <IncludeStyleScript/>
            <Header navChossen={navElements.contact} />
            {/* END nav */}
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
                                    <Link to={"/"}>Home <i className="fa fa-chevron-right" /></Link>
                                </span>{" "}
                                <span>
                                    Contact Us <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper px-md-4">
                                <div className="row mb-5">
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Address:</span> {information.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Phone:</span>{" "}
                                                    <Link
                                                        // to={`tel:${information.phone}`}
                                                        to={"#"}
                                                    >
                                                        {information.phone}
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Email:</span>{" "}
                                                    <Link
                                                        // to={`mailto:${information.email}`}
                                                        to={"#"}
                                                    >
                                                        {information.email}
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-facebook" />
                                            </div>
                                            <div className="text">
                                                <p>
                                                    <span>Facebook:</span>{" "} 
                                                    <Link
                                                        to={links.facebook}
                                                        target='_blank'
                                                    >
                                                        {information.logoName}
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-md-7">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Contact Us</h3>
                                            <form
                                                method="POST"
                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">
                                                                Full Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">
                                                                Subject
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">
                                                                Message
                                                            </label>
                                                            <textarea
                                                                name="message"
                                                                className="form-control"
                                                                id="message"
                                                                cols={30}
                                                                rows={4}
                                                                placeholder="Message"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="button"
                                                                defaultValue="Send Message"
                                                                className="btn btn-primary"
                                                                onClick={sendEmail}
                                                            />
                                                            <div className="submitting" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 order-md-first d-flex align-items-stretch">
                                        <div id="map" className="map" />
                                    </div>
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
        </>

    )
}

export default Contact