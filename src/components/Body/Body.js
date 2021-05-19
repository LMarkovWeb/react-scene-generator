import React from "react";
import styled from "styled-components";
import "./style.scss";

export const BodyWrapper = styled.div`
  svg {
    width: 235px !important;
    height: 350px !important;
  }

  #Skin,
  #Hands_2,
  #Mask {
    fill: ${(props) => props.fillColor} !important;
  }
`;
const Body = ({ fillColor, svgCode }) => {
  return (
    <div className="Body">
      <BodyWrapper fillColor={fillColor}>{svgCode}</BodyWrapper>
    </div>
  );
};

export { Body };
