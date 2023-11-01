//* Base imports
import React from "react";

//* Images imports
import LogoBig from "../../assets/logos/thebeatchess.svg?react";
import LogoSmall from "../../assets/logos/thebeatchess-icon.svg?react";

/**
 * A logo component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.size - Specifies the size of the component ('large' | 'medium' | 'small').
 * @param {boolean} props.isIcon - Determines if the icon or full logo should be rendered.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @returns {JSX.Element} The rendered component.
 */
export const Logo = ({ size, isIcon, isLight }) => {
  return (
    <div className={`logo__${size}_${isIcon ? "icon" : "full"}`}>
      {isIcon ? (
        <LogoSmall className={`logo ${isLight ? "light" : "dark"}`} />
      ) : (
        <LogoBig className={`logo ${isLight ? "light" : "dark"}`} />
      )}
    </div>
  );
};
