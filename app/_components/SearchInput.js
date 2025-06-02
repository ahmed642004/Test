import React from "react";
import SearchDropDown from "./SearchDropDown";

const SearchInput = () => {
  return (
    <div>
      <div className="relative md:absolute md:bottom-[66.65px] lg:bottom-[102px] xl:bottom-[138px] md:left-1/2 md:-translate-x-1/2 md:min-w-[462px] lg:min-w-[459px] xl:min-w-[555px]">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Find a job, talent or service"
          className="
            w-full md:h-[50px] xl:h-[60px] mt-[54px] md:mt-0
            text-[12px] md:text-[14px] xl:text-[16px] text-[#737373]
            bg-white rounded-full pl-[59px] xl:pl-[71px] py-[16px]
            focus:outline-none
            shadow-[0px_4px_13.4px_rgba(40,47,84,0.15)]
          "
          aria-label="Search for a job, talent or service"
        />

        {/* Search Icon Button */}
        <div className="absolute left-[4.16px] bottom-[4.16px]">
          <div className="p-[1.36px] rounded-full bg-gradient-to-r from-[#A5EC5E] to-[#BDC502]">
            <div className="w-[38.5px] h-[38.5px] xl:w-[50px] xl:h-[50px] md:w-[40px] md:h-[40px] bg-black rounded-full flex items-center justify-center">
              <svg
                className="xl:w-[24px] xl:h-[24px]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5633 16.5633L13.202 13.202M14.8826 8.16007C14.8826 9.943 14.1744 11.6529 12.9136 12.9136C11.6529 14.1744 9.943 14.8826 8.16007 14.8826C6.37713 14.8826 4.66722 14.1744 3.40649 12.9136C2.14577 11.6529 1.4375 9.943 1.4375 8.16007C1.4375 6.37713 2.14577 4.66722 3.40649 3.40649C4.66722 2.14577 6.37713 1.4375 8.16007 1.4375C9.943 1.4375 11.6529 2.14577 12.9136 3.40649C14.1744 4.66722 14.8826 6.37713 14.8826 8.16007Z"
                  stroke="white"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Dropdown Button */}
        <div
          className="
            absolute bottom-[4.3px] right-[4px]
            w-[88px] xl:w-[122px] xl:h-[52px] py-[11px]
            flex items-center justify-center gap-[4.84px]
            rounded-full md:rounded-r-full xl:rounded-full md:rounded-l-none
            bg-[#F0F1F4] md:bg-white xl:bg-[#F0F1F4] md:border-l-[0.72px] md:border-[#CDCDCD]
          "
        >
          <span className="text-[#474747] text-[11.54px] md:text-[14px] xl:text-[16px]">
            Talent
          </span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.54189 0.78408L0.481548 3.84442L1.2465 4.60938L3.92437 1.93151L6.60224 4.60938L7.36719 3.84442L4.30684 0.78408C4.20539 0.682661 4.06782 0.625688 3.92437 0.625688C3.78092 0.625688 3.64334 0.682661 3.54189 0.78408Z"
              fill="#474747"
            />
          </svg>
        </div>

        {/* Dropdown List */}
        <SearchDropDown />
      </div>
    </div>
  );
};

export default SearchInput;
