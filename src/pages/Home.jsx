import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import CategoriesSection from "../components/CategoriesSection";
import axios from "axios";
import ProductSection from "../components/ProductSection";
import SaleSection from "../components/SaleSection";
import HotDealSection from "../components/HotDealSection";
import OfferSection from "../components/OfferSection";
import FeaturedProduct from "../components/FeaturedProduct";
import TestimonialsSection from "../components/TestimonialsSection";
import LogosSection from "../components/LogosSection";
import InstgramSection from "../components/InstgramSection";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <CategoriesSection />
      <ProductSection products={products} />
      <SaleSection />
      <HotDealSection products={products} />
      <OfferSection />
      <FeaturedProduct products={products} />
      <TestimonialsSection products={products} />
      <LogosSection />
      <InstgramSection />
    </div>
  );
}
