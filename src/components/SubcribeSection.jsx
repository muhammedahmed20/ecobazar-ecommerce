import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

export default function SubcribeSection() {
  return (
    <section className="flex justify-center bg-[#F7F7F7] py-10">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="w-full lg:w-5/12 text-center lg:text-start">
          <h1 className="text-custBlack text-[24px] font-semibold">
            Subcribe our Newsletter
          </h1>
          <p className="text-lightGray text-[14px] w-full lg:w-10/12">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="flex flex-1 justify-between items-center rounded-full bg-white border border-[#E5E5E5] pl-6">
          <input
            type="text"
            className="input border-0 outline-0 rounded-full"
            placeholder="Your email address"
          />
          <button className="bg-lightGreen text-white rounded-full text-[16px] font-semibold px-5 lg:px-10 py-3 lg:py-4">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center lg:justify-end gap-1.25 w-full lg:w-2/12">
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-lightGreen">
            <FaFacebookF className="text-white text-[18px]" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full ">
            <FaTwitter className="text-[#4D4D4D] text-[18px]" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full ">
            <FaPinterestP className="text-[#4D4D4D] text-[18px]" />
          </div>
          <div className="w-10 h-10 flex justify-center items-center rounded-full ">
            <FaInstagram className="text-[#4D4D4D] text-[18px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
