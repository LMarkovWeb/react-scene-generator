import React from "react";
import styled from "styled-components";
import "./style.scss";

export const LegsWrapper = styled.div`
  svg {
    width: 435px !important;
    height: 500px !important;
  }

  #Skin {
    fill: ${(props) => props.fillColor} !important;
  }
`;

const Legs = ({ fillColor, svgCode }) => {
  return (
    <div className="Legs">
      <LegsWrapper fillColor={fillColor}>{svgCode}</LegsWrapper>
    </div>
  );
};

export { Legs };
