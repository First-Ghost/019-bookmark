import React, { useState } from "react";

import f1 from "../images/illustration-features-tab-1.svg";
import f2 from "../images/illustration-features-tab-2.svg";
import f3 from "../images/illustration-features-tab-3.svg";

export const Features = () => {
  const [card, setCard] = useState(1);

  const handleOpenCard = (panel) => setCard(panel);

  return (
    <div>
      <div className="absolute md:top-[992px] md:left-[355px] md:w-[730px] md:h-[49px] flex md:flex-row md:justify-around border-b-[1px] sm:top-[1056px] sm:left-[32px] sm:w-[311px] sm:h-[175px] sm:flex-col sm:items-center sm:mt-[20px]">
        <div className="hover:border-b-4 hover:border-b-SoftRed sm:h-[58px] sm:w-full sm:flex sm:items-center sm:justify-center sm:border-b-[1px] md:border-b-0 md:border-t-0">
          <button
            onClick={() => handleOpenCard(1)}
            className={`text-[16px] ${
              card === 1 ? "text-VeryDarkBlue" : "text-GrayishBlue"
            } hover:text-SoftRed focus:text-VeryDarkBlue md:h-[49px] flex`}
          >
            Simple Bookmarking
          </button>
        </div>
        <div className="hover:border-b-4 hover:border-b-SoftRed sm:h-[58px] sm:w-full sm:flex sm:items-center sm:justify-center sm:border-b-[1px] md:border-b-0">
          <button
            onClick={() => handleOpenCard(2)}
            className={`text-[16px] ${
              card === 2 ? "text-VeryDarkBlue" : "text-GrayishBlue"
            } hover:text-SoftRed focus:text-VeryDarkBlue md:h-[49px] flex`}
          >
            Speedy Searching
          </button>
        </div>
        <div className="hover:border-b-4 hover:border-b-SoftRed sm:h-[58px] sm:w-full sm:flex sm:items-center sm:justify-center">
          <button
            onClick={() => handleOpenCard(3)}
            className={`text-[16px] ${
              card === 3 ? "text-VeryDarkBlue" : "text-GrayishBlue"
            } hover:text-SoftRed focus:text-VeryDarkBlue md:h-[49px] flex`}
          >
            Easy Sharing
          </button>
        </div>
      </div>
      <div className="bg-fe md:block sm:hidden"></div>
      <div className="bg-fe-mobile sm:block md:hidden"></div>

      {/* card 1*/}
      {card === 1 && (
        <div className="absolute md:flex-row md:mt-[50px] md:top-[1113px] md:left-[169px] md:w-[1106px] md:h-[346px] flex sm:flex-col sm:top-[1303px]">
          <div className="md:w-[536px] md:h-[346px] sm:w-[311px] sm:h-[200px] sm:top-[1303px] sm:left-[32px] sm:ml-[32px]">
            <img src={f1} alt="f1" />
          </div>
          <div className="md:w-[445px] md:h-[232px] md:ml-[125px] flex flex-col justify-center sm:items-center sm:justify-center text-left md:mt-[50px] sm:text-center sm:mt-[50px]">
            <h1 className="md:text-[32px] md:pb-[20px] font-semibold text-VeryDarkBlue sm:text-[24px] sm:mt-[20px]">
              Bookmark in one click
            </h1>
            <p className="md:pr-2 md:pb-[5px] text-GrayishBlue sm:text-[15px] sm:mt-[20px]">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="w-[114px] h-[48px] text-[14px] rounded-lg bg-SoftBlue text-white hover:bg-transparent hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue sm:mt-[10px]">
              More Info
            </button>
          </div>
        </div>
      )}

      {/* card 2*/}
      {card === 2 && (
        <div className="absolute md:flex-row md:mt-[50px] md:top-[1113px] md:left-[169px] md:w-[1106px] md:h-[346px] flex flex-col sm:top-[1303px]">
          <div className="md:w-[536px] md:h-[346px] sm:w-[311px] sm:h-[200px] sm:top-[1303px] sm:left-[32px] sm:ml-[32px]">
            <img src={f2} alt="f2" />
          </div>
          <div className="md:w-[445px] md:h-[232px] md:ml-[125px] flex flex-col sm:items-center md:items-start md:text-left md:mt-[50px] sm:text-center sm:mt-[50px] justify-between">
            <h1 className="md:text-[32px] md:pb-[20px] font-semibold text-VeryDarkBlue sm:text-[24px] sm:mt-[20px]">
              Intelligent search
            </h1>
            <p className="md:pr-2 md:pb-[5px] text-GrayishBlue sm:text-[15px] sm:mt-[20px]">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="w-[114px] h-[48px] text-[14px] rounded-lg bg-SoftBlue text-white hover:bg-transparent hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue sm:mt-[10px]">
              More Info
            </button>
          </div>
        </div>
      )}

      {/* card 3*/}
      {card === 3 && (
        <div className="absolute md:flex-row md:mt-[50px] md:top-[1113px] md:left-[169px] md:w-[1106px] md:h-[346px] flex flex-col sm:top-[1303px]">
          <div className="md:w-[536px] md:h-[346px] sm:w-[311px] sm:h-[200px] sm:top-[1303px] sm:left-[32px] sm:ml-[32px]">
            <img src={f3} alt="f3" />
          </div>
          <div className="md:w-[445px] md:h-[232px] md:ml-[125px] flex flex-col sm:items-center md:items-start md:text-left md:mt-[50px] sm:text-center sm:mt-[50px] justify-between">
            <h1 className="md:text-[32px] md:pb-[20px] font-semibold text-VeryDarkBlue sm:text-[24px] sm:mt-[20px]">
              Share your bookmarks
            </h1>
            <p className="md:pr-2 md:pb-[5px] text-GrayishBlue sm:text-[15px] sm:mt-[20px]">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="w-[114px] h-[48px] text-[14px] rounded-lg bg-SoftBlue text-white hover:bg-transparent hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue sm:mt-[10px]">
              More Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
