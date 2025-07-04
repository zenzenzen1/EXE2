import language, { getLanguage } from '../../configurations/language'
import { images } from '../../include/images'


function SmallAbout() {
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
                        <div className="heading-section"
                            dangerouslySetInnerHTML={{ __html: language[getLanguage()].about }}
                        >
                            {/* <span className="subheading">Since 2025</span> */}
                            
                            {/* <p className="year">
                                <strong className="number" data-number={information.yearsExperience}>
                                    0
                                </strong>
                                <span>Years of Experience In Business</span>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallAbout