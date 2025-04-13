import React from "react";
import backgroundImage from "/imgs/hero-background.png";
import Navbar from "./Navbar";
import Button from "../ui/Button";
const Hero = () => {
  return (
    <section
      className="h-dvh bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full w-full bg-black/60">
        <div className="h-full w-full p-5 md:p-7 sm:p-10 container-custom">
          <Navbar />
          <div className="w-full h-full text-center lg:text-start flex justify-center items-center lg:pl-8">
            <div className="space-y-7 w-full md:p-10">
              <h2 className="text-[#F1F5F9] text-2xl font-normal">
                No lines.Less hassle, Lower costs.
              </h2>
              <h1 className="text-white leading-[120%] text-5xl md:text-7xl font-medium lg:w-[70%]">
                Easy Online Suboxone Treatment for Opioid Addiction
              </h1>
              <Button
                className="mx-auto lg:mx-0 w-[300px]"
                text="Download the app today"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
