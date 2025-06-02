import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import LanguageSelector from "./LanguageSelector";
import AuthButtons from "./AuthButtons";
import MobileMenuButton from "./MobileMenuButton";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-black mt-[30px] rounded-[120px] mb-[25px] md:h-[54px] lg:h-[60px] xl:h-[74px]">
      <Logo />
      <div className="flex justify-between items-center md:gap-[40px] lg:gap-[130px] xl:gap-[185px]">
        <NavLinks />
        <div className="flex gap-1 md:gap-[6px] items-center">
          <LanguageSelector />
          <AuthButtons />
          <MobileMenuButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
