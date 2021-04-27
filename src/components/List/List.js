import React from "react";
import "./style.scss";

function List({ title, list, onItemSelect }) {
  return (
    <div className="List">
      <div className="List__title">{title}</div>
      {list.length && (
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
