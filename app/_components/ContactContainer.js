import React from "react";
import Description from "./Description";
import Card from "./Card";
import JobDetails from "./JobDetails";
import ContractInfo from "./ContractInfo";

const ContactContainer = (props) => {
  return (
    <div
      className={`ta5 px-[10px] xl:px-[27px] w-[335px] md:w-[387px] h-[433px] md:h-[438px] lg:w-[387px] xl:w-[467px] xl:h-[486px] lg:h-[438px] relative ${
        props?.className || ""
      }`}
    >
      <div className="">
        <h3 className="absolute top-0 lg:top-[8px] text-black text-[14px] md:text-[18px] lg:text-[20px] font-black mt-[8.25px] lg:mt-0 ml-[37.75px]">
          CONTACT
        </h3>
        <div className="mt-[10.5px] xl:mt-[14.5px] mb-[8px] xl:mb-[17px]">
          <h3 className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-black font-semibold text-right xl:h-[30px]">
            Looking for Math Teacher
          </h3>
          <h4 className="text-[10px] md:text-[12px] lg:text-[13.35px]  text-black text-right font-semibold">
            Payment Type:
            <span className="font-normal ml-1 text-[10px] md:text-[12px] lg:text-[13.35px]">
              Fixed Price
            </span>
          </h4>
        </div>
      </div>
      <Card />
      <Description />
      <JobDetails />
      <ContractInfo />
    </div>
  );
};

export default ContactContainer;
