import React from "react";
import lightImg from "../assets/light-up.png";
import storyBookImg from "../assets/story-book.png";
import ticTacToeImg from "../assets/tic-tac-toe.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const images = [
    { img: lightImg, path: "/lightup" },
    { img: storyBookImg, path: "/story" },
    { img: ticTacToeImg, path: "/tictactoe" },
  ];
  return (
    <div className="home-container">
      <h1>Puzzle Ground</h1>
      <div>
        {images?.map((el, i) => {
          return (
            <Link to={el.path}>
              <img key={i} src={el.img} alt="error" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
