import styled from "styled-components";
export const HeadWrapper = styled.div`
  svg {
    width: 179px !important;
    height: 166px !important;
  }

  #Face {
    fill: ${(props) => props.fillColor} !important;
  }

  @media (min-width: 1194px) {
    svg {
      width: 195px !important;
      height: 189px !important;
    }
  }
`;
