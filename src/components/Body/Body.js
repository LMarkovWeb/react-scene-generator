import React from "react";
import "./style.scss";

const Body = ({ bodyPreview }) => {
  return (
    <div className="Body">
      <img className="Body__img" src={bodyPreview} />
    </div>
  );
};

export { Body };
