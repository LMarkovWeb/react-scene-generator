import React from "react";
import "./style.scss";
import { BodyWrapper } from "./styles";

const Body = ({ fillColor, svgCode }) => {
  return (
    <div className="Body">
      <BodyWrapper fillColor={fillColor}>{svgCode}</BodyWrapper>
    </div>
  );
};

export { Body };
