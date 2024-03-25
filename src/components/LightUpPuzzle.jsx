import React, { useState } from "react";

export const LightUpPuzzle = () => {
  const size = 5;

  const initializeBulbs = () => {
    const newBulbs = [];
    for (let i = 0; i < size; i++) {
      newBulbs.push(Math.random() < 0.5);
    }
    return newBulbs;
  };

  const [bulbs, setBulbs] = useState(initializeBulbs());
  const [moves, setMoves] = useState(0);

  const toggleBulb = (index) => {
    const newBulbs = [...bulbs];
    newBulbs[index] = !newBulbs[index];
    newBulbs[(index + 1) % size] = !newBulbs[(index + 1) % size];
    newBulbs[(index - 1 + size) % size] = !newBulbs[(index - 1 + size) % size];
    setBulbs(newBulbs);
    setMoves((prev) => prev + 1);
    if (newBulbs.every((bulb) => !bulb)) {
      alert(`Congratulations! You solved the puzzle in ${moves + 1} moves.`);
      resetGame();
    }
  };

  const resetGame = () => {
    setMoves(0);
    setBulbs(initializeBulbs());
  };
  // console.log(bulbs);
  return (
    <div className="bulb-container">
      <h1>Moves : {moves}</h1>
      <div>
        {bulbs.map((bulb, index) => (
          <div
            key={index}
            className={`bulb ${bulb ? "on" : "off"}`}
            onClick={() => toggleBulb(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
