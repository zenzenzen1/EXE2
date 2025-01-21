import { Link } from 'react-router-dom'
import { ProductType } from '../../datas/product'

function ProductCard(props: {product: ProductType}) {
    return (
        <>
            <div className="product ftco-animate">
                <div
                    className="img d-flex align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${props.product.product.imageUrl})` }}
                >
                    <div className="desc">
                        <p className="meta-prod d-flex">
                            <Link to={"#"} className="d-flex align-items-center justify-content-center">
                                <span className="flaticon-shopping-bag" />
                            </Link>
                            <Link to={"#"} className="d-flex align-items-center justify-content-center">
                                <span className="flaticon-heart" />
                            </Link>
                            <Link to={"#"} className="d-flex align-items-center justify-content-center">
                                <span className="flaticon-visibility" />
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="text text-center">
                    {props.product.sale && (
                        <span className={props.product.sale.className}>{props.product.sale.text}</span>
                    )}
                    {/* {props.product.product.category && (
                        <span className="category">{props.product.product.category}</span>
                    )}
                    <h2>{props.product.product.name}</h2>
                    <p className="mb-0">
                        {props.product.product.salePrice && (<span className="price price-sale">{props.product.product.salePrice}</span>) }{" "}
                        <span className="price">{props.product.product.price}</span>
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default ProductCard