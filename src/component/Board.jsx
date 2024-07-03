import React, { useEffect, useState } from "react";
import "../scss/main.scss";
import Square from "./Square";
import Cross from "./Cross";
import Circle from "./Circle";
import ModalWin from "./ModalWin";

const Board = (props) => {
  const [positionValues, setPositionValues] = useState(Array(9).fill(null));
  const [showModal, setShowModal] = useState(false);
  const [draw, setDraw] = useState(false);
const [boxFilled, setBoxFilled] = useState(0);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const clearBoard = (newGame) => {
    setDraw(false);
    setBoxFilled(0);
    props.setTurn(0);
    props.setGameStarted(newGame);
    setPositionValues(Array(9).fill(null));
  };
  
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWin = () => {
    for (let [a, b, c] of winningCombinations) {
      if (
        positionValues[a] &&
        positionValues[a] === positionValues[b] &&
        positionValues[a] === positionValues[c]
      ) {
        handleShowModal();
        return;
      }
    }
    if (boxFilled===9) {
      setDraw(true);
      handleShowModal();  
    }
  };

  const onSquareClick = (e) => {
    const currentPosition = e.target.getAttribute("data-position");
    setPositionValues((prevValues) => {
      if (prevValues[currentPosition]) return prevValues;
      const newValues = prevValues;
      newValues[currentPosition] = props.turn ? Circle : Cross;
      setBoxFilled(boxFilled+1);
      changeTurn();
      return newValues;
    });
  };

  const changeTurn = () => {
    props.setTurn(props.turn ? 0 : 1);
  };

  useEffect(() => {
    checkWin();
  }, [...positionValues]);

  const renderSquare = (position) => {
    return (
      <Square
        position={position}
        element={positionValues[position]}
        onClickFunction={props.gameStarted ? onSquareClick : () => {}}
      />
    );
  };

  return (
    <>
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
      <ModalWin
        show={showModal}
        handleClose={handleCloseModal}
        onclose={clearBoard}
        player={props.player}
        setPlayers={props.setPlayers}
        draw={draw}
      />
    </>
  );
};

export default Board;
