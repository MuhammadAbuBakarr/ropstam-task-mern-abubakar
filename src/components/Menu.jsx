import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
const menuItems = ["Home", "About Us", "Owners", "Tenants", "Properties"];
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative lg:hidden" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="p-2 focus:outline-none cursor-pointer"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 flex flex-col gap-1">
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menuItems?.map((item, index) => (
          <MenuItem key={index} text={item} onClick={closeMenu} />
        ))}
        <div className="p-2">
          <Button
            onClick={closeMenu}
            className="w-full text-sm py-0.5"
            text="Start Treatment"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
const MenuItem = ({ onClick, text }) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700"
      onClick={onClick}
    >
      {text}
    </a>
  );
};
