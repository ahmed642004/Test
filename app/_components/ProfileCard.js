import Image from "next/image";

const ProfileCard = ({
  image,
  badgeLabel,
  badgeBg,
  badgeText,
  name,
  jobTitle,
  rating,
}) => {
  return (
    <div className="w-[152px] xl:w-[203px] xl:h-[124px] md:w-[162px] ... rounded-[10px] bg-[#F4F5F8] pb-[10px] px-[13px] ...">
      <div className="flex justify-between gap-[16px] md:gap-[7px]">
        <div className="relative w-[36px] h-[36px] xl:w-[51px] xl:h-[51px] rounded-full border border-[#87A1C0] mt-[7px] overflow-hidden">
          <Image
            src={image}
            alt="Profile Picture"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1920px) 51px, 36px"
          />
        </div>
        <div>
          <div
            className={`w-[74px] md:w-[100px] h-[25px] lg:w-[100px] flex items-center justify-center rounded-[47.7px] mt-[5px] xl:mt-[10px] lg:mt-[5px] font-medium`}
            style={{ backgroundColor: badgeBg, color: badgeText }}
          >
            {badgeLabel}
          </div>
          <div className="flex items-center justify-end gap-[4px] mt-[6px] md:mt-0">
            {/* Star icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.15438 0.816406L8.76064 5.75996L13.9586 5.75996L9.75336 8.81524L11.3596 13.7588L7.15438 10.7035L2.94914 13.7588L4.5554 8.81524L0.35016 5.75996L5.54812 5.75996L7.15438 0.816406Z"
                fill="#FFCB2B"
              />
            </svg>
            <div className="text-black text-[12px] lg:text-[13.35px] font-bold">
              {rating}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black text-[12px] md:text-[16px] lg:text-[15px] mt-[10px] lg:mt-[7px] xl:mt-[10px] font-semibold">
          {name}
        </p>
        <p className="text-[#818181] text-[12px] md:text-[14px] lg:text-[13.35px] font-normal whitespace-nowrap">
          {jobTitle}
        </p>
      </div>
    </div>
  );
};


export default ProfileCard;
