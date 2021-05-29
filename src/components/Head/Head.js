import React from "react";
import "./style.scss";
import { HeadWrapper } from "./styles";

/**
 * Принимает изображение для маникена
 */
const Head = ({ fillColor, svgCode }) => {
  return (
    <div className="Head">
      <HeadWrapper fillColor={fillColor}>{svgCode}</HeadWrapper>
    </div>
  );
};

export { Head };
