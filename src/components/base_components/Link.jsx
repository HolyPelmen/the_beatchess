//* Base imports ------------------------------------------------------------
import React from "react";

/**
 * A link component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.type - Specifies the type of the link ('base' | 'add').
 * @param {string} props.size - Specifies the size of the component ('large' | 'medium' | 'small').
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @param {string} props.href - Defines a reference for a component.
 * @param {string} [props.target="_blank"] - Defines the target for the link ('_blank' | '_self' | '_parent' | '_top').
 * @param {string} [props.rel="external"] - Defines the relationship for the link ('alternate' | 'author' | 'bookmark' | 'external' | 'help' | 'license' | 'next' | 'nofollow' | 'noopener' | 'noreferrer' | 'prev' | 'search' | 'tag').
 * @param {boolean} [props.isUnderline=false] - Determines whether to underline the link text.
 * @param {string|boolean} [props.label=false] - The label text for the link.
 * @param {React.ElementType|boolean} [props.LeadIcon=false] - The leading icon component.
 * @param {React.ElementType|boolean} [props.TrailIcon=false] - The trailing icon component.
 * @returns {JSX.Element} The rendered component.
 *
 * * Leave the label prop blank and set the LeadIcon OR TrailIcon for the icon link
 */
export const Link = ({
  type,
  size,
  isLight,
  href,
  target = "_blank",
  rel = "external",
  isUnderline = false,
  label = false,
  LeadIcon = false,
  TrailIcon = false,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`link ${type} ${size} ${isLight ? "light" : "dark"} ${
        isUnderline ? "underline" : ""
      }`}
    >
      {LeadIcon ? <LeadIcon className="link__icon" /> : null}
      {label ? <span className="link__label">{label}</span> : null}
      {TrailIcon ? <TrailIcon className="link__icon" /> : null}
    </a>
  );
};
