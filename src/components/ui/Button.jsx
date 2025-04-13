import React from "react";
import arrowIcon from "/icons/button-arrow.svg";
const Button = ({ text = "Button", className = "", onClick }) => {
  const baseClasses =
    "bg-background-primary text-center px-4 py-3 tracking-wider rounded-lg custom-hover text-white font-normal text-lg flex justify-center gap-2";

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
      <img className="w-5" src={arrowIcon} alt="" />
    </button>
  );
};
export default Button;
