import React from "react";
import hero from "../images/illustration-hero.svg";
import bgim from "../images/bgimg.png";

export const Hero = () => {
  return (
    <div className="w-full h-screen  ">
      <div className="absolute md:top-[273px] md:left-[165px] md:w-[540px]  md:h-[292px]  sm:w-[311px] sm:h-[276px] md:text-left sm:top-[448px] sm:left-[32px]   sm:text-center">
        <h1 className="md:text-[48px] md:leading-[52px] text-VeryDarkBlue font-semibold sm:text-[30px] ">
          A Simple Bookmark Manager
        </h1>
        <p className="text-GrayishBlue leading-[28px] pt-[20px] ">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="pt-[30px] md:w-[343px] h-[40px] flex items-center justify-between sm:w-[311px]">
          <button className="bg-SoftBlue rounded-lg shadow-lg text-white text-[14px] md:w-[166px] h-[48px] hover:bg-transparent hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue sm:w-[151px]">
            Get it on Chrome
          </button>
          <button className="bg-gray-100 rounded-lg shadow-lg text-VeryDarkBlue text-[14px] md:w-[166px] h-[48px] hover:bg-transparent  hover:border-[1px] hover:border-VeryDarkBlue sm:w-[151px]">
            Get it on Chrome
          </button>
        </div>
      </div>

      <div>
        <div
          name="features"
          className="absolute md:top-[200px] md:left-[770px] sm:top-[145px] sm:left-[33px]  md:w-[536px] md:h-[346px] sm:w-[311px] sm:h-[200px]"
        >
          <img className="z-30  " src={hero} alt="hero" />
        </div>
        <div className="bg-img   sm:hidden md:block "></div>
        <img
          className=" -z-30 absolute top-[197px] left-[120px]  md:hidden sm:block"
          src={bgim}
          alt="bgim"
        />
      </div>

      <div className=" absolute md:top-[768px] md:left-[450px] md:w-[540px] md:h-[152px] sm:     sm:top-[864px] sm:left-[32px] sm:w-[311px] sm:h-[152px] text-center">
        <h1 className="md:text-[32px] text-VeryDarkBlue sm:text-[24px] font-semibold">
          Features
        </h1>
        <p className="text-GrayishBlue pt-5">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
    </div>
  );
};
