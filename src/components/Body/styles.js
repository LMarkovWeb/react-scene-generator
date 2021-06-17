import styled from "styled-components";
export const BodyWrapper = styled.div`
  svg {
    width: 195px !important;
    height: 274px !important;
  }

  #Skin,
  #Hands_2,
  #Mask {
    fill: ${(props) => props.fillColor} !important;
  }
  @media (min-width: 1194px) {
    svg {
      width: 223px !important;
      height: 289px !important;
    }
  }
`;
