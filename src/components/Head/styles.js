import styled from "styled-components";
export const HeadWrapper = styled.div`
  svg {
    width: 235px !important;
    height: 200px !important;
  }

  #Face {
    fill: ${(props) => props.fillColor} !important;
  }

  @media (max-width: 1194px) {
    svg {
      width: 179px !important;
      height: 166px !important;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
  @media (max-width: 480px) {
  }
`;
