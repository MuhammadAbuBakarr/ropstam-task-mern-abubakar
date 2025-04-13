import React from "react";

const StepCard = ({ heading = "", subHeading = "", className = "" }) => {
  const baseClasees =
    "bg-white rounded-2xl border border-text-secondary space-y-2 px-5 py-6 lg:w-[35%] w-full sm:w-[45%]";
  return (
    <div className={`${baseClasees} ${className}`}>
      <h1 className="text-[18px] text-text-primary font-medium">{heading}</h1>
      <p className="text-base font-normal text-text-muted">{subHeading}</p>
    </div>
  );
};

export default StepCard;
