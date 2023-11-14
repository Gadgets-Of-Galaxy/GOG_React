// import React from "react";
import "../styles/HomeCategorySection.css";
import { ProductItemSmall } from "./ProductItemSmall";

export const PopularProducts = (props) => {
    const products = props.products && props.products.products ? props.products.products : [];
    const productItemSmall = Array.from({ length: products.length}, (_, index) => (
        <ProductItemSmall key={index} title={products[index].title} imagePath={products[index].imagePath}/>
    ));
    return (
        <section className="HomeBestDeals">
            <div className="frame">
                <div className="frame-title-wrap">
                    <h3 className="frame-title">Weekly Popular Products</h3>
                </div>
                <div className="products-wrap">
                        <div className="product-grid">{productItemSmall}</div>
                </div>
            </div>
        </section>
    );
}