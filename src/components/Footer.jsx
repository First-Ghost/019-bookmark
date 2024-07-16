import React from "react";
import logo from "../images/logo-bookmark-footer.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export const Footer = () => {
  return (
    <div
      name="contact"
      className=" absolute md:top-[3528px] sm:top-[4795px]  w-full bg-VeryDarkBlue flex flex-col items-center md:flex-row md:justify-between md:h-[88px] sm:h-[334px] px-[100px]"
    >
      <div className="flex flex-col items-center md:flex-row md:w-auto sm:w-full md:mt-0 sm:mt-[50px]">
        <img className="mb-6 md:mb-0 mr-3" src={logo} alt="logo" />
        <div className="flex flex-col items-center md:flex-row mt-4 md:mt-0 md:ml-10">
          <p>
            <Link
              className="text-white text-[13px] hover:text-SoftRed cursor-pointer my-2 md:mx-2 md:my-0"
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
              className="text-white text-[13px] hover:text-SoftRed cursor-pointer my-2 md:mx-2 md:my-0"
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
              className="text-white text-[13px] hover:text-SoftRed cursor-pointer my-2 md:mx-2 md:my-0"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Link>
          </p>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0 space-x-4">
        <img className="cursor-pointer ficon" src={facebook} alt="Facebook" />
        <img className="cursor-pointer ficon" src={twitter} alt="Twitter" />
      </div>
    </div>
  );
};
