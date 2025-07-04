import language, { getLanguage } from "../../configurations/language";


function FtcoIntro() {
    return (
        <>
            <section className="ftco-intro">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-4 d-flex">
                            <div className="intro d-lg-flex w-100 ftco-animate">
                                <div className="icon">
                                    <span className="flaticon-support" />
                                </div>
                                <div className="text">
                                    {/* <h2>Online Support 24/7</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p> */}
                                    <h2>{language[getLanguage()].smallDescription.support.title}</h2>
                                    <p>
                                        {language[getLanguage()].smallDescription.support.desctiption}
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
                                    {/* <h2>Money Back Guarantee</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p> */}
                                    {/* <h2>Đảm bảo hoàn trả</h2> */}
                                    <h2>{language[getLanguage()].smallDescription.refund.title}</h2>
                                    <p>
                                       {language[getLanguage()].smallDescription.refund.desctiption} 
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
                                    {/* <h2>Free Shipping &amp; Return</h2>
                                    <p>
                                        A small river named Duden flows by their place and supplies it
                                        with the necessary regelialia.
                                    </p> */}
                                    <h2>{language[getLanguage()].smallDescription.shipping.title}</h2>
                                    <p>
                                        {language[getLanguage()].smallDescription.shipping.desctiption}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FtcoIntro