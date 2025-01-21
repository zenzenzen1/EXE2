

function StatisticsSaleInfo(props: {customers: number, yearsExperience: number, target: number, branches: number}) {
    return (
        <>
            <section
                className="ftco-counter ftco-section ftco-no-pt ftco-no-pb img bg-light"
                id="section-counter"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={props.customers}>
                                        0
                                    </strong>
                                    <span>Our Satisfied Customers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={props.yearsExperience}>
                                        0
                                    </strong>
                                    <span>Years of Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={props.target}>
                                        0
                                    </strong>
                                    <span>Target</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ftco-animate">
                            <div className="block-18 py-4 mb-4">
                                <div className="text align-items-center">
                                    <strong className="number" data-number={props.branches}>
                                        0
                                    </strong>
                                    <span>Our Branches</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StatisticsSaleInfo