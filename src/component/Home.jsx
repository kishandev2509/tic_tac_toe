import React, { useEffect, useState } from "react";
import Board from "./Board";
import Players from "./Players";
import Header from "./Header";

const Home = () => {
  const [gameStarted, setGameStarted] = useState(0);
  const [turn, setTurn] = useState(0);
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const setplayers = [setPlayer1, setPlayer2];
  let player1name = player1 === "Player 1" ? "" : player1;
  let player2name = player2 === "Player 2" ? "" : player2;
  let players = [player1name, player2name];

  return (
    <>
      <Header player={turn ? player2 : player1}/>
      <Board
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        turn={turn}
        setTurn={setTurn}
        player={turn ? player1 : player2}
        setPlayers={setplayers}
      />
      <Players
        setGameStarted={setGameStarted}
        setPlayers={setplayers}
        players={players}
        disabled={gameStarted ? true : false}
      />
    </>
  );
};

export default Home;
