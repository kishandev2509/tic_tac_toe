import React from "react";

const Square = ({ position, element: Element, onClickFunction }) => {
  return (
    <div
      className="col-4 square"
      data-position={position}
      onClick={(e) => {
        onClickFunction(e);
      }}
    >
      {Element && <Element />}
    </div>
  );
};

export default Square;
