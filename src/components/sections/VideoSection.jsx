import React from "react";
import backgroundImage from "/imgs/hero-background.png";
import playIcon from "/imgs/play-icon.png";

const VideoSection = () => {
  return (
    <section className="mt-5 flex container-custom flex-col-reverse bg-white lg:flex-row justify-between p-5 md:p-12 items-center gap-10">
      <div className="w-full text-center md:text-start flex flex-col gap-6">
        <h3 className="uppercase text-text-secondary text-xl md:text-2xl font-medium">
          Welcome To Recovery Delivered
        </h3>
        <h1 className="text-text-primary text-4xl md:text-[52px] leading-tight font-medium">
          Your Fully Online Suboxone Treatment Platform
        </h1>
        <p className="text-base md:text-xl font-normal text-text-muted">
          100% online opioid treatment with licensed buprenorphine providers
          starts at just $99/month.
        </p>
        <p className="text-base md:text-xl font-normal text-text-muted">
          With monthly and weekly meetings based on where you are in your
          recovery. Get a same-day appointment and script.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="w-full h-52 md:h-96 p-8 shadow rounded-2xl flex justify-center items-center bg-cover bg-center bg-no-repeat"
      >
        <img
          className="w-32 custom-hover"
          width={1000}
          height={1000}
          src={playIcon}
          alt=""
        />
      </div>
    </section>
  );
};

export default VideoSection;
