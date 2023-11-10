import React from "react";
import "../styles/HomeBestDeals.css";
import {ProductItemBig} from "./ProductItemBig";

export const HomeBestDeals = () => {
    const productItemBig = Array.from({ length: 3 }, (_, index) => (
        <ProductItemBig key={index} />
    ));
    return (
        <section className="HomeBestDeals">
            <div className="frame">
                <div className="frame-title-wrap">
                    <h3 className="frame-title">Today's Best Deals For You!</h3>
                </div>
                <div className="products-swiper swiper-container">
                    <div className="swiper-wrapper">{productItemBig}</div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}