import React from "react";
import abc from "/icons/abc.svg";
import cbs from "/icons/cbs.svg";
import fox from "/icons/fox.svg";
import nbc from "/icons/nbc.svg";
const FeatureSection = () => {
  return (
    <div className="p-5 md:p-12 container-custom mt-24 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-start w-full sm:w-max">
        <h3 className="uppercase text-text-secondary text-xl lg:text-2xl font-medium">
          As Seen
        </h3>
        <h1 className="text-text-primary mt-3 w-full text-4xl lg:text-[52px] leading-tight font-medium">
          Featured On
        </h1>
      </div>

      <div className="relative p-5 flex overflow-hidden w-full sm:w-[50%]">
        <div className="flex mt-10 sm:mt-0 gap-12 md:gap-24 marquee-container animate-marquee">
          {[cbs, abc, nbc, fox].map((icon, index) => (
            <img
              key={Math.random()}
              src={icon}
              className="w-16 flex-shrink-0"
              alt=""
            />
          ))}
          {[cbs, abc, nbc, fox].map((icon, index) => (
            <img
              key={Math.random()}
              src={icon}
              className="w-16 flex-shrink-0"
              alt=""
            />
          ))}
          {[cbs, abc, nbc, fox].map((icon, index) => (
            <img
              key={Math.random()}
              src={icon}
              className="w-16 flex-shrink-0"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
