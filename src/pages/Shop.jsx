import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { FaFilter, FaStar } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductModal from "../components/ProductModal";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

const openModal = (product) => {
  setSelectedProduct(product);
  document.getElementById("my_modal_2").showModal();
};


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

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ProductModal product={selectedProduct} />
      <Breadcrumb />
      <div className="flex justify-center">
        <div className="container flex gap-6 mb-15">
          <aside className="w-64 flex flex-col items-center">
            <button className="bg-lightGreen text-white rounded-full flex items-center py-3.5 px-8 gap-3">
              <p className="text-[14px] font-semibold">Filter</p>
              <FaFilter className="text-[14px]" />
            </button>
            <div className="collapse collapse-arrow rounded-none border-b border-b-lightGray">
              <input type="checkbox" />

              <div className="collapse-title text-[20px] font-medium">
                All Categories
              </div>

              <div className="collapse-content">
                <div className="flex flex-col gap-3">
                  {categories.map((el) => {
                    return (
                      <label
                        key={el.slug}
                        className="flex items-center gap-2 py-2.5"
                      >
                        <input
                          type="radio"
                          name="allcategories"
                          className="radio radio-[#CCCCCC] checked:radio-success"
                        />
                        <span className="text-[14px] text-custBlack">
                          {el.slug}
                        </span>
                      </label>
                    );
                  })}
                  {/* <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">
                      Fresh Fruit
                    </span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">
                      Vegetables
                    </span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">Cooking</span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">Snacks</span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">
                      Beverages
                    </span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">
                      Beauty & Health
                    </span>
                  </label>
                  <label className="flex items-center gap-2 py-2.5">
                    <input
                      type="radio"
                      name="allcategories"
                      className="radio radio-[#CCCCCC] checked:radio-success"
                    />
                    <span className="text-[14px] text-custBlack">
                      Bread & Bakery
                    </span>
                  </label> */}
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-b-lightGray">
              <input type="checkbox" />

              <div className="collapse-title text-[20px] font-medium">
                Price
              </div>

              <div className="collapse-content">
                <div className="flex flex-col gap-3">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="range range-success"
                  />

                  <div className="flex text-sm">
                    <p className="text-[14px] text-gray mr-1">price:</p>
                    <span className="text-custBlack font-semibold">
                      {price}_
                    </span>
                    <span className="text-custBlack font-semibold">3,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow rounded-none border-b border-b-lightGray">
              <input type="checkbox" />

              <div className="collapse-title text-[20px] font-medium">
                Rating
              </div>

              <div className="collapse-content">
                <div className="flex flex-col gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-[#CCCCCC] checked:checkbox-success checked:text-white"
                      />

                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={
                              star <= rating
                                ? "text-orange-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>

                      {/* النص */}
                      <p className="text-sm text-gray-700">{rating}.0 & up</p>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <section className="flex justify-center flex-1 ">
            <div className="container flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <div className="relative text-left flex items-center gap-2">
                  <h5 className="text-[#808080] text-[14px]">Store By:</h5>
                  <div className="border border-[#E6E6E6] px-3 rounded-md">
                    <select className=" text-[#4D4D4D] pr-4 py-2   focus:outline-none">
                      <option>Latest</option>
                      <option>Category</option>
                      <option>Price</option>
                      <option>Rating</option>
                      <option>Popularity</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-1 text-[16px]">
                  <p className="text-custBlack font-semibold">
                    {products.length}
                  </p>
                  <p className="text-[#808080] ">Results Found</p>
                </div>
              </div>
              <div className="grid md:grid-rows-2 grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {products.slice(0, 15).map((el, index) => {
                  return (
                    <div
                      key={index}
                      className="relative group row-span-1 col-span-1 border border-[#E6E6E6] cursor-pointer hover:border-lightGreen hover:shadow-[0_0_10px_#00b20646] duration-300 overflow-hidden flex flex-col gap-4 rounded-[5px]"
                    >
                      <div className="flex flex-col pt-8">
                        {/* <div className="absolute top-4 left-4 flex bg-custred py-0.75 px-2 rounded-sm gap-1">
                            <p className="font-poppins text-[14px] text-white">
                              Sale
                            </p>
                            <p className="font-poppins text-[14px] text-white">50%</p>
                          </div> */}
                        <img
                          src={el.thumbnail}
                          alt={el.title}
                          className="h-57.5 w-h-63.5"
                        />
                      </div>
                      <div className="flex justify-between items-center px-3 pb-3">
                        <div className="flex flex-col">
                          <h3 className="font-poppins text-[14px] text-[#4D4D4D] duration-300 group-hover:text-lightGreen">
                            {el.title}
                          </h3>
                          <div className="flex gap-2">
                            <p className="font-poppins font-medium text-[16px] text-custBlack">
                              $
                              {(
                                el.price -
                                el.price * (el.discountPercentage / 100)
                              ).toFixed(2)}
                            </p>
                            <del className="font-poppins text-[16px] text-lightGray">
                              ${el.price.toFixed(2)}
                            </del>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => {
                              return (
                                <FaStar
                                  key={i}
                                  className={`text-[12px] ${
                                    i < Math.round(el.rating)
                                      ? "text-orange"
                                      : "text-[#CCCCCC]"
                                  }`}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#F2F2F2] duration-300 group-hover:bg-lightGreen flex justify-center items-center">
                          <HiOutlineShoppingBag className="text-[20px] duration-300 group-hover:text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 -right-12 duration-300 group-hover:right-4 flex flex-col gap-1.5">
                        <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center border border-[#E6E6E6]">
                          <GoHeart className="text-[20px] text-custBlack" />
                        </div>
                        <button
                          className="w-10 h-10 rounded-full bg-white flex justify-center items-center border border-[#E6E6E6] cursor-pointer"
                          onClick={() => openModal(el)}
                        >
                          <IoEyeOutline className="text-[20px] text-custBlack" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-1">
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-[#F2F2F2] text-gray">
                  <IoIosArrowBack />
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-lightGreen text-white text-[16px]">
                  1
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  2
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  3
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  4
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  5
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  ...
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-whit text-gray text-[16px]">
                  20
                </div>
                <div className="flex items-center justify-center w-8.75 h-8.75 rounded-full bg-[#F2F2F2] text-gray">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
