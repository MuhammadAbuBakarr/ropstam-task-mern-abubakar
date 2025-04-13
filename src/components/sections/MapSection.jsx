import React from "react";
import toronto from "/imgs/toronto.png";
import mapIcon from "/icons/map.svg";
import MapUS from "../Map";
const MapSection = () => {
  return (
    <div className="flex container-custom flex-col ">
      <div className="flex flex-col justify-between items-center mt-44 gap-6">
        <h3 className="uppercase text-text-secondary text-xl md:text-2xl font-medium">
          States WE
        </h3>
        <h1 className="text-text-primary text-4xl md:text-[52px] leading-tight font-medium">
          Currently Serve
        </h1>
        <p className="text-base leading-[160%] md:text-xl font-normal text-text-muted text-center w-[90%] sm:w-[80%] md:w-[70%]">
          We believe everyone should have access to treatment and care. That's
          why we re teaming up with providers all over the country. Click on a
          green state to see the insurance companies we currently accept and to
          learn more about online Suboxone doctors in your area.
        </p>
      </div>
      <div className="flex p-5 md:p-12 justify-center items-center flex-col-reverse sm:flex-row">
        <div className="flex basis-[50%] justify-end mt-14 flex-col gap-6">
          <img className="" src={toronto} alt="" />
          <div className="">
            <h1 className="text-black font-bold text-3xl">Toronto</h1>
            <div className="text-text-secondary space-x-2 flex items-stretch underline font-medium text-[18px]">
              <img className="w-4" src={mapIcon} alt="" />
              <span>Ottawa St. and Homer Waston Blvd.</span>
            </div>
          </div>
        </div>
        <MapUS />
      </div>
    </div>
  );
};

export default MapSection;
