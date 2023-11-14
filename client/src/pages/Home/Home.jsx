import { useEffect, useState } from "react";
import { Header } from "../CommonComponents/components/Header";
import { Slider } from "./components/Slider";
import { ShopCategories } from "./components/ShopCategories";
import { HomeBestDeals } from "./components/HomeBestDeals";
// import { BrandSection } from "./components/BrandSection";
import { PopularProducts } from "./components/PopularProducts";
import { HomeCategorySection } from "./components/HomeCategorySection";
import { BestSellingProducts } from "./components/BestSellingProducts";
import { Footer } from "../CommonComponents/components/Footer";
import axios from "axios";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

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

  useEffect(() => {
    const fetchpProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        if (response.status === 200) {
          const sortedProducts = response.data.products.sort((a, b) => b.sold - a.sold);
          setBestSellingProducts(sortedProducts);
        } else {
          console.error("Failed to fetch products.");
        }
      } catch (error) {
        console.error("Error while fetching products:", error);
      }
    };

    fetchpProducts();
  }, []);
  // const sortedProducts = [...products].sort((a, b) => b.sold - a.sold);
  //   setBestSellingProducts(sortedProducts);
  
  

  return (
    <div>
      <Header />
      <Slider />
      <ShopCategories />
      {/* best deals - based on discount
          popular - based on likes
          best selling - based on sold */}
      <HomeBestDeals products={products} />
      {/* <BrandSection /> */}
      {/* <PopularProducts /> */}
      {/* <HomeCategorySection products={products} /> */}
      <BestSellingProducts products={bestSellingProducts} />
      <Footer />
    </div>
  );
};
