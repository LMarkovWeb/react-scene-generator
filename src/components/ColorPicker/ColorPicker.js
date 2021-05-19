import React, { useState } from "react";
/**
 * React Color
 * @see https://casesandberg.github.io/react-color/
 */
import { TwitterPicker } from "react-color";
/**
 * Styles
 */
import "./style.scss";

/**
  @todo Настройка TwitterPicker. Свои цвета https://casesandberg.github.io/react-color/#api-individual
*/

const ColorPicker = ({ title, isShow, onSkinColorSelect }) => {
  const [isShowState, setShow] = useState(isShow);

  const initColor = "#FFDFC4";

  function handleChangeComplete(color) {
    onSkinColorSelect(color.hex);
  }

  return (
    <div className="ColorPicker">
      <div className="ColorPicker__title" onClick={() => setShow(!isShowState)}>
        <span>{title}</span>
      </div>
      {isShowState && (
        <div className="ColorPicker__wrapper">
          <TwitterPicker
            color={initColor}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      )}
    </div>
  );
};

export { ColorPicker };
