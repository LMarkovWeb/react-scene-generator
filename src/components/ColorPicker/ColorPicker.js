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
            width={"276px"}
            color={initColor}
            onChangeComplete={handleChangeComplete}
            colors={[
              "#FF6900",
              "#FCB900",
              "#7BDCB5",
              "#00D084",
              "#8ED1FC",
              "#0693E3",
              "#ABB8C3",
              "#EB144C",
              "#F78DA7",
              "#9900EF",
            ]}
          />
        </div>
      )}
    </div>
  );
};

export { ColorPicker };
