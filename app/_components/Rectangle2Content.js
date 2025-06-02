import React from "react";

const Rectangle2Content = () => {
  return (
    <div>
      <button
        className="
          absolute bottom-[-20px] left-[47px] lg:left-[104px]
          xl:left-[168px]
          py-[11px] px-[27px] 
          lg:w-[222px] lg:h-[51px]
          rounded-full bg-[#CBEC5E]
          text-[#18470D] text-[12px] lg:text-[16px] font-medium
        "
      >
        Sign Up for Contract
      </button>

      <div
        className="
          absolute bottom-[-20px] right-[17.5px]
          xl:right-[44px]
          flex items-center justify-center
          w-[39.5px] h-[39.5px] lg:w-[51px] lg:h-[51px]
          rounded-full bg-[#E0E0E0] md:bg-white
        "
      >
        <svg
          className="md:w-[18px] md:h-[18px]"
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.51222 5.81289C8.51484 6.01314 8.47319 6.21149 8.39023 6.39377C8.3031 6.58663 8.16949 6.75392 8.00104 6.88171L2.39549 11.2442C2.19815 11.3946 1.96282 11.4872 1.71585 11.5114H1.58225C1.38032 11.5114 1.18126 11.4637 1.00136 11.372C0.783073 11.2648 0.598342 11.0998 0.467252 10.895C0.336162 10.6901 0.26373 10.4533 0.257829 10.2102V2.07779C0.256625 1.83774 0.323059 1.6022 0.449521 1.39815C0.571901 1.19412 0.747204 1.02701 0.956848 0.914516C1.16649 0.802024 1.40267 0.748349 1.64034 0.75918C1.87966 0.770797 2.11202 0.845151 2.31416 0.974107L7.92552 4.71501C8.0963 4.83351 8.2392 4.98803 8.34376 5.1681C8.45413 5.3656 8.51222 5.58692 8.51222 5.81289Z"
            fill="#0C0C0C"
          />
        </svg>
      </div>
    </div>
  );
};

export default Rectangle2Content;
