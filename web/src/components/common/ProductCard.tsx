import React from 'react'
import { ProductType } from '../../datas/product'



function ProductCard(props: ProductType) {
    return (
        <>
            <div className="product ftco-animate">
                <div
                    className="img d-flex align-items-center justify-content-center"
                    style={{ backgroundImage: "url(images/prod-1.jpg)" }}
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
                    {props.sale && (
                        <span className={props.sale.className}>{props.sale.text}</span>
                    )}
                    {props.product.category && (
                        <span className="category">{props.product.category}</span>
                    )}
                    <h2>{props.product.name}</h2>
                    <p className="mb-0">
                        {props.product.salePrice && (<span className="price price-sale">{props.product.salePrice}</span>) }{" "}
                        <span className="price">{props.product.price}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProductCard