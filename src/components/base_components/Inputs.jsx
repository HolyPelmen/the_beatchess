//* Base imports -----------------------------------------------
import React from "react";

//* Icons import -----------------------------------------------
import ErrorIcon from "../../assets/icons/warning.svg?react";

/**
 * An input component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.label - The text label for the input. Also used as input name attribute.
 * @param {string} props.placeholder - The text label for the placeholder.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {boolean} [props.isRequired=false] - Determines whether the field is required to be filled in.
 * @param {boolean} [props.isError=false] - Determines whether the field has an error.
 * @param {string} [props.errorDesc="Input error"] - The description of an error.
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component.
 * @param {React.ElementType|boolean} [props.TrailIcon=false] - The trailing icon component.
 * @returns {JSX.Element} The rendered component.
 */
export const BaseInput = ({
  label,
  placeholder,
  isLight,
  LeadIcon = false,
  TrailIcon = false,
  isRequired = false,
  isError = false,
  errorDesc = "Input error",
}) => {
  return (
    <div
      className={`input-base__container ${isLight ? "light" : "dark"} ${
        isError ? "error" : ""
      }`}
    >
      <label htmlFor={label} className="input-base__label">
        {label}
      </label>
      {LeadIcon ? <LeadIcon className="input-base__icon lead" /> : null}
      {TrailIcon ? <TrailIcon className="input-base__icon trail" /> : null}
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        className="input-base__field"
        required={isRequired}
      />
      {isError ? (
        <div className="input-base__error_container">
          <ErrorIcon className="input-base__error_icon" />
          <span className="input-base__error_desc">{errorDesc}</span>
        </div>
      ) : null}
    </div>
  );
};
