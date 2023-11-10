import React from "react";
// import favorite from "../icons/favorite.png";
import "../styles/ProductItemSmall.css";

export const ProductItemSmall = () => {
    return (
        <div className="product-item-s">
            <div className="product-thumbnail">
                <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png"
                    alt="product-thumbnail"
                    className="deal-image"
                />
                <div className="product-wishlist">
                    {/* <img src={favorite} alt="favorite" /> */}
                </div>
            </div>
            <div className="product-content">
                <div className="product-title-wrap">
                    <h3 className="product-title">HomePod mini</h3>
                    <div className="product-price">
                        <span className="text-span">Rs.</span>2000
                    </div>
                </div>
                <div className="product-desc">Table with air purifier, stained veneer/black</div>
                <div className="product-rating">
                    <div className="star-wrap">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e9d9ee08987e0ffb064bca_Star.svg"
                            alt="star"
                            className="product-star"

                        />
                    </div>
                    <div className="total-rating">(121)</div>
                </div>
                <div className="button-wrap">
                    <a href="#" className="primary-button cart-button border">
                        <div className="button-content">
                                Add To Cart
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}