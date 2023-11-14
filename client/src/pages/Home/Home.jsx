import React, { useEffect, useState } from "react";
import { Header } from "../CommonComponents/components/Header";
import { Slider } from "./components/Slider";
import { ShopCategories } from "./components/ShopCategories";
import { HomeBestDeals } from "./components/HomeBestDeals";
import { BrandSection } from "./components/BrandSection";
import { PopularProducts } from "./components/PopularProducts";
import { HomeCategorySection } from "./components/HomeCategorySection";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { Footer } from "../CommonComponents/components/Footer";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          console.error("Failed to fetch products.");
        }
      } catch (error) {
        console.error("Error while fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <ShopCategories />
      <HomeBestDeals products={products} />
      {/* <BrandSection /> */}
      <PopularProducts products={products}/>
      <HomeCategorySection />
      <BestSellingProducts />
      <Footer />
    </div>
  );
};
