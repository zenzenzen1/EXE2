import { Link } from 'react-router-dom';
import { images } from '../../include/images';
import { navElements } from '../../include/include';
import Footer from '../common/Footer';
import Header from '../common/Header';
import IncludeStyleScript from '../common/IncludeStyleScript';
import { products } from '../../datas/product';
import ProductCard from '../common/ProductCard';



const Products = () => {


    return (
        <>
            <IncludeStyleScript />
            <Header navChossen={navElements.products} />
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
                                    Products <i className="fa fa-chevron-right" />
                                </span>
                            </p>
                            <h2 className="mb-0 bread">Products</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row mb-4">
                                <div className="col-md-12 d-flex justify-content-between align-items-center">
                                    {/* <h4 className="product-select">Select Types of Products</h4> */}
                                    <h4 className="product-select">Products</h4>
                                    {/* <select className="selectpicker" multiple>
                                        <option>Brandy</option>
                                        <option>Gin</option>
                                        <option>Rum</option>
                                        <option>Tequila</option>
                                        <option>Vodka</option>
                                        <option>Whiskey</option>
                                    </select> */}
                                    {/* <MultiSelect
                                        value={productsSelected} onChange={(e) => setProductsSelected(e.value)}
                                        options={productCategorySelection} optionLabel="name" placeholder="Select Products"
                                    /> */}
                                </div>
                            </div>
                            <div className="row">
                                {products.map((product, i) => {
                                    return (
                                        <div key={i} className="col-md-4 d-flex">
                                            <ProductCard key={i} product={product} />
                                        </div>
                                    );
                                })}
                                <div className='col-md-12'>
                                    <img src={images.logoProductInformation} alt="logo" style={{ width: "-webkit-fill-available" }} />
                                </div>
                                <div style={{ color: 'black' }}>

                                    <div className='col-md-12'>
                                        <h2>
                                            Thông tin sản phẩm:
                                        </h2>
                                        Trọng lượng: 500g/gói
                                        <p className='mb-0'>
                                            Thành phần: Thịt heo, bì heo, gia vị tự nhiên (tỏi, ớt, đường, muối, thính gạo).

                                        </p>
                                        <p className='mb-0'>
                                            Hạn sử dụng: 7 ngày kể từ ngày sản xuất.
                                        </p>
                                        <p className='mb-0'>
                                            Bảo quản: Nhiệt độ 4-6°C.
                                        </p>
                                        <p className='mb-0'>
                                            Giá: 60,000 VND/gói
                                        </p>
                                        <h2>
                                            Cách thưởng thức:
                                        </h2>
                                        <p className='mb-0'>
                                            Ăn liền với lá sung và chấm nước mắm pha chua ngọt.
                                        </p>
                                        <p className='mb-0'>
                                            Dùng làm món khai vị hoặc món nhậu đều hấp dẫn.
                                        </p>
                                        {/* <p className='mb-0'>
                                            Đặt hàng ngay để thưởng thức hương vị truyền thống của Nem Thành Nam!
                                        </p> */}
                                    </div>
                                </div>
                                {/*
                                <div className="col-md-4 d-flex">
                                    <div className="product ftco-animate">
                                        <div
                                            className="img d-flex align-items-center justify-content-center"
                                            style={{ backgroundImage: "url(images/prod-3.jpg)" }}
                                        >
                                            <div className="desc">
                                                <p className="meta-prod d-flex">
                                                    <a
                                                        href="#"
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <span className="flaticon-shopping-bag" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <span className="flaticon-heart" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="d-flex align-items-center justify-content-center"
                                                    >
                                                        <span className="flaticon-visibility" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text text-center">
                                            <span className="new">New Arrival</span>
                                            <span className="category">Rum</span>
                                            <h2>Citadelle</h2>
                                            <span className="price">$69.00</span>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                            {/* <div className="row mt-5">
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
                            </div> */}
                        </div>
                        <div className="col-md-3">
                            {/* <div className="sidebar-box ftco-animate">
                                <div className="categories">
                                    <h3>Product Types</h3>
                                    <ul className="p-0">
                                        <li>
                                            <a href="#">
                                                Brandy <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Gin <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Rum <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Tequila <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Vodka <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Whiskey <span className="fa fa-chevron-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="sidebar-box ftco-animate">
                                <h3>Recent Blog</h3>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(images/image_1.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-calendar" /> Apr. 18, 2020
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-comment" /> 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(images/image_2.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-calendar" /> Apr. 18, 2020
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-comment" /> 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a
                                        className="blog-img mr-4"
                                        style={{ backgroundImage: "url(images/image_3.jpg)" }}
                                    />
                                    <div className="text">
                                        <h3 className="heading">
                                            <a href="#">
                                                Even the all-powerful Pointing has no control about the
                                                blind texts
                                            </a>
                                        </h3>
                                        <div className="meta">
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-calendar" /> Apr. 18, 2020
                                                </a>
                                            </div>
                                            <div>
                                                <a href="#">
                                                    <span className="fa fa-comment" /> 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default Products