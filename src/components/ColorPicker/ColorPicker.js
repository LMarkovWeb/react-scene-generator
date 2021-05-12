import React, { useState, useEffect } from "react";
import { TwitterPicker } from "react-color";
import "./style.scss";

const ColorPicker = ({ title, isShow }) => {
  const [isShowState, setShow] = useState(false);
  useEffect(() => {
    if (isShow) {
      setShow(true);
    }
    //console.log("isShow :>> ", title, isShow);
  }, [isShow]);

  return (
    <div className="ColorPicker">
      <div className="ColorPicker__title" onClick={() => setShow(!isShowState)}>
        <span>{title}</span>
      </div>
      {isShowState && (
        <div className="ColorPicker__wrapper">
          <TwitterPicker />
        </div>
      )}
    </div>
  );
};

export { ColorPicker };
