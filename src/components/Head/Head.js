import React from "react";

/**
 * Принимает изображение для маникена
 */
const Head = ({ headPreview }) => {
  return (
    <div className="Head">
      <img className="Head__img" src={headPreview} />
    </div>
  );
};

export { Head };
