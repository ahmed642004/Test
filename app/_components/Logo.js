import Image from "next/image";
import React from "react";
import logo from "@/public/jobwhee.png";
const Logo = () => {
  return (
    <div className="flex justify-center items-center my-[13px] ml-[17px] ">
      <div className="relative">
        <div className="absolute top-[4.25px] left-[4.65px] w-[7.30px] h-[7.30px] bg-[#D0FF00]"></div>
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6589 0.492188V5.35054H16.7318V11.4235C16.7318 13.549 16.7318 18.1037 10.9626 18.4074C5.4969 18.4074 4.28231 13.8527 4.28231 11.7271H0.03125C0.03125 17.8001 4.28231 22.6584 11.2662 22.6584C18.2501 22.6584 21.5902 16.8891 21.5902 13.549V0.492188H10.6589Z"
            fill="white"
            fillOpacity="0.83"
          />
        </svg>
      </div>

      <Image src={logo} alt="JobWhee Logo" />
    </div>
  );
};

export default Logo;
