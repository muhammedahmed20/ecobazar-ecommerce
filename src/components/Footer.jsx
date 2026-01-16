import React from "react";
import shape from "../assets/shape.svg";
import Capture from "../assets/Capture.PNG";
import logo from "../assets/whiteLogo.svg";
import Frame from "../assets/Frame.svg";
import SubcribeSection from "../components/SubcribeSection";

export default function Footer() {
  return (
    <div>
      <SubcribeSection />
      <footer className="relative flex justify-center bg-custBlack">
      <div className="container flex flex-col z-10">
        <div className="flex flex-col lg:flex-row justify-between border-b border-b-[#333333] py-15 gap-8 lg:gap-0">
          <div className="flex flex-col gap-4 items-center lg:items-start w-full lg:w-4/12">
            <img src={logo} alt="Logo" />
            <p className="text-[14px] text-center lg:text-start text-[#808080] w-11/12">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-[14px] text-white font-medium border-b border-b-lightGreen py-1.5">
                (219) 555-0114
              </p>
              <p className="text-[14px] text-[#808080]">Or</p>
              <p className="text-[14px] text-white font-medium border-b border-b-lightGreen py-1.5">
                Proxy@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-2/12">
            <h2 className="text-[16px] font-medium text-white">My Account</h2>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="text-[14px] text-lightGray hover:text-white">
                My Account
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Order History
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Shoping Cart
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Wishlist
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-2/12">
            <h2 className="text-[16px] font-medium text-white">Helps</h2>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="text-[14px] text-lightGray hover:text-white">
                Contact
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Faqs
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Terms & Condition
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-2/12">
            <h2 className="text-[16px] font-medium text-white">Proxy</h2>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="text-[14px] text-lightGray hover:text-white">
                About
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Shop
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Product
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Track Order
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:w-2/12">
            <h2 className="text-[16px] font-medium text-white">Categories</h2>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <p className="text-[14px] text-lightGray hover:text-white">
                Fruit & Vegetables
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Meat & Fish
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Bread & Bakery
              </p>
              <p className="text-[14px] text-lightGray hover:text-white">
                Beauty & Health
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-7.25 gap-3 lg:gap-0">
          <p className="text-[14px] text-[#808080]">Ecobazar eCommerce © 2026. All Rights Reserved</p>
          <img src={Frame} alt="" />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-50 h-50
                  bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${shape})` }}
      ></div>
      <div
        className="absolute top-150 lg:top-0 right-0 w-50 h-50
                  bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${Capture})` }}
      ></div>
    </footer>
    </div>
  );
}
