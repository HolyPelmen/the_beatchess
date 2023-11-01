//* Base imports       --------------------------------------------------------
import React from "react";
import "./base_styles/index.scss";

//* Icons imports      --------------------------------------------------------
import LightMode from "./assets/icons/light_mode.svg?react";
import DarkMode from "./assets/icons/dark_mode.svg?react";

//* Components imports --------------------------------------------------------
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ChangeLanguage } from "./components/ChangeLanguage";
import { Button } from "./components/base_components/Buttons";
import { Loading } from "./components/Loading/Loading";
import { OpenGraph } from "./components/OpenGraph/OpenGraph";

export const App = () => {
  const [isLight, setIsLight] = React.useState(false);
  const [isOpenGraphActive, setIsOpenGraphActive] = React.useState(true);
  const [globalLoading, setGlobalLoading] = React.useState(false);

  const themeChangeHandler = () => {
    setIsLight(!isLight);
  };

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
      setIsOpenGraphActive(false);
    }, 4300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isOpenGraphActive ? <OpenGraph isLight={isLight} /> : null}
      {globalLoading ? <Loading isLight={isLight} /> : null}
      <Header isLight={isLight} />
      <main className={`${isLight ? "light" : "dark"}`}></main>
      <Footer isLight={isLight} />

      <div className="aside-menu">
        <Button
          type="secondary"
          size="large"
          isLight={isLight}
          LeadIcon={isLight ? DarkMode : LightMode}
          onClick={themeChangeHandler}
        />
        <ChangeLanguage isLight={isLight} />
      </div>
    </>
  );
};
