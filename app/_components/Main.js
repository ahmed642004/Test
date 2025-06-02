import React from "react";
import BackgroundImages from "./BackgroundImages";
import Dots from "./Dots";
import LabelBadge from "./LabelBadge";
import ContentBlocks from "./ContentBlocks";
import SearchInput from "./SearchInput";

const Main = () => {
  return (
    <div className="relative">
      <div className="relative">
        <BackgroundImages />
        <Dots />
        <LabelBadge />
      </div>
      <ContentBlocks />
      <SearchInput />
    </div>
  );
};

export default Main;
