import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import logoZul from "../assets/logo_zul.png";
import { useState } from "react";

const Appbar = () => {
  let Links = [
    { name: "Movies", link: "/" },
    { name: "TV Shows", link: "/" },
    { name: "People", link: "/" },
    { name: "More", link: "/" },
    { name: "About", link: "/" },
    { name: "Trailer", link: "/" },
  ];

  const [menuOpen, isMenuOpen] = useState(false);
  const [darkMode, isDarkMode] = useState(false);

  const menuHandler = () => {
    isMenuOpen(!menuOpen);
  };

  const darkModeHandler = () => {
    isDarkMode(!darkMode);
  };

  return (
    <div className="sticky w-screen h-[64px] bg-blue-900 p-6 top-0 z-10 md:flex">
      <ul className="flex w-full h-full justify-between items-center text-white  md:justify-around z-10 ">
        <BiMenu
          color="white"
          size={32}
          className="md:hidden"
          onClick={menuHandler}
        />
        <div className="flex">
          <img src={logoZul} alt="" className="h-[28px]" />
          <h2 className="hidden text-xl font-bold mx-2 md:flex">ZuMov</h2>
        </div>

        <ul className="hidden md:flex md:justify-around">
          {Links.map((link) => (
            <li key={link.name} className=" mx-4">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <ul
          className={`md:hidden ${
            menuOpen
              ? "fixed h-screen w-2/3 z-10 bottom-0 top-16 bg-sky-800 left-0 ease-in duration-300 "
              : "fixed h-screen w-2/3 z-10 bottom-0 top-16 bg-sky-800 left-[-100%] ease-out duration-700   "
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-8 mx-10 text-xl font-semibold ">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <div
          onClick={darkModeHandler}
          className="z-10 ease-in-out duration-500"
        >
          {darkMode ? <BiSun size={24} /> : <BiMoon size={24} />}
        </div>
      </ul>
    </div>
  );
};

export default Appbar;
