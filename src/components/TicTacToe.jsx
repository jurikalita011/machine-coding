import React, { useState } from "react";
import undo from "../assets/undo.svg";
import restart from "../assets/restart.svg";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import styles from "../styles/TicTacToe.module.css";

export const TicTacToe = () => {
  const [grid, setGrid] = useState(new Array(3).fill(Array(3).fill(null)));
  const [playerX, setPlayerX] = useState(true);
  const [moveHistory, setMoveHistory] = useState([]);
  const [winner, setWinner] = useState(null);

  // console.log(grid);
  // console.log(moveHistory);
  const handleClick = (row, col) => {
    if (!grid[row][col] && !winner) {
      const newGrid = grid.map((row) => [...row]);
      newGrid[row][col] = playerX ? "X" : "O";
      setGrid(newGrid);
      setPlayerX(!playerX);
      setMoveHistory([
        ...moveHistory,
        { player: playerX ? "X" : "O", position: [row, col] },
      ]);
      setWinner(checkWinner(newGrid, row, col));
    }
  };

  const checkWinner = (grid, row, col) => {
    // Check row
    if (grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2]) {
      return grid[row][0];
    }
    // Check column
    if (grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col]) {
      return grid[0][col];
    }
    // Check diagonal
    if (
      grid[0][0] === grid[1][1] &&
      grid[0][0] === grid[2][2] &&
      grid[0][0] !== null
    ) {
      return grid[0][0];
    }
    if (
      grid[0][2] === grid[1][1] &&
      grid[0][2] === grid[2][0] &&
      grid[0][2] !== null
    ) {
      return grid[0][2];
    }
    // Check for draw
    if (!grid.flat().includes(null)) {
      return "Draw";
    }
    return null;
  };

  const handleUndo = () => {
    if (moveHistory.length > 0 && !winner) {
      const lastMove = moveHistory[moveHistory.length - 1];
      const newGrid = grid.map((row) => [...row]);
      newGrid[lastMove.position[0]][lastMove.position[1]] = null;
      setGrid(newGrid);
      setPlayerX(!playerX);
      setMoveHistory(moveHistory.slice(0, -1));
      setWinner(null);
    }
  };

  const handleRestart = () => {
    setGrid(Array(3).fill(Array(3).fill(null)));
    setPlayerX(true);
    setMoveHistory([]);
    setWinner(null);
  };

  return (
    <Box className={styles.container}>
      <Box>
        <Button
          onClick={handleUndo}
          disabled={moveHistory.length === 0 || winner}
        >
          <Box>
            <Text>Undo</Text>
            <Image src={undo} alt="undo" />
          </Box>
        </Button>
        <Button onClick={handleRestart}>
          <Box>
            <Text>Restart</Text>
            <Image src={restart} alt="restart" />
          </Box>
        </Button>
      </Box>

      <Box>
        {moveHistory.length > 0 && <Heading as={"h1"}>Move History</Heading>}
        <ul>
          {moveHistory.map((move, index) => (
            <li key={index}>
              Player {move.player} to {move.position}
            </li>
          ))}
        </ul>
      </Box>
      <Box className={styles.grid}>
        {grid.map((row, rowIndex) => (
          <Box key={rowIndex} className={styles.row}>
            {row.map((cell, colIndex) => (
              <Box
                key={colIndex}
                className={styles.cell}
                style={{
                  color: cell === "X" ? "red" : "blue",
                }}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Box>
        {winner && (
          <Heading
            as={"h1"}
            style={{ color: winner === "Draw" ? "red" : "green" }}
          >
            {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </Heading>
        )}
        {winner === "Draw" && (
          <Button onClick={handleRestart}>Play Again</Button>
        )}
      </Box>
    </Box>
  );
};
