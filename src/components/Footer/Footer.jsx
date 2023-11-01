//* Base imports       -----------------------------------------------
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/index.scss";
import { FromPortTablet, IsSmallTablet } from "../../Breakpoints";

//* Icons imports      -----------------------------------------------
import Facebook from "../../assets/icons/facebook.svg?react";
import Instagram from "../../assets/icons/instagram.svg?react";
import Youtube from "../../assets/icons/youtube.svg?react";
import Spotify from "../../assets/icons/spotify.svg?react";
import Likes from "../../assets/icons/likes.svg?react";
import Comment from "../../assets/icons/comment.svg?react";

//* Components imports -----------------------------------------------
import { Link } from "../base_components/Link";
import { Image } from "../base_components/Image";

/**
 * A small footer component
 *
 * @component
 * @param {boolean} isLight - Specifies whether the component has a light or dark theme.
 * @returns {JSX.Element} The rendered component
 */
const SmallFooter = ({ isLight }) => {
  const { t } = useTranslation("footer");

  const socials = {
    facebook: {
      icon: Facebook,
      link: "https://www.facebook.com/",
    },
    instagram: {
      icon: Instagram,
      link: "https://www.instagram.com/",
    },
    youtube: {
      icon: Youtube,
      link: "https://www.youtube.com/",
    },
    spotify: {
      icon: Spotify,
      link: "https://www.spotify.com/",
    },
  };

  return (
    <div className="footer__inner">
      <nav className="footer__inner_pages">
        {[
          t("Home", { ns: "pages" }),
          t("Announcements", { ns: "pages" }),
          t("Contact", { ns: "pages" }),
          t("Donate", { ns: "pages" }),
        ].map((el) => (
          <Link
            key={el}
            type="base"
            size="medium"
            isLight={isLight}
            href={`#${el.toLowerCase()}`}
            label={el}
            target="_self"
            rel="tag"
          />
        ))}
      </nav>
      <div className="footer__inner_socials">
        {Object.keys(socials).map((social) => (
          <Link
            key={socials[social].link}
            type="base"
            size="large"
            isLight={isLight}
            href={socials[social].link}
            rel="external"
            LeadIcon={socials[social].icon}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * A big footer component (additional)
 *
 * @component
 * @returns {JSX.Element} The rendered component
 */
const BigFooter = () => {
  const { t } = useTranslation("footer");

  const instaImages = {
    post1: {
      image: "src/assets/images/dummy.png",
      likes: "800",
      comments: "451",
    },
    post2: {
      image: "src/assets/images/dummy.png",
      likes: "1328",
      comments: "312",
    },
    post3: {
      image: "src/assets/images/dummy.png",
      likes: "5634",
      comments: "546",
    },
    post4: {
      image: "src/assets/images/dummy.png",
      likes: "3125",
      comments: "654",
    },
  };

  return (
    <div className="footer__big">
      <h2 className="footer__big_header">{t("bigFooterTitle")}</h2>
      <div className="footer__big_images">
        {Object.keys(instaImages).map((post) => (
          <Image
            key={instaImages[post].likes}
            size="large"
            src={instaImages[post].image}
            FirstBlockIcon={Likes}
            firstBlockLabel={instaImages[post].likes}
            SecondBlockIcon={Comment}
            secondBlockLabel={instaImages[post].comments}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * A footer component
 *
 * @component
 * @param {boolean} isLight - Specifies whether the component has a light or dark theme.
 * @returns {JSX.Element} The rendered component
 */
export const Footer = ({ isLight }) => {
  return (
    <footer
      className={`footer ${isLight ? "light" : "dark"} ${
        IsSmallTablet() ? "" : "extended"
      }`}
    >
      <FromPortTablet>
        <BigFooter />
      </FromPortTablet>

      <SmallFooter isLight={isLight} />
    </footer>
  );
};
