import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import linearBackground from "/backgrounds/linear-background.gif";
import Button from "../ui/Button";
import { useEffect } from "react";

const GetAppSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${linearBackground})` }}
    >
      <div className="w-full h-full linear-background bg-center">
        <div className="w-full container-custom h-full gap-4 justify-center items-center mt-40 flex flex-col py-24">
          {/* animate from left */}
          <h1
            data-aos="slide-left"
            className="text-black font-medium text-2xl text-center"
          >
            Secure Access to Your Medications
          </h1>
          {/* animate from right */}
          <h1
            data-aos="slide-right"
            data-aos-delay="200"
            className="text-black font-medium text-[52px] text-center"
          >
            Get Your Meds Online Today
          </h1>
          <p className="text-xl font-normal text-center w-[90%] sm:w-[80%] lg:w-[60%]">
            We have partnered with RX-Outreach to provide mail order medications
            at a fraction of the price you may find in your local pharmacy. Meet
            your chronic illness provider online today and get your medication
            delivered as quickly as 24 hours later.
          </p>
          <Button text="Get the App" className="bg-black" />
        </div>
      </div>
    </section>
  );
};

export default GetAppSection;
