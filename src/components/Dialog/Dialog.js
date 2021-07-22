import React from "react";
import "./style.scss";

const Dialog = ({ mes, g }) => {
  const bgrdC = g === "m" ? "#e7f5ff" : "#fdf3f3";
  const floatType = g === "m" ? "right" : "left";
  return (
    <div className="message">
      <div
        className="message__body"
        style={{ backgroundColor: bgrdC, float: floatType }}
      >
        {mes}
      </div>
    </div>
  );
};

export { Dialog };
