import React from "react";
import "./style.scss";
import { LegsWrapper } from "./styles";

const Legs = ({ fillColor, svgCode }) => {
  return (
    <div className="Legs">
      <LegsWrapper fillColor={fillColor}>{svgCode}</LegsWrapper>
    </div>
  );
};

export { Legs };
