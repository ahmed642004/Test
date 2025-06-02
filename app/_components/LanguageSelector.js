import flag from "@/public/Flag.png";
import greek from "@/public/greek.png";
import Image from "next/image";

const LanguageSelector = () => (
  <button className="relative md:flex hidden items-center py-[0px] w-[95px] h-[40px] xl:h-[48px] md:px-[0px] bg-black text-white border-[#94949480] border-[0.83px] my-[5px] font-medium rounded-4xl text-[12px]">
    <Image src={flag} alt="flag" width={24} height={24} className="ml-[9px]" />
    <span className="text-[14px] ml-[10.5px]">EN</span>
    {/* SVG Chevron */}
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-[5px]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.47019 5.61966L0.227437 1.37691L1.28794 0.316406L5.00044 4.02891L8.71294 0.316406L9.77344 1.37691L5.53069 5.61966C5.39004 5.76026 5.19931 5.83925 5.00044 5.83925C4.80156 5.83925 4.61083 5.76026 4.47019 5.61966Z"
        fill="white"
      />
    </svg>
    {/* Dropdown */}
    <div className="absolute hidden xl:flex flex-col justify-between xl:top-[calc(100%+9px)] xl:w-[130px] xl:h-[75px] left-[-22px] p-[8px] bg-black z-50 border-[#94949480] border-[1px] rounded-[14px]">
      <div className="flex items-center border-b border-[#4A4A4A] pb-[5px]">
        <Image src={flag} alt="flag" width={24} height={24} />
        <span className="text-[14px] ml-[10.5px]">English</span>
      </div>
      <div className="flex items-center border-b-[#4A4A4A] mt-[6px]">
        <Image src={greek} alt="flag" width={24} height={24} />
        <span className="text-[14px] ml-[10.5px]">Greek</span>
      </div>
    </div>
  </button>
);
export default LanguageSelector;
