//* Base imports ---------------------------------------
import React from "react";

/**
 * A customizable button component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.type - Defines the type of the button ('primary' | 'secondary' | 'tertiaty' | 'ghost').
 * @param {string} props.size - Defines the size of the component ('large' | 'medium' | 'small').
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {Function} props.onClick - click handler function for the button.
 * @param {string|boolean} [props.label=false] - The label text for the button.
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component.
 * @param {React.ElementType|boolean} [props.TrailIcon=false] - The trailing icon component.
 * @returns {JSX.Element} The rendered component.
 *
 * * Leave the label prop blank and set the LeadIcon OR TrailIcon for the icon button
 */
export const Button = ({
  type,
  size,
  isLight,
  onClick,
  label = false,
  LeadIcon = false,
  TrailIcon = false,
}) => {
  return (
    <button
      className={`button ${type} ${size} ${isLight ? "light" : "dark"}`}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {LeadIcon ? <LeadIcon className="button__icon" /> : null}
      {label ? <span className="button__label">{label}</span> : null}
      {TrailIcon ? <TrailIcon className="button__icon" /> : null}
    </button>
  );
};

/**
 * A hamburger button component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.type - Defines the type of the animation ('3dx' | '3dy' | '3dxy' | 'arrow' | 'arrowalt' | 'arrowturn' | 'boring' | 'collapse' | 'elastic' | 'emphatic' | 'minus' | 'slider' | 'spin' | 'spring' | 'stand' | 'squeeze' | 'vortex').
 * @param {string} props.size - Defines the size of the component ('large' | 'medium' | 'small').
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {Function} props.clickHandler - click handler function for the button.
 * @param {boolean} props.isActive - Determines if hamburger button is active or not.
 * @param {string|boolean} [props.label=false] - The label text for the button.
 * @returns {JSX.Element} The rendered component.
 *
 * * Note: for reverse variants, add '-r' at the end of type's string (e.g. '3dx-r')
 */
export const HamburgerButton = ({
  type,
  size,
  isLight,
  clickHandler,
  isActive,
  label = false,
}) => {
  return (
    <button
      className={`button ${size} hamburger hamburger--${type} ${
        isActive ? "is-active" : ""
      }`}
      type="button"
      aria-label={label}
      onClick={clickHandler}
    >
      <span className="hamburger-box">
        <span className={`hamburger-inner ${isLight ? "light" : "dark"}`}></span>
      </span>
      {label ? (
        <span className={`button__label ${isLight ? "light" : "dark"}`}>{label}</span>
      ) : null}
    </button>
  );
};
