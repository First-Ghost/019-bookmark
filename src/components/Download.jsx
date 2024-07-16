import React from "react";
import dots from "../images/bg-dots.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

export const Download = () => {
  return (
    <div name="pricig" className="mx-auto">
      <div className="absolute md:top-[1697px] md:left-[450px] md:w-[541px] md:h-[124px] sm:top-[1865px] sm:left-[32px] sm:w-[311px] sm:h-[127px] flex flex-col justify-between items-center text-center ">
        <h1 className="text-VeryDarkBlue md:text-[32px] sm:text-[24px] font-medium">
          Download the extension
        </h1>
        <p className="text-GrayishBlue md:text-[18px] sm:text-[15px] ">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      {/*cards*/}
      <div className="absolute md:top-[1869px] md:left-[266px] md:w-[911px] md:h-[451px]  flex justify-between md:flex-row sm:flex-col sm:top-[2032px] sm:mx-[48px]">
        {/* chrome card*/}
        <div className="  w-[280px] h-[371px] shadow-lg rounded-xl flex items-center ">
          <div className=" w-[284px] h-[298px] flex flex-col justify-around items-center  ">
            <img src={chrome} alt="chrome" />
            <h2 className="text-[20px] text-VeryDarkBlue font-medium">
              Add to Chrome
            </h2>
            <p className="text-[15px] text-GrayishBlue ">Minimum version 62</p>
            <img src={dots} alt="dots" />

            <button className="w-[232px] h-[48px] bg-SoftBlue text-white text-[14px] rounded-lg hover:bg-inherit hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue ">
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* firefox card*/}
        <div className="  w-[280px] h-[371px] shadow-lg rounded-xl flex items-center mt-[40px]">
          <div className=" w-[284px] h-[298px] flex flex-col justify-around items-center  ">
            <img src={firefox} alt="chrome" />
            <h2 className="text-[20px] text-VeryDarkBlue font-medium">
              Add to Firefox
            </h2>
            <p className="text-[15px] text-GrayishBlue ">Minimum version 55</p>
            <img src={dots} alt="dots" />

            <button className="w-[232px] h-[48px] bg-SoftBlue text-white text-[14px] rounded-lg hover:bg-inherit hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue ">
              Add & Install Extension
            </button>
          </div>
        </div>

        {/* opera card*/}
        <div className="  w-[280px] h-[371px] shadow-lg rounded-xl flex items-center  mt-[80px]">
          <div className=" w-[284px] h-[298px] flex flex-col justify-around items-center  ">
            <img src={opera} alt="chrome" />
            <h2 className="text-[20px] text-VeryDarkBlue font-medium">
              Add to Opera
            </h2>
            <p className="text-[15px] text-GrayishBlue ">Minimum version 46</p>
            <img src={dots} alt="dots" />

            <button className="w-[232px] h-[48px] bg-SoftBlue text-white text-[14px] rounded-lg hover:bg-inherit hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue ">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
