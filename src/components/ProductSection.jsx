import React, { useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";

export default function ProductSection({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_2").showModal();
  };
  return (
    <div>
            <ProductModal product={selectedProduct} />
      <section className="flex justify-center mb-15">
        <div className="container flex flex-col gap-8">
          <div className="flex justify-between">
            <h2 className="font-poppins text-[16px] md:text-[32px] font-semibold text-custBlack">
              Popular Products
            </h2>
            <Link to="/shop" className="flex items-center gap-2 md:gap-4">
              <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                View All
              </p>
              <FaArrowRight className="text-lightGreen text-[15px]" />
            </Link>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-2 grid-cols-2 md:grid-cols-5">
            {products.slice(0, 10).map((el, index) => {
              return (
                <div
                  key={index}
                  className="relative group row-span-1 col-span-1 border border-[#E6E6E6] cursor-pointer hover:border-lightGreen hover:shadow-[0_0_10px_#00b20646] duration-300 overflow-hidden flex flex-col gap-4"
                >
                  <div className="flex flex-col pt-8">
                    {/* <div className="absolute top-4 left-4 flex bg-custred py-0.75 px-2 rounded-sm gap-1">
                      <p className="font-poppins text-[14px] text-white">
                        Sale
                      </p>
                      <p className="font-poppins text-[14px] text-white">50%</p>
                    </div> */}
                    <img
                      src={el.images[0]}
                      alt="apple"
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
                        {
                          [...Array(5)].map((_, i) => {
                            return(
                              <FaStar key={i} className={`text-[12px] ${i < Math.round(el.rating) ? "text-orange" : "text-[#CCCCCC]"}`} />
                            )
                          })
                        }
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
                    <div onClick={() => openModal(el)} className="w-10 h-10 rounded-full bg-white flex justify-center items-center border border-[#E6E6E6]">
                      <IoEyeOutline className="text-[20px] text-custBlack" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
