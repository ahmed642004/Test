import React from "react";
import ContactContainer from "./ContactContainer";
const Contracts = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[180px] md:mt-[100px]">
        <div className="w-[10.5px] h-[10.5px] rounded-[2.25px] bg-[#C0D724] "></div>
        <h2 className="ml-2 text-[20px] md:text-[26px] font-extrabold text-black ">
          SUCCESSFUL CO
          <span className="border-b-2 border-[#C0D724]">NTRACTS</span>
        </h2>
      </div>
      <div className="flex w-fit gap-[13px] mt-[33px] lg:mt-[54px] xl:mt-[70px]">
        <ContactContainer />
        <ContactContainer className="hidden md:block"/>
        <ContactContainer className="hidden md:hidden lg:block"/>
      </div>
    </>
  );
};

export default Contracts;
