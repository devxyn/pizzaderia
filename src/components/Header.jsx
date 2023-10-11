import React from "react";
import logo from "../assets/pizza-icon.png";

const Header = () => {
  return (
    <header className="bg-black flex fixed w-full h-[70px] justify-between items-center px-16 top-0 left-0">
      <div className="flex items-center">
        <img className="h-[60px] mr-2" src={logo} alt="logo" />
        <h1 className="text-white text-2xl uppercase">Pizza House</h1>
      </div>
      <ul className="flex font-bold uppercase">
        <li className="px-5 py-2 rounded-lg  text-yellow-500 hover:bg-yellow-500 hover:text-black">
          <a href="#">Home</a>
        </li>
        <li className="px-5 py-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-black">
          <a href="#">Promo</a>
        </li>
        <li className="px-5 py-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-black">
          <a href="#">Menu</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
