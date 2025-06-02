import React from "react";
import man1 from "@/public/man1.png";
import man2 from "@/public/man2.jpg";
import ProfileCard from "./ProfileCard";
const Card = () => {
  return (
    <div className="flex justify-between gap-[9px] lg:gap-[0px] mb-[15px] ">
      <ProfileCard
        image={man1}
        badgeLabel="Client"
        badgeBg="#DDE3F3"
        badgeText="black"
        name="Edward Smith"
        jobTitle="Founder of MathTech"
        rating="5.0"
      />
      <ProfileCard
        image={man2}
        badgeLabel="Talent"
        badgeBg="#E1FA77"
        badgeText="#18470D"
        name="Edward Smith"
        jobTitle="Math Teacher"
        rating="5.0"
      />
    </div>
  );
};

export default Card;
