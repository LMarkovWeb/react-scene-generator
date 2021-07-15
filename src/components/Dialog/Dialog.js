import React from "react";
import "./style.scss";

const Dialog = ({ message, direction }) => {
  return (
    <div class="container">
      <div class="arrow">
        <div class="outer"></div>
        <div class="inner"></div>
      </div>
      <div class="message-body">
        <p>{message}</p>
      </div>
    </div>
  );
};

export { Dialog };
