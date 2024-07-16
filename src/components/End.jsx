import React, { useState } from "react";

export const End = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (validateEmail(newEmail)) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="font-medium ">
      <div className=" absolute md:top-[3168px] sm:top-[4435px] bg-SoftBlue w-full h-[360px] flex justify-center flex-col items-center text-center">
        <h3 className="text-[13px] leading-[40px] tracking-[5px] text-white ">
          35,000+ ALREADY JOINED
        </h3>
        <h1 className="md:text-[32px] sm:text-[24px] w-[423px] pt-5 text-white px-10 ">
          Stay up-to-date with what we’re doing
        </h1>
        <div className=" flex  md:w-[442px] md:h-[48px] pt-5">
          <form
            onSubmit={handleSubmit}
            className="flex items-center md:flex-row sm:flex-col   space-x-2 h-[48px] sm:mb-[40px]"
          >
            <div className="relative  ">
              <input
                type="text"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`p-2 rounded-md text-[14px] md:w-[300px] sm:w-[311px] focus:outline-none  ${
                  error ? "border-red-500" : ""
                }`}
              />
              {error && (
                <div className="absolute top-full left-0 mt-1 w-full bg-SoftRed text-white text-sm p-1 rounded-md">
                  <span>{error}</span>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="p-2 md:mt-[0px] sm:mt-[40px]   md:w-[124px] sm:w-[311px] h-[48px] bg-SoftRed text-white text-[14px] rounded-lg hover:bg-white hover:text-SoftRed hover:border-[2px] hover:border-SoftRed"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
