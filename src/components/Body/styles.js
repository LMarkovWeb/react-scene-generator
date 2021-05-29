import styled from "styled-components";
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
  @media (max-width: 1194px) {
    svg {
      width: 195px !important;
      height: 274px !important;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
  }
`;
