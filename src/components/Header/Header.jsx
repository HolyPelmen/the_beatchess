//* Base imports      -------------------------------------------------------
import React from "react";
import {
  MobileToPortTablet,
  FromTablet,
  IsTablet,
  IsPortTablet,
} from "../../Breakpoints";
import { useTranslation } from "react-i18next";
import "./styles/index.scss";

//* Icons import      -------------------------------------------------------
import Volunteer from "../../assets/icons/volunteer.svg?react";

//* Components import -------------------------------------------------------
import { Logo } from "../base_components/Logo";
import { Link } from "../base_components/Link";
import { HamburgerButton } from "../base_components/Buttons";

/**
 * A navbar component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {boolean} props.isLight - Specifies whether a component has a light or dark theme.
 * @param {boolean} props.isMenuActive - Specifies whether a navbar menu is open or closed.
 * @returns {JSX.Element} The rendered component
 */
const NavBar = ({ isLight, isMenuActive = false }) => {
  const { t } = useTranslation("pages");
  return (
    <nav
      className={`header__navigation ${isLight ? "light" : "dark"} ${
        IsPortTablet() ? (isMenuActive ? "open" : "close") : ""
      }`}
    >
      {/* el[0] - the name and the anchor of the nav element, el[1] - trail icon element */}
      {[
        [t("Home"), false],
        [t("Announcements"), false],
        [t("Contact"), false],
        [t("Donate"), Volunteer],
      ].map((el) => (
        <Link
          key={el[0]}
          type="base"
          size={IsTablet() ? "medium" : "large"}
          isLight={isLight}
          href={`#${el[0].toLowerCase()}`}
          label={el[0]}
          target="_self"
          rel="tag"
          TrailIcon={el[1]}
        />
      ))}
    </nav>
  );
};

/**
 * A header component
 *
 * @component
 * @param {Object} props - A component's props.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @returns {JSX.Element} The rendered element
 */
export const Header = ({ isLight }) => {
  const { t } = useTranslation("pages");
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  const menuHandler = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <header className={`header ${isLight ? "light" : "dark"}`}>
        <MobileToPortTablet>
          <Logo size="medium" isIcon={true} isLight={isLight} />
          <HamburgerButton
            type="spring"
            size="large"
            isLight={isLight}
            clickHandler={menuHandler}
            isActive={isMenuActive}
            label={t("Menu")}
          />
        </MobileToPortTablet>
        <FromTablet>
          <Logo size="small" isIcon={false} isLight={isLight} />
          <NavBar isLight={isLight} />
        </FromTablet>
      </header>
      <MobileToPortTablet>
        <NavBar isLight={isLight} isMenuActive={isMenuActive} />
      </MobileToPortTablet>
    </>
  );
};
