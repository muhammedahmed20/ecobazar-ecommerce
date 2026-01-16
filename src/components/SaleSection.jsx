import React from "react";
import { FaArrowRight } from "react-icons/fa";

import card1 from "../assets/card1.jpg";
import fat from "../assets/fat.jpg";
import fruitcups from "../assets/fruitcups.jpg";

export default function SaleSection() {
  return (
    <div>
      <section className="flex justify-center mb-15">
        <div className="container">
          <div className="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="relative flex justify-center pt-8.75 row-span-1 lg:col-span-1 h-134">
              {/* background image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-[10px]"
                style={{ backgroundImage: `url(${card1})` }}
              ></div>

              <div className="relative flex flex-col items-center">
                <h6 className="font-poppins font-medium text-[14px] tracking-[0.03em] text-white uppercase mb-4">
                  Best Deals
                </h6>
                <h2 className="font-poppins font-semibold text-[40px] text-center text-white mb-2">
                  Sale of the Month
                </h2>
                <div className="flex mb-6">
                  <div className="flex flex-col items-center px-3 gap-1">
                    <h3 className="font-poppins text-[24px] text-white">00</h3>
                    <p className="font-poppins text-[12px] tracking-[0.03em] text-white uppercase">
                      Days
                    </p>
                  </div>
                  <p className="font-poppins text-[24px] text-white/60 uppercase">
                    :
                  </p>
                  <div className="flex flex-col items-center px-3 gap-1">
                    <h3 className="font-poppins text-[24px] text-white">02</h3>
                    <p className="font-poppins text-[12px] tracking-[0.03em] text-white uppercase">
                      Hours
                    </p>
                  </div>
                  <p className="font-poppins text-[24px] text-white/60 uppercase">
                    :
                  </p>
                  <div className="flex flex-col items-center px-3 gap-1">
                    <h3 className="font-poppins text-[24px] text-white">18</h3>
                    <p className="font-poppins text-[12px] tracking-[0.03em] text-white uppercase">
                      Mins
                    </p>
                  </div>
                  <p className="font-poppins text-[24px] text-white/60 uppercase">
                    :
                  </p>
                  <div className="flex flex-col items-center px-3 gap-1">
                    <h3 className="font-poppins text-[24px] text-white">46</h3>
                    <p className="font-poppins text-[12px] tracking-[0.03em] text-white uppercase">
                      Secs
                    </p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-white py-2 md:py-3.5 px-8 md:px-10">
                  <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                    Shop now
                  </p>
                  <FaArrowRight className="text-lightGreen text-[15px]" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center pt-8.75 row-span-1 lg:col-span-1">
              {/* background image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-[10px]"
                style={{ backgroundImage: `url(${fat})` }}
              ></div>

              <div className="relative flex flex-col items-center">
                <h6 className="font-poppins font-medium text-[14px] tracking-[0.03em] text-white uppercase mb-4">
                  85% Fat Free
                </h6>
                <h2 className="font-poppins font-semibold text-[40px] text-center text-white mb-2">
                  Low-Fat Meat
                </h2>
                <div className="flex mb-[28.5px]">
                  <h4 className="font-poppins text-[18px] text-center text-white">
                    Started at
                  </h4>
                  <h4 className="font-poppins font-semibold text-[20px] text-center text-orange">
                    $79.99
                  </h4>
                </div>
                <button className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-white py-2 md:py-3.5 px-8 md:px-10">
                  <p className="text-lightGreen font-poppins font-semibold text-[12px] md:text-[16px]">
                    Shop now
                  </p>
                  <FaArrowRight className="text-lightGreen text-[15px]" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center pt-8.75 row-span-1 lg:col-span-1">
              {/* background image */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-[10px]"
                style={{ backgroundImage: `url(${fruitcups})` }}
              ></div>

              <div className="relative flex flex-col items-center">
                <h6 className="font-poppins font-medium text-[14px] tracking-[0.03em] text-custBlack uppercase mb-4">
                  Summer Sale
                </h6>
                <h2 className="font-poppins font-semibold text-[40px] text-center text-custBlack mb-2">
                  100% Fresh Fruit
                </h2>
                <div className="flex items-center gap-3 mb-[28.5px]">
                  <h4 className="font-poppins text-[18px] text-center text-custBlack">
                    Up to
                  </h4>
                  <div className="py-1.5 px-3 bg-custBlack rounded-[5px]">
                    <h4 className="font-poppins font-semibold text-[18px] text-center text-[#FCC900]">
                      64% OFF
                    </h4>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-white py-2 md:py-3.5 px-8 md:px-10">
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
