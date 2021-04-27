import React from "react";

/**
 * Принимает изображение для маникена
 */
const Head = ({ headPreview }) => {
  return (
    <div>
      <img src={headPreview} />
    </div>
  );
};

export { Head };
