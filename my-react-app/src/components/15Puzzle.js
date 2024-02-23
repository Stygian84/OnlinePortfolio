import React, { useState, useEffect, useRef } from "react";
import "../css/Puzzle.css";
import { useIntersectionObserver } from "./useIntersectionObserver";

const BEST_TIME_KEY = "bestTime";
const BOARD_SIZE = 4;

const generateBoard = () => {
  let board = [];
  do {
    board = [];
    const numbers = Array.from({ length: BOARD_SIZE * BOARD_SIZE - 1 }, (_, index) => index + 1);
    numbers.push(null);
    for (let i = 0; i < BOARD_SIZE; i++) {
      const row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        row.push(numbers[randomIndex]);
        numbers.splice(randomIndex, 1);
      }
      board.push(row);
    }
  } while (!isSolvable(board)); // Keep generating until a solvable board is found
  return board;
};

const shuffleBoard = (board) => {
  const flatBoard = board.flat();
  for (let i = flatBoard.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flatBoard[i], flatBoard[j]] = [flatBoard[j], flatBoard[i]];
  }
  const shuffledBoard = [];
  for (let i = 0; i < flatBoard.length; i += BOARD_SIZE) {
    shuffledBoard.push(flatBoard.slice(i, i + BOARD_SIZE));
  }
  return shuffledBoard;
};

const isSolvable = (board) => {
  let inversions = 0;
  const flatBoard = board.flat();
  for (let i = 0; i < flatBoard.length - 1; i++) {
    for (let j = i + 1; j < flatBoard.length; j++) {
      if (flatBoard[i] && flatBoard[j] && flatBoard[i] > flatBoard[j]) {
        inversions++;
      }
    }
  }
  if (BOARD_SIZE % 2 === 0) {
    inversions += board.findIndex((row) => row.includes(null)) / BOARD_SIZE;
  }
  return inversions % 2 === 0;
};

const Puzzle = () => {
  const miniGameRef = useRef(null);
  const miniGameVisible = useIntersectionObserver(miniGameRef, 3000);
  const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bestTime, setBestTime] = useState(Number(localStorage.getItem(BEST_TIME_KEY)) || Infinity);

  useEffect(() => {
    const newBoard = generateBoard();
    if (!isSolvable(newBoard)) {
      newBoard[BOARD_SIZE - 1][BOARD_SIZE - 2] = BOARD_SIZE * BOARD_SIZE - 1;
      newBoard[BOARD_SIZE - 1][BOARD_SIZE - 3] = BOARD_SIZE * BOARD_SIZE - 2;
    }
    setBoard(shuffleBoard(newBoard));
    setMoves(0);
    setSolved(false);
    setStartTime(null);
    setElapsedTime(0);
  }, []);

  useEffect(() => {
    if (isSolved()) {
      setSolved(true);
    }
  }, [board]);
  useEffect(() => {
    if (solved && elapsedTime < bestTime) {
      setBestTime(elapsedTime);
    }
    if (solved && bestTime !== null) {
      localStorage.setItem(BEST_TIME_KEY, bestTime.toString());
    }
  }, [solved, elapsedTime, bestTime]);
  const isSolved = () => {
    const flatBoard = board.flat();
    for (let i = 0; i < flatBoard.length - 1; i++) {
      if (flatBoard[i] !== i + 1 && flatBoard[i] !== null) {
        return false;
      }
    }
    return flatBoard[flatBoard.length - 1] === null;
  };

  const handleClick = (row, col) => {
    if (solved) return; // Prevent moves after puzzle is solved
    const emptyRow = board.findIndex((r) => r.includes(null));
    const emptyCol = board[emptyRow].indexOf(null);
    if ((row === emptyRow && Math.abs(col - emptyCol) === 1) || (col === emptyCol && Math.abs(row - emptyRow) === 1)) {
      if (startTime === null) {
        setStartTime(Date.now());
      }
      const newBoard = board.map((row) => [...row]);
      newBoard[emptyRow][emptyCol] = board[row][col];
      newBoard[row][col] = null;
      setBoard(newBoard);
      setMoves(moves + 1);
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="board-row">
        {row.map((cell, colIndex) => (
          <div
            key={colIndex}
            className={`board-cell ${cell === null ? "empty" : ""}`}
            onClick={() => handleClick(rowIndex, colIndex)}
          >
            {cell}
          </div>
        ))}
      </div>
    ));
  };
  const handleReset = () => {
    const newBoard = shuffleBoard(generateBoard());
    setBoard(newBoard);
    setMoves(0);
    setSolved(false);
    setStartTime(null);
    setElapsedTime(0);
  };
  useEffect(() => {
    if (startTime && !solved) {
      const intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [startTime, solved]);
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div ref={miniGameRef} className={`app ${miniGameVisible ? "bounce-from-below" : ""}`}>
      <h1>15 Puzzle</h1>
      <div className="board">{renderBoard()}</div>
      {solved && <div className="message">Congratulations! Puzzle Solved.</div>}
      <div className="stats">
        <div>
          <span style={{ fontWeight: "bold" }}>Moves:</span> {moves}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Time:</span> {formatTime(elapsedTime)}
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Best Time:</span>{" "}
          {bestTime === Infinity ? "00:00" : formatTime(bestTime)}
        </div>
      </div>
      <div className="reset" onClick={handleReset}>
        New Game
      </div>
    </div>
  );
};

export default Puzzle;
