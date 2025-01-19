import React from 'react'
import { images } from '../../include/images'

type Props = {}

function SmallAbout({ }: Props) {
    return (
        <section className="ftco-section ftco-no-pb">
            <div className="container">
                <div className="row">
                    <div
                        className="col-md-6 img img-3 d-flex justify-content-center align-items-center"
                        // 'url(images/about.jpg)' 
                        style={{ backgroundImage: `url(${images.about})` }}
                    ></div>
                    <div className="col-md-6 wrap-about pl-md-5 ftco-animate py-5">
                        <div className="heading-section">
                            <span className="subheading">Since 1905</span>
                            <h2 className="mb-4">Desire Meets A New Taste</h2>
                            <p>
                                A small river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic country, in
                                which roasted parts of sentences fly into your mouth.
                            </p>
                            <p>
                                On her way she met a copy. The copy warned the Little Blind Text,
                                that where it came from it would have been rewritten a thousand
                                times and everything that was left from its origin would be the
                                word "and" and the Little Blind Text should turn around and return
                                to its own, safe country.
                            </p>
                            <p className="year">
                                <strong className="number" data-number={115}>
                                    0
                                </strong>
                                <span>Years of Experience In Business</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallAbout