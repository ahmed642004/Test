import React from "react";

const Dots = () => {
  return (
    <div className="flex space-x-2 absolute bottom-[41px] md:bottom-[47px] lg:bottom-[75px] xl:bottom-[109px] left-1/2 -translate-x-1/2">
      <span className="w-[7.14px] h-[7.14px] bg-[#D0FF00] rounded-full"></span>
      <span className="w-[7.14px] h-[7.14px] bg-[#8C9959] rounded-full"></span>
      <span className="w-[7.14px] h-[7.14px] bg-[#8C9959] rounded-full"></span>
      <span className="w-[7.14px] h-[7.14px] bg-[#8C9959] rounded-full"></span>
      <span className="w-[7.14px] h-[7.14px] bg-[#8C9959] rounded-full"></span>
    </div>
  );
};

export default Dots;
