import React from "react";

const JobDetails = () => {
  return (
    <div className="">
      <div className="flex  gap-[5.5px] ">
        <div className="w-[19.5px] xl:mb-[8px] h-[19.5px] xl:w-[26px] xl:h-[26px] bg-black rounded-full flex items-center justify-center">
          <svg
          className="xl:w-[13px] xl:h-[13px]"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.32147 2.57258V3.1652L2.6145 3.2228C2.37162 3.24234 2.14231 3.34276 1.96323 3.508C1.78415 3.67323 1.66564 3.89374 1.62666 4.13426C1.60941 4.24194 1.59355 4.34975 1.57908 4.4577C1.57583 4.48382 1.5809 4.5103 1.59356 4.53337C1.60622 4.55645 1.62584 4.57495 1.64961 4.58624L1.68175 4.60126C3.94748 5.67383 6.6606 5.67383 8.92591 4.60126L8.95805 4.58624C8.98175 4.57488 9.00127 4.55636 9.01385 4.53329C9.02644 4.51022 9.03144 4.48377 9.02816 4.4577C9.014 4.34967 8.99828 4.24184 8.981 4.13426C8.94202 3.89374 8.82351 3.67323 8.64443 3.508C8.46535 3.34276 8.23604 3.24234 7.99316 3.2228L7.28619 3.16562V2.573C7.28623 2.39807 7.22349 2.22894 7.10937 2.09636C6.99525 1.96379 6.83734 1.87657 6.66435 1.85059L6.1552 1.77421C5.59075 1.68985 5.0169 1.68985 4.45246 1.77421L3.94331 1.85059C3.77039 1.87656 3.61254 1.96372 3.49843 2.09621C3.38432 2.2287 3.32153 2.39773 3.32147 2.57258ZM6.06213 2.39313C5.55939 2.31803 5.04827 2.31803 4.54553 2.39313L4.03637 2.4695C4.01167 2.4732 3.98911 2.48563 3.9728 2.50455C3.95649 2.52346 3.9475 2.5476 3.94748 2.57258V3.12138C4.85098 3.06978 5.75668 3.06978 6.66018 3.12138V2.57258C6.66016 2.5476 6.65117 2.52346 6.63486 2.50455C6.61855 2.48563 6.59599 2.4732 6.57129 2.4695L6.06213 2.39313Z"
              fill="white"
            />
            <path
              d="M9.1107 5.32836C9.10987 5.31486 9.10578 5.30177 9.09877 5.29021C9.09177 5.27865 9.08206 5.26896 9.07048 5.26198C9.0589 5.25501 9.0458 5.25094 9.03231 5.25015C9.01881 5.24935 9.00533 5.25184 8.99301 5.25741C6.66802 6.28698 3.94279 6.28698 1.6178 5.25741C1.60548 5.25184 1.592 5.24935 1.5785 5.25015C1.56501 5.25094 1.55191 5.25501 1.54033 5.26198C1.52875 5.26896 1.51904 5.27865 1.51204 5.29021C1.50503 5.30177 1.50094 5.31486 1.50011 5.32836C1.45784 6.12734 1.50079 6.92856 1.62823 7.71846C1.66713 7.95906 1.7856 8.17966 1.96469 8.34498C2.14378 8.51029 2.37314 8.61077 2.61607 8.63034L3.39733 8.69294C4.66729 8.79561 5.9431 8.79561 7.21348 8.69294L7.99474 8.63034C8.23767 8.61077 8.46703 8.51029 8.64612 8.34498C8.82521 8.17966 8.94368 7.95906 8.98258 7.71846C9.11028 6.9276 9.15369 6.12631 9.1107 5.32877"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-black text-[13.35px] md:text-[15.26px] font-semibold">
          Job Details
        </div>
      </div>
      <div className="flex gap-[31px] mt-[8.60px]">
        <div className="flex flex-col gap-[6px] xl:gap-0">
          <div>
            <p className="text-[12px] md:text-[13.35px] text-black font-semibold">
              Start Date:
              <span className="text-[#474747] text-[12px] md:text-[13.35px] ml-[18px]   font-normal">
                Jan 15, 2025.
              </span>
            </p>
          </div>
          <div>
            <p className="text-[12px] md:text-[13.35px] text-black font-semibold">
              End Date:
              <span className="text-[#474747] text-[12px] md:text-[13.35px] ml-[18px] font-normal">
                Not Estimated
              </span>
            </p>
          </div>
        </div>
        <div className="flex grow flex-col gap-[6px] xl:gap-0">
          <div className="flex items-center justify-between">
            <p className="text-[12px] md:text-[13.35px] text-black font-semibold">
              Status:
            </p>
              <span className="text-black  text-[12px] md:text-[13.35px] font-normal">
                Ongoing
              </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[12px] md:text-[13.35px] text-black font-semibold">
              Budget:
            </p>
              <span className="text-black  text-[12px] md:text-[13.35px] ml-[18px] font-normal">
                $ 2000
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
