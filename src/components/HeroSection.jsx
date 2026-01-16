import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div>
      <section className="flex justify-center">
        <div className="container py-6">
          <div className="grid grid-cols-4 md:grid-cols-3 grid-rows-2 gap-3">
            <div className="relative flex flex-col justify-center row-span-1 md:row-span-2 col-span-4 md:col-span-2  rounded-[10px] p-6 md:pl-15 md:py-38.75">
              <div className="absolute inset-0 bg-[url('./assets/women.jpg')] bg-cover bg-center md:bg-left rounded-[10px]"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/30 md:to-transparent rounded-[10px]"></div>
              <div className="relative flex flex-col items-center md:items-start">
                <h1 className="text-white w-2/2 md:w-1/2 font-poppins font-semibold text-center md:text-left text-[25px]/[120%] md:text-[48px]/[120%] mb-7">
                  Fresh & Healthy Organic Food
                </h1>
                <div className="border-t-0 md:border-s border-lightGreen pl-0 md:pl-3.5 mb-7">
                  <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
                    <h4 className=" text-white font-poppins font-medium text-[12px] md:text-[20px]">
                      Sale up to
                    </h4>
                    <span className="bg-orange text-white font-poppins font-semibold text-[12px] md:text-[20px] py-1 px-3 rounded-[5px]">
                      30% OFF
                    </span>
                  </div>
                  <p className=" text-white text-center md:text-left font-poppins font-medium text-[12px] md:text-[20px]">
                    Free shipping on all your order.
                  </p>
                </div>
                <button className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-white py-2 md:py-4 px-5 md:px-10">
                  <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                    Shop now
                  </p>
                  <FaArrowRight className="text-lightGreen text-[15px]" />
                </button>
              </div>
            </div>
            <div className="relative row-span-1 col-span-2 md:col-span-1 rounded-[10px] pt-4 md:pt-8 pl-4 md:pl-8">
              <div className="absolute inset-0 bg-[url('./assets/bag.jpg')] bg-cover bg-center md:bg-left rounded-[10px]"></div>
              <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent rounded-[10px]"></div>
              <div className="relative flex flex-col">
                <h2 className="text-custBlack text-[10px] md:text-[14px] tracking-[3%] font-poppins font-medium uppercase mb-1 md:mb-2">
                  Summer Sale
                </h2>
                <h1 className="text-custBlack text-[20px] md:text-[32px] font-poppins font-semibold mb-1.5 md:mb-3">
                  75% OFF
                </h1>
                <p className="text-gray text-[10px] md:text-[14px] font-poppins mb-1 md:mb-6">
                  Only Fruit & Vegetable
                </p>
                <button className="flex items-center gap-2 md:gap-4">
                  <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                    Shop now
                  </p>
                  <FaArrowRight className="text-lightGreen text-[15px]" />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center relative row-span-1 col-span-2 md:col-span-1 rounded-[10px] pt-4 md:pt-8 pl-4 md:pl-8">
              <div className="absolute inset-0 bg-[url('./assets/tree.jpg')] bg-cover bg-center md:bg-left rounded-[10px]"></div>
              <div className="absolute inset-0 bg-linear-to-r from-[#002603CC]/80 to-[#002603CC]/80 rounded-[10px]"></div>
              <div className="relative flex flex-col items-center">
                <h2 className="text-white text-[10px] md:text-[14px] tracking-[3%] font-poppins font-medium uppercase mb-1 md:mb-2">
                  Best Deal
                </h2>
                <h1 className="text-white w-4/4 lg:w-3/4 text-center lg:text-left text-[16px] md:text-[32px] font-poppins font-semibold mb-1.5 md:mb-3">
                  Special Products Deal of the Month
                </h1>
                <button className="flex items-center gap-2 md:gap-4">
                  <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                    Shop now
                  </p>
                  <FaArrowRight className="text-lightGreen text-[15px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
