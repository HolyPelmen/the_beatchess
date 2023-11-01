import React from "react";

/**
 * A list Item Component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {string|boolean} [props.label=false] - The text label for the component
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component.
 * @param {React.ElementType|boolean} [props.TrailIcon=false] - The trailing icon component.
 * @param {any} [props.rest] - Additional props that can be applied to the list item element.
 * @returns {JSX.Element} The rendered component.
 *
 */
export const ListItem = ({
  isLight,
  label = false,
  LeadIcon = false,
  TrailIcon = false,
  ...rest
}) => {
  return (
    <li className={`list__item ${isLight ? "light" : "dark"}`} {...rest}>
      {LeadIcon ? <LeadIcon className="list__icon" /> : null}
      {label ? <span className="list__label">{label}</span> : null}
      {TrailIcon ? <TrailIcon className="list__icon trail" /> : null}
    </li>
  );
};
