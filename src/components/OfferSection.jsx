import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function OfferSection() {
  return (
    <div>
      <section className="flex justify-center mb-15">
        <div className="relative container flex justify-center lg:justify-end items-center py-15 pl-12.75 h-75">
          <div className="absolute inset-0 bg-[url('./assets/stone.jpg')] bg-cover bg-center rounded-[10px]"></div>
          <div className="relative flex flex-col items-center lg:items-start w-full lg:w-1/3">
            <h5 className="font-poppins font-medium text-[16px] tracking-[0.03em] uppercase text-center text-white">
              Summer Sale
            </h5>
            <div className="flex gap-1">
              <h2 className="font-poppins font-semibold text-[56px] text-center text-orange">
                37%
              </h2>
              <h2 className="font-poppins font-semibold text-[56px] text-center text-white">
                OFF
              </h2>
            </div>
            <p className="font-poppins text-[16px] text-white w-4/5 mb-7">
              Free on all your order, Free Shipping and 30 days money-back
              guarantee
            </p>
            <button className="flex items-center justify-center gap-2 md:gap-4 rounded-full bg-lightGreen py-2 md:py-4 px-5 md:px-10">
              <p className="text-white font-poppins font-semibold text-[12px] md:text-[16px]">
                Shop now
              </p>
              <FaArrowRight className="text-white text-[15px]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
