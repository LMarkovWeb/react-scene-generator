import React from "react";
import styled from 'styled-components'
import "./style.scss";

/**
 * Принимает изображение для маникена
 */

export const HeadWrapper = styled.div`
  svg {
    width: 235px !important;
  }

  #Face {
    fill: ${props => props.fillColor} !important;
  }
`
const Head = ({fillColor, svgCode}) => {
    return (
        <div className="Head">
            <HeadWrapper fillColor={fillColor}>
                {svgCode}
            </HeadWrapper>
        </div>
    );
};

export {Head};
