import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX} fixed px-8 top-0 w-full z-50
        transition-all duration-300
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"}
        py-4
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-white text-xl font-bold tracking-wide">
            Sohail <span className="hidden sm:inline-block">| Dev Portfolio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-base font-medium cursor-pointer border-b-2 transition-all duration-200 ${
                active === nav.title
                  ? "text-white border-white"
                  : "text-gray-400 border-transparent hover:text-white hover:border-white"
              }`}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden  flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="absolute top-16 right-5 w-60 bg-[#1f1f1f] border border-gray-700 rounded-xl p-6 shadow-lg z-50 md:hidden ">
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-base font-medium cursor-pointer transition-colors ${
                    active === nav.title ? "text-white" : "text-gray-300"
                  } hover:text-white`}
                  onClick={() => handleNavClick(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
