/**
 * React
 */
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

const screenWide = window.screen.width;
const mobileDevices = 640;
const isMobileDevices = screenWide < mobileDevices;

/**
 * ColorPicker
 * @param {*} param0
 * @returns
 */
const ColorPicker = ({ title, isShow, onSkinColorSelect }) => {
  const [isShowState, setShow] = useState(!isMobileDevices && isShow);

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
              "#FCB900",
              "#F78DA7",
              "#FF6900",
              "#FFDCB1",
              "#E3A173",
              "#7BDCB5",
              "#8ED1FC",
              "#0693E3",
              "#ABB8C3",
              "#A53900",
            ]}
          />
        </div>
      )}
    </div>
  );
};

export { ColorPicker };
