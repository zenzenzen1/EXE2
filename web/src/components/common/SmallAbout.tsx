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
                        <div className="heading-section">
                            {/* <span className="subheading">Since 2025</span> */}
                            <h2 className="mb-4">Chào mừng bạn đến với Nem Thành Nam!</h2>
                            <p>
                                Nem Thành Nam tự hào là thương hiệu nem nắm truyền thống Giao Thuỷ, mang đến hương vị đậm đà, thơm ngon đúng chất quê hương.
                                Với bí quyết gia truyền cùng nguyên liệu tươi ngon, mỗi miếng nem của chúng tôi là sự kết hợp hoàn hảo giữa vị chua thanh,
                                ngọt dịu và hương thơm đặc trưng của thịt, bì, và gia vị đặc biệt.
                            </p>
                            <h2 className="mb-4">Tại sao chọn Nem Thành Nam?</h2>
                            <p className='mb-0'>
                                Chất lượng đảm bảo: Nem được làm từ nguyên liệu sạch, không chất bảo quản.
                            </p>
                            <p className='mb-0'>
                                Hương vị truyền thống: Đúng chuẩn nem nắm Nam Định, thơm ngon khó cưỡng.
                            </p>
                            <p className='mb-0'>
                                Tiện lợi: Đặt hàng online, giao hàng tận nơi, dễ dàng thưởng thức mọi lúc mọi nơi.
                            </p>
                            <p className='mb-0'>
                                Khám phá ngay các sản phẩm của chúng tôi và trải nghiệm hương vị đặc biệt của Nem Thành Nam!
                            </p>
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