//* Base imports       -------------------------------------------
import React from "react";
import "./styles/index.scss";

//* Components imports -------------------------------------------
import { Logo } from "../base_components/Logo";

export const Loading = ({ isLight }) => {
  return (
    <div className="loading-logo">
      <Logo size="large" isIcon={true} isLight={isLight} />
    </div>
  );
};
