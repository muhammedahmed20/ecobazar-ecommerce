import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function HotDealSection({ products }) {
  return (
    <div>
      <section className="flex justify-center mb-15 bg-[#F7F7F7]">
        <div className="container flex flex-col gap-8 py-15">
          <div className="flex justify-between">
            <h2 className="font-poppins text-[16px] md:text-[32px] font-semibold text-custBlack">
              Hot Deals
            </h2>
            <Link to="/shop" className="flex items-center gap-2 md:gap-4">
              <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                View All
              </p>
              <FaArrowRight className="text-lightGreen text-[15px]" />
            </Link>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-5">
            {products.slice(10, 20).map((el, index) => {
              return (
                <div
                  key={index}
                  className="relative group row-span-1 col-span-1 hover:row-span-2 hover:col-span-2 border border-[#E6E6E6] bg-white cursor-pointer hover:border-lightGreen hover:shadow-[0_0_10px_#00b20646] duration-300 overflow-hidden flex flex-col gap-4 rounded-md"
                >
                  <div className="relative flex flex-col items-center pt-8">
                    <div className="absolute top-4 left-4  z-10 flex bg-custred py-0.75 px-2 rounded-sm gap-1">
                      <p className="font-poppins text-[14px] text-white">
                        Sale
                      </p>
                      <p className="font-poppins text-[14px] text-white">
                        {el.discountPercentage.toFixed(0)}%
                      </p>
                    </div>
                    <div className="absolute top-4 left-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex bg-blue py-0.75 px-2 rounded-sm gap-1">
                      <p className="font-poppins text-[14px] text-white">
                        Best Sale
                      </p>
                    </div>

                    <img
                      src={el.thumbnail}
                      alt={el.title}
                      className="h-57.5 w-h-63.5 opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    />

                    <img
                      src={el.images[0]}
                      alt={el.title}
                      className="absolute inset-0 m-auto h-57.5 w-h-63.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="hidden group-hover:flex items-center justify-center gap-2 mb-6">
                    <div className="flex justify-center items-center w-11.5 h-11.5 rounded-full bg-[#F2F2F2]">
                      <GoHeart className="text-custBlack text-[20px]" />
                    </div>
                    <button className="flex items-center justify-center rounded-full bg-lightGreen py-3.5 px-32.75">
                      <h6 className="text-white text-[14px] font-poppins font-semibold mr-3">
                        Add to Cart
                      </h6>
                      <HiOutlineShoppingBag className="text-white text-[15px]" />
                    </button>
                    <div className="flex justify-center items-center w-11.5 h-11.5 rounded-full bg-[#F2F2F2]">
                      <IoEyeOutline className="text-custBlack text-[20px]" />
                    </div>
                  </div>
                  <div className="hidden group-hover:flex flex-col items-center gap-1">
                    <h3 className="font-poppins text-[18px] text-lightGreen">
                      {el.title}
                    </h3>

                    <div className="flex gap-1">
                      <p className="font-poppins font-medium text-[24px] text-custBlack">
                        $
                        {(
                          el.price -
                          el.price * (el.discountPercentage / 100)
                        ).toFixed(2)}
                      </p>
                      <del className="font-poppins text-[24px] text-lightGray">
                        ${el.price.toFixed(2)}
                      </del>
                    </div>
                    <div className="flex items-center">
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
                      <p className="text-[#808080] text-[12px] font-poppins">
                        ({el.reviews.length} Feedback)
                      </p>
                    </div>
                    <div className="flex flex-col items-center py-4.5 gap-1.5">
                      <h3 className="font-poppins text-[14px] text-lightGray">
                        Hurry up! Offer ends In:
                      </h3>
                      <div className=" flex">
                        <div className="flex flex-col items-center px-2.5 gap-1">
                          <h3 className="font-poppins font-medium text-[18px] text-custBlack">
                            00
                          </h3>
                          <p className="font-poppins text-[10px] tracking-[0.03em] text-lightGray uppercase">
                            Days
                          </p>
                        </div>
                        <p className="font-poppins text-[24px] text-white/60 uppercase">
                          :
                        </p>
                        <div className="flex flex-col items-center px-2.5 gap-1">
                          <h3 className="font-poppins font-medium text-[18px] text-custBlack">
                            02
                          </h3>
                          <p className="font-poppins text-[10px] tracking-[0.03em] text-lightGray uppercase">
                            Hours
                          </p>
                        </div>
                        <p className="font-poppins text-[24px] text-white/60 uppercase">
                          :
                        </p>
                        <div className="flex flex-col items-center px-2.5 gap-1">
                          <h3 className="font-poppins font-medium text-[18px] text-custBlack">
                            18
                          </h3>
                          <p className="font-poppins text-[10px] tracking-[0.03em] text-lightGray uppercase">
                            Mins
                          </p>
                        </div>
                        <p className="font-poppins text-[24px] text-white/60 uppercase">
                          :
                        </p>
                        <div className="flex flex-col items-center px-2.5 gap-1">
                          <h3 className="font-poppins font-medium text-[18px] text-custBlack">
                            46
                          </h3>
                          <p className="font-poppins text-[10px] tracking-[0.03em] text-lightGray uppercase">
                            Secs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex group-hover:hidden justify-between items-center px-3 pb-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-poppins text-[14px] text-[#4D4D4D] duration-300 group-hover:text-lightGreen">
                        {el.title}
                      </h3>

                      <div className="flex gap-1">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
