import React from "react";
const Square = ({ position, element: Element, onClickFunction }) => {
  return (
    <div
      className="col-xs-4 col-sm-4 square"
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
