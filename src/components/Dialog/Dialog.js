import React from "react";
import "./style.scss";

const Dialog = ({ mes, g }) => {
  const bgrdC = g === "m" ? "#e7f5ff" : "#fdf3f3";
  const floatType = g === "m" ? "left" : "right";
  return (
    <div
      className="message-body"
      style={{ backgroundColor: bgrdC, float: floatType }}
    >
      {mes}
    </div>
  );
};

export { Dialog };
