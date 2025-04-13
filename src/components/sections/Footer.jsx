import React from "react";
import phoneIcon from "/icons/phone.svg";
import twitter from "/icons/twitter.svg";
import facebook from "/icons/facebook.svg";
import youtube from "/icons/youtube.svg";
const Footer = () => {
  return (
    <footer className="mt-14 container-custom">
      <div className="w-full space-y-8 sm:p-7 p-5 lg:p-12">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-[30%]">
            <div className="font-bold text-3xl  md:text-6xl text-text-secondary">
              LOGO
            </div>

            <p className="mt-4 text-[18px] text-text-muted tracking-wide">
              Experience the convenience of Recovery Delivered, your trusted
              source for online medication delivery. We bring the pharmacy to
              your doorstep, ensuring fast, discreet, and reliable service.
              Whether you're managing a chronic condition or need a one-time
              prescription filled, we make the process simple and hassle-free
            </p>
          </div>

          <div className="lg:w-[60%] flex justify-between flex-wrap sm:flex-nowrap pr-8 gap-5 sm:gap-0 sm:pr-0  w-full mt-5 lg:mt-0">
            <List
              heading="Quick Links"
              items={["Home", "About Us", "Owners", "Tenants", "Properties"]}
            />
            <List
              heading="Other Links"
              items={[
                "Online Medications",
                "Download App",
                "Start Treatment",
                "Online Urgent Care",
                "FAQ",
              ]}
            />
            <div className="flex flex-col h-full gap-4">
              <h1 className="text-text-secondary frank-ruhi text-2xl">
                Contact
              </h1>
              <div className="flex gap-1 items-center">
                <span>
                  <img className="w-4" src={phoneIcon} alt="" />
                </span>{" "}
                1-866-757-9868
              </div>
              <h1 className="text-text-secondary frank-ruhi text-2xl">
                Social Media
              </h1>
              <div className="flex justify-between items-center gap-5">
                <img className="w-9 custom-hover" src={twitter} alt="" />
                <img className="w-6  custom-hover" src={facebook} alt="" />
                <img className="w-9 custom-hover" src={youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-sm capitalize text-text-muted">
          ©2024 - recovery Delivered | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
const List = ({ heading = "", items = [] }) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-text-secondary frank-ruhi text-2xl">{heading}</h1>
      <div className="flex flex-col gap-4 mt-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className="text-[18px] text-text-muted cursor-pointer hover:scale-[1.03] hover:opacity-65 transition-all duration-200"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
