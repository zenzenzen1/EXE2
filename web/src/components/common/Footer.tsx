import React from 'react'
import { Link } from 'react-router-dom'
import { information } from '../../include/information'
import { links } from '../../include/include'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer className="ftco-footer">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-sm-12 col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2 logo">
                                    <a href="#">
                                        Nem <span>Thành Nam</span>
                                    </a>
                                </h2>
                                <p>
                                    Far far away, behind the word mountains, far from the countries.
                                </p>
                                <ul className="ftco-footer-social list-unstyled mt-2">
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="ftco-animate">
                                        <Link to={links.facebook} target='_blank'>
                                            <span className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li className="ftco-animate">
                                        <a href="#">
                                            <span className="fa fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">My Accounts</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            My Account
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Register
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Log In
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            My Order
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Information</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Catalog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Contact us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Term &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Quick Link</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            New User
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Report Spam
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-chevron-right mr-2" />
                                            Faq's
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li>
                                            <span className="icon fa fa-map marker" />
                                            <span className="text">
                                                {information.address}
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <span className="icon fa fa-phone" />
                                                <span className="text">{information.phone}</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <span className="icon fa fa-paper-plane pr-4" />
                                                <span className="text">{information.email}</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-5 bg-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="mb-0" style={{ color: "rgba(255,255,255,.5)" }}>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with{" "}
                                    <i className="fa fa-heart color-danger" aria-hidden="true" /> by{" "}
                                    {/* <a href="https://colorlib.com" target="_blank">
                                        
                                    </a> */}
                                    <Link to={"#"}>Nem Thanh Nam's Team</Link>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer