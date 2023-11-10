import React from "react";
import { Header } from "../CommonComponents/components/Header";
import {Slider} from "./components/Slider"
import {ShopCategories} from "./components/ShopCategories";
import {HomeBestDeals} from "./components/HomeBestDeals";
import {BrandSection}  from "./components/BrandSection";
import {PopularProducts} from "./components/PopularProducts"
import {HomeCategorySection} from "./components/HomeCategorySection"
import {BestSellingProducts} from "./components/BestSellingProducts"
import {Footer} from "../CommonComponents/components/Footer"

export const Home = () =>{
    return(
        <div>
            <Header/>
            <Slider/>
            <ShopCategories/>
            <HomeBestDeals />
            <BrandSection />
            <PopularProducts />
            <HomeCategorySection />
            <BestSellingProducts />
            <Footer/>
        </div>
    )
}

