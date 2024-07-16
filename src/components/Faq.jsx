import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const faqData = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "What about other Chromium browsers?",
    answer: "Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      <div className="absolute md:top-[2467px] md:left-[460px] md:w-[540px] md:h-[670px] sm:top-[3365px] sm:left-[32px] sm:w-[313px] sm:h-[766px]">
        <div className="md:w-[540px] md:h-[124px] sm:w-[311px] sm:h-[151px] text-center">
          <h1 className="md:text-[32px] sm:text-[24px] font-medium text-VeryDarkBlue mb-[22px]">
            Frequently Asked Questions
          </h1>
          <p className="text-GrayishBlue md:text-[18px] sm:text-[15px]">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
      </div>
      <div className="absolute md:top-[2647px] md:left-[458px] sm:top-[3580px] sm:left-[30px] text-VeryDarkBlue">
        <div className="max-w-3xl mx-auto p-4 md:w-[540px] sm:w-[313px]">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-800 rounded-lg focus:outline-none hover:text-red-500"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <IoIosArrowUp className="text-SoftRed" />
                ) : (
                  <IoIosArrowDown className="text-SoftBlue" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700">{item.answer}</div>
              )}
            </div>
          ))}
          <button className=" absolute  mx-[30%] mt-5 text-[14px] text-white bg-SoftBlue w-[114px] h-[48px] rounded-lg  hover:bg-inherit hover:text-SoftBlue hover:border-[1px] hover:border-SoftBlue">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
