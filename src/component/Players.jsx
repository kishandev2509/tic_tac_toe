import React from "react";

const Players = (props) => {
  return (
    <div className="container my-3 playerBox">
      <div className="row">
        <div className="col-9 row flex-nowrap align-items-center justify-content-center">
          <div className="col-1" id="cross"></div>
          <div className="col">
            <input
              type="text"
              name="player1"
              id="player1"
              disabled={props.disabled}
              value={props.players[0]}
              placeholder="Player 1"
              onChange={(e) => {
                props.setPlayers[0](e.target.value);
              }}
            />
          </div>
          <div className="col-1" id="circle"></div>
          <div className="col">
            <input
              type="text"
              name="player2"
              id="player2"
              disabled={props.disabled}
              value={props.players[1]}
              placeholder="Player 2"
              onChange={(e) => {
                props.setPlayers[1](e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-3 startBtn">
          <button
            type="button"
            disabled={props.disabled}
            onClick={(e) => {
              props.setGameStarted(1);
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
