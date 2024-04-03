import React from "react";
import lightImg from "../assets/light-up.png";
import storyBookImg from "../assets/story-book.png";
import ticTacToeImg from "../assets/tic-tac-toe.png";
import { Link } from "react-router-dom";
import { Box, Heading, Image } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

export const Home = () => {
  const images = [
    { img: lightImg, path: "/lightup" },
    { img: storyBookImg, path: "/story" },
    { img: ticTacToeImg, path: "/tictactoe" },
  ];
  return (
    <Box className={styles.container}>
      <Heading as={"h1"}>Puzzle Ground</Heading>
      <Box>
        {images?.map((el, i) => {
          return (
            <Link to={el.path}>
              <Image key={i} src={el.img} alt="error" />
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
