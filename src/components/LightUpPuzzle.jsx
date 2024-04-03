import React, { useState } from "react";
import { Box, Heading, useToast } from "@chakra-ui/react";
import styles from "../styles/LightUpPuzzle.module.css";

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
  const toast = useToast();

  const toggleBulb = (index) => {
    const newBulbs = [...bulbs];
    newBulbs[index] = !newBulbs[index];
    newBulbs[(index + 1) % size] = !newBulbs[(index + 1) % size];
    newBulbs[(index - 1 + size) % size] = !newBulbs[(index - 1 + size) % size];
    setBulbs(newBulbs);
    setMoves((prev) => prev + 1);
    if (newBulbs.every((bulb) => !bulb)) {
      toast({
        title: "Congratulations!",
        description: `You solved the puzzle in ${moves + 1} moves.`,
        status: "success",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
      // alert(`Congratulations! You solved the puzzle in ${moves + 1} moves.`);
      resetGame();
    }
  };

  const resetGame = () => {
    setMoves(0);
    setBulbs(initializeBulbs());
  };

  return (
    <Box className={styles.bulbContainer}>
      <Heading as="h1" mb={4}>
        Moves: {moves}
      </Heading>
      <Box display="flex" justifyContent="center">
        {bulbs.map((bulb, index) => (
          <Box
            key={index}
            className={`${styles.bulb} ${bulb ? styles.on : styles.off}`}
            onClick={() => toggleBulb(index)}
            borderWidth="1px"
            borderRadius="md"
            cursor="pointer"
            p={4}
            mx={2}
          >
            {index + 1}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
