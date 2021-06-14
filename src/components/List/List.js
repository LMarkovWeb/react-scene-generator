import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./style.scss";

const StyledPreview = styled.span`
  svg {
    max-width: 34px !important;
    max-height: 34px !important;
    margin-right: 8px;
  }
`;

const screenWide = window.screen.width;
const mobileDevices = 480;
const isMobileDevices = screenWide < mobileDevices;

function List({ list, title, isShow, onItemSelect }) {
  const [isShowState, setShow] = useState(!isMobileDevices);

  useEffect(() => {
    if (isShow && !isMobileDevices) {
      setShow(true);
    }
  }, [isShow]);

  return (
    <div className="List">
      <div className="List__title" onClick={() => setShow(!isShowState)}>
        <span>{title}</span>
      </div>

      {list.length && isShowState && (
        <ul className="List__wrapper">
          {list.map((item) => (
            <li
              className="List__item"
              key={Math.random().toString()}
              onClick={() => onItemSelect(item)}
            >
              <StyledPreview>{item.preview}</StyledPreview>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { List };
