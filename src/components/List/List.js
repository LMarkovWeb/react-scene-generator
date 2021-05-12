import React, { useState, useEffect } from "react";
import "./style.scss";

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
              key={item.title}
              onClick={() => onItemSelect(item)}
            >
              <img className="List__preview" src={item.preview} /> {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export { List };
