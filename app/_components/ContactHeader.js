import React from "react";

const ContactHeader = () => {
  return (
    <div className="">
      <h3 className="absolute top-0 lg:top-[11px] text-black text-[14px] md:text-[18px] lg:text-[20px]  font-black mt-[8.25px] lg:mt-0  ml-[37.75px]">
        CONTACT
      </h3>{" "}
      <div className="mt-[10.5px] mr-[10px] xl:mr-[34px] mb-[8px]">
        <h3 className="text-[12px] md:text-[14px] xl:text-[16px] text-black font-semibold text-right">
          Looking for Math Teacher
        </h3>
        <h4 className="text-[10px] md:text-[12px] xl:text-[13.35px] lg:mb-[17px] text-black text-right font-semibold">
          Payment Type:
          <span className="font-normal ml-1 text-[10px] md:text-[12px] xl:text-[13.35px]">
            Fixed Price
          </span>
        </h4>
      </div>
    </div>
  );
};

export default ContactHeader;
