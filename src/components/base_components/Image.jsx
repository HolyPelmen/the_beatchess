import React from "react";

/**
 * An image Component
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.size - The size of the image ('large' | 'medium' | 'small')
 * @param {string} props.src - The sourse of the image
 * @param {React.ElementType|boolean} [props.FirstBlockIcon=false] - The icon component for the first block of the additional info
 * @param {string|boolean} [props.firstBlockLabel=false] - The text label for the first block of the additional info
 * @param {React.ElementType|boolean} [props.SecondBlockIcon=false] - The icon component for the second block of the additional info
 * @param {string|boolean} [props.secondBlockLabel=false] - The text label for the second block of the additional info
 * @returns {JSX.Element} The rendered component.
 *
 * * To create a block of the additional info - provide an icon and a label (for example - FirstBlockIcon AND firstBlockLabel - in that case, only the first block will be created).
 * * If neither icons nor labes are provided - additional info block on the hover will not be created.
 * * Also additional info block will not be created if the size specified as "small".
 */
export const Image = ({
  size,
  src,
  FirstBlockIcon = false,
  firstBlockLabel = false,
  SecondBlockIcon = false,
  secondBlockLabel = false,
}) => {
  let isShowAdditionalInfo = false;
  if (
    ((FirstBlockIcon && firstBlockLabel) || (SecondBlockIcon && secondBlockLabel)) &&
    size != "small"
  ) {
    isShowAdditionalInfo = true;
  }
  return (
    <div className={`image ${size}`}>
      <img src={src} className="image__content" />
      {}
      {isShowAdditionalInfo ? (
        <div className="image__hover bg">
          {FirstBlockIcon && firstBlockLabel ? (
            <div className="image__hover_block">
              <FirstBlockIcon className="image__hover_icon" />
              <span className="image__hover_text">{firstBlockLabel}</span>
            </div>
          ) : null}

          {SecondBlockIcon && secondBlockLabel ? (
            <div className="image__hover_block">
              <SecondBlockIcon className="image__hover_icon" />
              <span className="image__hover_text">{secondBlockLabel}</span>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
