import React from "react";
import "./style.scss";

const Legs = ({ legsPreview }) => {
  return (
    <div className="Legs">
      <img className="Legs__img" src={legsPreview} />
    </div>
  );
};

export { Legs };
