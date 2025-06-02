import Image from "next/image";
import React from "react";
import bgMobile from "@/public/Mask_mobile.jpg";
import bgMd from "@/public/Mask_group.png";
import bgLg from "@/public/Mask_laptop.png";
import bgMax from "@/public/Mask_large.png";

const BackgroundImages = () => {
  return (
    <>
      <div className="md:hidden h-[285px] relative">
        <Image
          src={bgMobile}
          priority
          quality={100}
          fill
          sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 1200px, (min-width: 860px) 780px, 335px"
          className="object-cover rounded-[18px] md:rounded-[41px]"
          alt="background"
        />
      </div>
      <div className="lg:hidden md:h-[400px] hidden md:block relative">
        <Image
          src={bgMd}
          priority
          quality={100}
          fill
          sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 1200px, (min-width: 860px) 780px, 335px"
          className="object-cover md:block rounded-[41px]"
          alt="background"
        />
      </div>
      <div className="lg:h-[600px] hidden lg:block xl:hidden relative">
        <Image
          src={bgLg}
          priority
          quality={100}
          fill
          sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 1200px, (min-width: 860px) 780px, 335px"
          className="object-cover md:block rounded-[41px]"
          alt="background"
        />
      </div>
      <div className="xl:h-[715px] hidden xl:block relative">
        <Image
          src={bgMax}
          priority
          quality={100}
          fill
          sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 1200px, (min-width: 860px) 780px, 335px"
          className="object-cover md:block rounded-[41px]"
          alt="background"
        />
      </div>
    </>
  );
};

export default BackgroundImages;
