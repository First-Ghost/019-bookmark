import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../images/logo-bookmark.svg";
import logo2 from "../images/logo-bookmark-footer.svg";
import menu from "../images/icon-hamburger.svg";
import cancel from "../images/icon-close.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex justify-between items-center md:w-full md:mx-[171px] md:mt-[46px] sm:mx-[32px] sm:mt-[40px]">
        <img className="mr-3" src={logo} alt="logo" />
        <div className="md:hidden" onClick={toggleMenu}>
          <img className="ml-[106px]" src={isOpen ? cancel : menu} alt="menu" />
        </div>

        <div className="sm:hidden md:flex space-x-4 items-center">
          <p>
            <Link
              className="text-[13px] hover:text-SoftRed cursor-pointer"
              to="features"
              smooth={true}
              offset={50}
              duration={500}
            >
              FEATURES
            </Link>
          </p>
          <p>
            <Link
              className="text-[13px] hover:text-SoftRed cursor-pointer"
              to="pricig"
              smooth={true}
              offset={50}
              duration={500}
            >
              PRICING
            </Link>
          </p>

          <p>
            <Link
              className="text-[13px] hover:text-SoftRed cursor-pointer"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Link>
          </p>
          <button className="w-[111px] h-[40px] bg-SoftRed text-white text-[13px] rounded-lg shadow-md hover:bg-transparent hover:text-SoftRed hover:border-SoftRed hover:border-[1px]">
            LOGIN
          </button>
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-hsl flex flex-col justify-start items-start pl-[150px] pt-[150px]  md:hidden z-50">
            <div className=" absolute top-[40px] left-[25%] h-[30px] w-[250px] py-5 flex items-center ">
              <img className="mr-10" src={logo2} alt="logo" />
              <img
                className="cursor-pointer"
                src={cancel}
                alt="close"
                onClick={toggleMenu}
              />
            </div>
            <div className="text-center text-white space-y-4">
              <p>
                <Link
                  className="text-[20px] cursor-pointer on hover:text-SoftRed"
                  onClick={handleMenuClick}
                  to="features"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  FEATURES
                </Link>
              </p>

              <p>
                <Link
                  className="text-[20px] cursor-pointer on hover:text-SoftRed"
                  onClick={handleMenuClick}
                  to="pricig"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  PRICING
                </Link>
              </p>

              <p>
                <Link
                  className="text-[20px] cursor-pointer on hover:text-SoftRed"
                  onClick={handleMenuClick}
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  CONTACT
                </Link>
              </p>

              <button
                className="w-full h-[40px] bg-transparent text-white text-[20px] rounded-lg border-white border-[1px]"
                onClick={handleMenuClick}
              >
                LOGIN
              </button>
            </div>
            <div className="flex justify-center mt-8">
              <img className="mr-4" src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
