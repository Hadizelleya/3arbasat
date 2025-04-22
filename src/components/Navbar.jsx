import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/mariamLogo.png";
import whiteLogo from "../assets/maraimlogo-white.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-5 md:px-20 px-6 shadow-2xl fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90 text-white" : "bg-(--color-white) text-black"
      }`}
    >
      <div>
        {isScrolled ? (
          <img
            src={whiteLogo}
            alt="logo"
            className="w-[100px] transition-all duration-300"
          />
        ) : (
          <img
            src={logo}
            alt="logo"
            className="w-[100px] transition-all duration-300"
          />
        )}
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="block md:hidden focus:outline-none cursor-pointer"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoIosCloseCircleOutline className="text-(--color-primary) text-4xl" />
        ) : (
          <FiMenu className="text-3xl" />
        )}
      </button>

      {/* Menu Items */}
      <div
        className={`absolute top-37 left-0 w-full ${
          isScrolled ? "bg-black/90 text-white" : "bg-white text-black"
        } md:bg-transparent md:static md:w-auto md:flex md:items-center md:justify-center transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } md:max-h-screen md:opacity-100 overflow-hidden z-20`}
      >
        <ul className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center p-5 md:p-0">
          <li className="cursor-pointer transition-all ease-in-out text-xl font-semibold duration-200 relative group">
            <Link
              to="/"
              className={`hover:text-(--color-primary) ${
                location.pathname === "/" ? "text-(--color-primary)" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--color-primary) group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="cursor-pointer transition-all ease-in-out text-xl font-semibold duration-200 relative group">
            <Link
              to="/products"
              className={`hover:text-(--color-primary) ${
                location.pathname === "/products"
                  ? "text-(--color-primary)"
                  : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--color-primary) group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="cursor-pointer transition-all ease-in-out text-xl font-semibold duration-200 relative group">
            <Link
              to="/about"
              className={`hover:text-(--color-primary) ${
                location.pathname === "/about" ? "text-(--color-primary)" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--color-primary) group-hover:w-full transition-all duration-300"></div>
          </li>
          <li className="cursor-pointer transition-all ease-in-out text-xl font-semibold duration-200 relative group">
            <Link
              to="/contact"
              className={`hover:text-(--color-primary) ${
                location.pathname === "/contact" ? "text-(--color-primary)" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-(--color-primary) group-hover:w-full transition-all duration-300"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
