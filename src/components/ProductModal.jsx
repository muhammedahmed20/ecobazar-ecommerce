import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaStar, FaTwitter } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { LuDot } from "react-icons/lu";

export default function ProductModal({ product }) {
  const [counter, setCounter]=useState(0)
  if (!product) return null;


  let increment = () => {
    let value = counter + 1
    setCounter(value)
  }
  let decrement = () => {
    if(counter > 0){
      let value = counter - 1
    setCounter(value)
    }else{
      alert("you can't do that")
    }
  }

  return (
    <div>
      <dialog
        id="my_modal_2"
        className="modal p-10"
        onClick={(e) => {
          if (e.target.tagName === "DIALOG") {
            e.target.close();
          }
        }}
      >
        <div className="modal-box max-w-9/12 ">
          <div className="flex">
            <div className="flex gap-6 w-6/12">
              <div className="carousel carousel-vertical w-24">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="carousel-item mb-3 border border-lightGray flex justify-center items-center rounded-[5px]"
                  >
                    <img src={img} alt={product.title} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center w-99">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col w-6/12">
              <div className="flex flex-col border-b border-b-[#e6e6e6] pb-5 mb-8">
                <div className="flex items-center gap-1.5 mb-3">
                  <h1 className="text-[20px] font-semibold text-custBlack">
                    {product.title}
                  </h1>
                  <div className="text-[14px] bg-[#20B52633]/20 text-darkGreen py-1 px-2 rounded-sm">
                    {product.availabilityStatus}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mb-5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => {
                      return (
                        <FaStar
                          key={i}
                          className={`text-[18px] ${
                            i < Math.round(product.rating)
                              ? "text-orange"
                              : "text-[#CCCCCC]"
                          }`}
                        />
                      );
                    })}
                    <p className="text-[14px] text-gray ml-2">
                      {product.reviews.length} Review
                    </p>
                  </div>
                  <LuDot className="text-[#B3B3B3] text-[14px]" />
                  <div className="flex gap-1">
                    <h1 className="text-[#333333] text-[14px]">SKU:</h1>
                    <h1 className="text-gray text-[14px]">{product.sku}</h1>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <del className="font-poppins text-[24px] text-[#B3B3B3]">
                      ${product.price.toFixed(2)}
                    </del>
                    <p className="font-poppins font-medium text-[24px] text-darkGreen">
                      $
                      {(
                        product.price -
                        product.price * (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center bg-custred/10 rounded-[30px] py-0.75 px-2.5 ">
                    <h1 className="text-custred text-[14px] font-medium">
                      {(
                        product.price *
                        (product.discountPercentage / 100)
                      ).toFixed(2)}
                      % Off
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h1 className="text-[14px] text-custBlack">Brand:</h1>
                    <h1 className="text-[18px] text-lightGreen font-semibold">
                      {product.brand}
                    </h1>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <h1 className="text-[14px] text-custBlack">Share item:</h1>
                    <div className="flex gap-1.25">
                      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-lightGreen">
                        <FaFacebookF className="text-white text-[18px]"/>
                      </div>
                      <div className="w-10 h-10 flex justify-center items-center rounded-full ">
                        <FaTwitter  className="text-[#4D4D4D] text-[18px]"/>
                      </div>
                      <div className="w-10 h-10 flex justify-center items-center rounded-full ">
                        <FaPinterestP className="text-[#4D4D4D] text-[18px]"/>
                      </div>
                      <div className="w-10 h-10 flex justify-center items-center rounded-full ">
                        <FaInstagram className="text-[#4D4D4D] text-[18px]"/>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#808080] text-[14px]">{product.description}</p>
              </div>
              <div className="flex items-center justify-center gap-3 py-4.5 border-y border-y-[#e6e6e6] mb-6">
                <div className="flex items-center justify-center gap-2.5 p-2 border border-[#F2F2F2] rounded-full">
                  <button className="flex items-center justify-center rounded-full bg-[#F2F2F2] w-8.5 h-8.5 text-gray text-[14px]"
                  onClick={()=>decrement()}
                  >-</button>
                  <p className="text-[16px] text-custBlack">{counter}</p>
                  <button className="flex items-center justify-center rounded-full bg-[#F2F2F2] w-8.5 h-8.5 text-custBlack text-[14px]"
                  onClick={()=>increment()}
                  >+</button>
                </div>
                <button className="flex items-center justify-center bg-lightGreen rounded-full flex-1 gap-4 text-white text-[16px] py-4">
                  <h1>Add to Cart</h1>
                  <HiOutlineShoppingBag/>
                </button>
                <div className="flex items-center justify-center w-13 h-13 rounded-full bg-[#20B5261A] text-darkGreen">
                  <GoHeart/>
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center gap-1.5">
                  <h1 className="font-medium text-[14px] text-custBlack">Category:</h1>
                  <h1 className="font-medium text-[14px] text-[#808080]">{product.category}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
