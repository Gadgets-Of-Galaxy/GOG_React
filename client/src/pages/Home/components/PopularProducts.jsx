import React from "react";
import "../styles/HomeBestDeals.css";
import {ProductItemBig} from "./ProductItemBig";

export const PopularProducts = (props) => {
    const products = props.products && props.products.products ? props.products.products : [];
    const productItemBig = Array.from({ length: products.length}, (_, index) => (
        <ProductItemBig key={index} title={products[index].title} imagePath={products[index].imagePath}/>
    ));
    return (
        <section className="HomeBestDeals">
            <div className="frame">
                <div className="frame-title-wrap">
                    <h3 className="frame-title">Weekly Popular Products</h3>
                </div>
                <div className="products-swiper swiper-container">
                    <div className="swiper-wrapper">{productItemBig}</div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}