import React from "react";
import reviewStars from "/icons/review-stars.svg";
import personIMG from "/imgs/person-1.png";
const TestimonialCard = ({ slide }) => {
  return (
    <div
      className="flex flex-col cursor-pointer group-hover:blur-sm hover:-rotate-6 hover:blur-none transition-all duration-700 ease-in-out hover:scale-105
 gap-6 rounded-xl border border-[#E2E8F0] p-8 card-shadow"
    >
      <img className="w-[40%]" src={reviewStars} alt="" />
      <p className="font-normal text-text-muted leading-[150%] text-[18px]">
        {slide?.review}
      </p>
      <div className="flex items-center justify-start gap-3">
        <img className="size-[60px]" src={slide?.image} alt="" />
        <h3 className="text-xl text-text-primary font-medium">{slide?.name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
