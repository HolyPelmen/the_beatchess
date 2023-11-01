//* Base imports      --------------------------------
import React from "react";

//* Icons import      --------------------------------
import Chevron from "../../assets/icons/chevron_down.svg?react";

/**
 * A dropdown Selector component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {Function} props.onClick - onClick handler.
 * @param {boolean} props.isOpen - defines if dropdown is open or not.
 * @param {string} props.direction - right | down - defines the direction of the dropdown.
 * @param {boolean} props.isLight - sets the light or the dark styling.
 * @param {string|boolean} [props.selectorLabel=false] - text label for the selector.
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component.
 * @returns {JSX.Element} The rendered component.
 */
const DropdownSelector = ({
  onClick,
  isOpen,
  direction,
  isLight,
  selectorLabel = false,
  LeadIcon = false,
}) => {
  return (
    <button
      type="button"
      className={`dropdown-selector ${isLight ? "light" : "dark"}`}
      onClick={onClick}
    >
      {LeadIcon ? <LeadIcon className="dropdown-selector__icon" /> : null}
      {selectorLabel ? (
        <span className="dropdown-selector__label">{selectorLabel}</span>
      ) : null}
      <Chevron
        className={`dropdown-selector__icon ${isOpen ? "open" : ""} ${direction}`}
      />
    </button>
  );
};

/**
 * A dropdown component that toggles its content visibility.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode[]} props.children - The content elements within the dropdown.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {string} [props.direction="down"] - The direction of the dropdown ('right' | 'down').
 * @param {string|boolean} [props.selectorLabel=false] - The label for the selector button.
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component for the selector.
 * @returns {JSX.Element} The rendered component.
 */
export const Dropdown = ({
  children,
  isLight,
  direction = "down",
  selectorLabel = false,
  LeadIcon = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${direction}`}>
      <DropdownSelector
        onClick={openHandler}
        isOpen={isOpen}
        direction={direction}
        selectorLabel={selectorLabel}
        isLight={isLight}
        LeadIcon={LeadIcon}
      />
      {isOpen ? (
        <ul className={`dropdown__container ${isLight ? "light" : "dark"}`}>
          {children.map((el) => el)}
        </ul>
      ) : null}
    </div>
  );
};
