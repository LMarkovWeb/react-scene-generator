import styled from "styled-components";

export const LegsWrapper = styled.div`
  svg {
    width: 435px !important;
    height: 500px !important;
  }

  #Skin {
    fill: ${(props) => props.fillColor} !important;
  }
  @media (max-width: 1194px) {
    svg {
      width: 328px !important;
      height: 386px !important;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
  }
`;
