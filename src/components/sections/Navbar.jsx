import React from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <nav className="p-5 md:p-8 w-full lg:w-[90%] mx-auto bg-black/10 backdrop-blur-xs flex justify-between items-center">
      <Logo />
      <div className="hidden lg:flex justify-between items-center text-white font-light gap-10  truncate text-[18px]">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Owners</a>
        <a href="#">Tenants</a>
        <a href="#">Properties</a>
      </div>
      <div className="hidden lg:block">
        <Button text="Start Treatment" />
      </div>
      <Menu />
    </nav>
  );
};

export default Navbar;
