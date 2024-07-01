import React, { useState } from "react";
import "../scss/main.scss";
import Square from "./Square";
import Cross from "./Cross";
import Circle from "./Circle";
const Board = () => {
  const [positionValues, setPositionValues] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(0);
  const onSquareClick = (e) => {
    const currentPosition = e.target.getAttribute("data-position");
    setPositionValues((prevValues) => {
      if (prevValues[currentPosition]) return prevValues;
      const newValues = prevValues;
      newValues[currentPosition] = turn ? Cross : Circle;
      return newValues;
    });
    changeTurn();
  };
  const changeTurn = () => {
    setTurn(turn ? 0 : 1);
  };
  const renderSquare = (position) => {
    return (
      <Square
        position={position}
        element={positionValues[position]}
        onClickFunction={onSquareClick}
      />
    );
  };
  return (
    <div className="board container">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
