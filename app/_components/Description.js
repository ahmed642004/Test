import React from "react";

const Description = () => {
  return (
    <div className="mb-[17px] xl:mb-[20px]">
      <div className="flex items-center xl:mb-[8px] gap-[5.5px]">
        <div className="w-[19.5px] h-[19.5px] xl:w-[26px] xl:h-[26px] bg-black rounded-full flex items-center justify-center">
          <svg
          className="xl:w-[14px] xl:h-[14px]"
            width="10"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.88313 0.633125C4.71688 0.466875 4.49375 0.375 4.26188 0.375H1.125C0.64375 0.375 0.25 0.76875 0.25 1.25V8.25C0.25 8.73125 0.639375 9.125 1.12062 9.125H6.375C6.85625 9.125 7.25 8.73125 7.25 8.25V3.36312C7.25 3.13125 7.15812 2.90812 6.99187 2.74625L4.88313 0.633125ZM5.0625 7.375H2.4375C2.19687 7.375 2 7.17812 2 6.9375C2 6.69688 2.19687 6.5 2.4375 6.5H5.0625C5.30312 6.5 5.5 6.69688 5.5 6.9375C5.5 7.17812 5.30312 7.375 5.0625 7.375ZM5.0625 5.625H2.4375C2.19687 5.625 2 5.42812 2 5.1875C2 4.94688 2.19687 4.75 2.4375 4.75H5.0625C5.30312 4.75 5.5 4.94688 5.5 5.1875C5.5 5.42812 5.30312 5.625 5.0625 5.625ZM4.1875 3V1.03125L6.59375 3.4375H4.625C4.38438 3.4375 4.1875 3.24062 4.1875 3Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-black text-[13.35px] md:text-[16px]  font-semibold">
          Description
        </div>
      </div>
      <p className="text-[12px] md:text-[13.35px]  font-normal text-[#474747] leading-[20px] xl:max-w-[406px]">
        We are looking for a teacher to provide one-on-one algebra and geometry
        tutoring, 60-minute sessions, twice weekly.
      </p>
    </div>
  );
};

export default Description;
