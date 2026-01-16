import React from "react";
import steps from "../assets/steps.svg";
import mango from "../assets/mango.svg";
import food2 from "../assets/food2.svg";
import food from "../assets/food.svg";
import bookoff from "../assets/bookoff.svg";
import g from "../assets/g.svg";

export default function LogosSection() {
  return (
    <div>
      <section className="py-8 flex justify-center mb-15">
        <div className="container mx-auto flex flex-col items-center text-center gap-10
                md:flex-row md:justify-between md:items-center md:text-left">
          <img src={steps} alt="Logo 1" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
          <img src={mango} alt="Logo 2" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
          <img src={food2} alt="Logo 3" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
          <img src={food} alt="Logo 4" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
          <img src={bookoff} alt="Logo 4" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
          <img src={g} alt="Logo 4" className="h-12 w-auto" />
          <p className="text-[#E5E5E5]">|</p>
        </div>
      </section>
    </div>
  );
}
