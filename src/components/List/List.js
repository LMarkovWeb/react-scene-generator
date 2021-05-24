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

function List({ list, title, isShow, onItemSelect }) {
  const [isShowState, setShow] = useState(false);

  useEffect(() => {
    if (isShow) {
      setShow(true);
    }
    //console.log("isShow :>> ", title, isShow);
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
