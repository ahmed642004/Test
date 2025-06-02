import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className=" max-w-[375px]
                    md:max-w-[780px]
                    lg:max-w-[1200px]
                    xl:max-w-[1440px]
                    mx-auto"
    >
      {children}
    </div>
  );
};

export default Container;
