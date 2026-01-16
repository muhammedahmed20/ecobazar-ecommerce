import React from "react";
import { BiSupport } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiPackage } from "react-icons/pi";

export default function FeatureSection() {
  return (
    <div>
      <section className="flex justify-center mb-15">
        <div className="container flex justify-center rounded-lg shadow-[0_0_10px_#9d9d9da6]">
          <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex flex-col lg:flex-row items-center col-span-1 row-span-1 gap-1.5 p-10">
              <CiDeliveryTruck className="text-lightGreen text-[50px]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins font-semibold text-center lg:text-left text-[10px] lg:text-[16px] text-custBlack">
                  Free Shipping
                </h3>
                <p className="font-poppins text-center lg:text-left text-[10px] lg:text-[14px] text-lightGray">
                  Free shipping on all your order
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center col-span-1 row-span-1 gap-1.5 p-10">
              <BiSupport className="text-lightGreen text-[50px]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins font-semibold text-center lg:text-left text-[10px] lg:text-[16px] text-custBlack">
                  Customer Support 24/7
                </h3>
                <p className="font-poppins text-center lg:text-left text-[10px] lg:text-[14px] text-lightGray">
                  Instant access to Support
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center col-span-1 row-span-1 gap-1.5 p-10">
              <IoBagCheckOutline className="text-lightGreen text-[50px]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins font-semibold text-center lg:text-left text-[10px] lg:text-[16px] text-custBlack">
                  100% Secure Payment
                </h3>
                <p className="font-poppins text-center lg:text-left text-[10px] lg:text-[14px] text-lightGray">
                  We ensure your money is save
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center col-span-1 row-span-1 gap-1.5 p-10">
              <PiPackage className="text-lightGreen text-[50px]" />
              <div className="flex flex-col gap-2">
                <h3 className="font-poppins font-semibold text-center lg:text-left text-[10px] lg:text-[16px] text-custBlack">
                  Money-Back Guarantee
                </h3>
                <p className="font-poppins text-center lg:text-left text-[10px] lg:text-[14px] text-lightGray">
                  30 Days Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
