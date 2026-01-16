import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import FreshFruit from "../assets/FreshFruit.png";
import vig from "../assets/vig.png";
import meat from "../assets/meat.png";
import Snacks from "../assets/Snacks.png";
import Beverages from "../assets/Beverages.png";
import Beauty from "../assets/Beauty & Health.png";
import Bread from "../assets/Bread & Bakery.png";
import BakingNeeds from "../assets/BakingNeeds.png";
import Cooking from "../assets/Cooking.png";
import DiabeticFood from "../assets/DiabeticFood.png";
import DishDetergents from "../assets/DishDetergents.png";
import Oil from "../assets/Oil.png";

export default function Categories() {
  const [categories] = useState([
    {
      title: "Fresh Fruit",
      img: FreshFruit,
      path: "/category/fresh-fruit",
    },
    {
      title: "Fresh Vegetables",
      img: vig,
      path: "/category/fresh-vegetables",
    },
    {
      title: "Meat & Fish",
      img: meat,
      path: "/category/meat-fish",
    },
    {
      title: "Snacks",
      img: Snacks,
      path: "/category/snacks",
    },
    {
      title: "Beverages",
      img: Beverages,
      path: "/category/beverages",
      hideMobile: true,
    },
    {
      title: "Beauty & Health",
      img: Beauty,
      path: "/category/beauty-health",
      hideMobile: true,
    },
    {
      title: "Bread & Bakery",
      img: Bread,
      path: "/category/bread-bakery",
      hideMobile: true,
    },
    {
      title: "Baking Needs",
      img: BakingNeeds,
      path: "/category/baking-needs",
      hideMobile: true,
    },
    {
      title: "Cooking",
      img: Cooking,
      path: "/category/cooking",
      hideMobile: true,
    },
    {
      title: "Diabetic Food",
      img: DiabeticFood,
      path: "/category/diabetic-food",
      hideMobile: true,
    },
    {
      title: "Dish Detergents",
      img: DishDetergents,
      path: "/category/dish-detergents",
      hideMobile: true,
    },
    {
      title: "Oil",
      img: Oil,
      path: "/category/oil",
      hideMobile: true,
    },
  ]);
  return (
    <div>
      <section className="flex justify-center my-15">
        <div className="container flex flex-col gap-8">
          <div className="flex justify-between">
            <h2 className="font-poppins text-[16px] md:text-[32px] font-semibold text-custBlack">
              All Categories
            </h2>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-2 grid-cols-2 md:grid-cols-6 gap-6">
            {categories.map((el, index) => {
              return (
                <Link
                  to={el.path}
                  key={index}
                  className={`row-span-1 col-span-1 pt-4 pb-6 px-1.25 rounded-[5px] border border-[#E6E6E6] flex flex-col items-center gap-4  hover:shadow-[0_0_10px]
  hover:shadow-lightGreen/30
  hover:border-lightGreen ${
                    el.hideMobile ? "hidden md:flex" : "flex"
                  }`}
                >
                  <img src={el.img} alt="" />
                  <h4 className="font-poppins font-medium text-center lg:text-left text-[10px] lg:text-[18px] text-custBlack">
                    {el.title}
                  </h4>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
