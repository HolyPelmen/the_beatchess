//* Base imports       -------------------------------------------
import React from "react";
import "./styles/index.scss";
import { MobileToSmallTablet, SmallTabletToLaptop, Desktop } from "../../Breakpoints";

//* Components imports -------------------------------------------
import { Logo } from "../base_components/Logo";

export const OpenGraph = ({ isLight }) => {
  return (
    <div className={`open-graph ${isLight ? "light" : "dark"}`}>
      <MobileToSmallTablet>
        <Logo size="small" isIcon={false} isLight={isLight} />
      </MobileToSmallTablet>
      <SmallTabletToLaptop>
        <Logo size="medium" isIcon={false} isLight={isLight} />
      </SmallTabletToLaptop>
      <Desktop>
        <Logo size="large" isIcon={false} isLight={isLight} />
      </Desktop>
    </div>
  );
};
