import styled from "styled-components";

export const LegsWrapper = styled.div`
  svg {
    width: 351px !important;
    height: 390px !important;
  }

  #Skin {
    fill: ${(props) => props.fillColor} !important;
  }
  @media (min-width: 1194px) {
    svg {
      width: 418px !important;
      height: 461px !important;
    }
  }
`;
