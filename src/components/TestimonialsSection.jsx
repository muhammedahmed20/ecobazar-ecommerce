import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import comma from "../assets/Vector.svg";
import { FaStar } from "react-icons/fa";

export default function TestimonialsSection({ products }) {
  return (
    <div>
      <section className="flex justify-center mb-15 bg-[#F7F7F7]">
        <div className="container flex flex-col items-center py-15 gap-8">
          <div className="flex justify-between items-center w-full">
            <h1 className="font-semibold text-custBlack text-[32px]">
              Client Testimonials
            </h1>
            <div className="flex gap-3">
              <div className="flex justify-center items-center w-11.25 h-11.25 rounded-full bg-white hover:bg-lightGreen hover:text-white">
                <FaArrowLeftLong />
              </div>
              <div className="flex justify-center items-center w-11.25 h-11.25 rounded-full bg-white hover:bg-lightGreen hover:text-white">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 md:gap-0 md:justify-between flex-wrap w-full">
            {products[0]?.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg"
                style={{ width: "360px" }}
              >
                <img src={comma} alt="" />
                <h1 className="mt-4 mb-6 text-[14px]">
                  {review.comment}
                </h1>

                <div className="flex gap-4 w-full">
                  <div className="flex justify-center items-center w-14 h-14 rounded-full bg-gray text-white">
                    <p className="text-[24px]">
                      {review.reviewerName.charAt(0)}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-[16px] font-medium">
                        {review.reviewerName}
                      </p>
                      <div className="flex ">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-[12px] ${
                              i < Math.round(review.rating)
                                ? "text-orange"
                                : "text-[#CCCCCC]"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[14px] text-lightGray">Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
