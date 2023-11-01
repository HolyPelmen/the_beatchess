//* Base imports       ------------------------------------------------
import React from "react";
import { useTranslation } from "react-i18next";

//* Components imports ------------------------------------------------
import { Dropdown } from "../components/base_components/Dropdown";
import { ListItem } from "../components/base_components/ListItem";

//* Icons imports      ------------------------------------------------
import Language from "../assets/icons/language.svg?react";

/**
 * A component to change language
 *
 * @component
 * @param {Object} props - A component's props.
 * @param {boolean} props.isLight - Specifies whether the component has a light or dark theme.
 * @returns {JSX.Element} The rendered component.
 */
export const ChangeLanguage = ({ isLight }) => {
  const { t, i18n } = useTranslation();

  const locales = {
    en: { title: "English" },
    uk: { title: "Українська" },
  };

  return (
    <Dropdown isLight={isLight} direction="right" LeadIcon={Language}>
      {Object.keys(locales).map((locale) => (
        <ListItem
          key={locale}
          isLight={isLight}
          label={locales[locale].title}
          onClick={() => {
            i18n.changeLanguage(locale);
          }}
        />
      ))}
    </Dropdown>
  );
};
