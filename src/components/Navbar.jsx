import { Box } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  return (
    <Box className="navCont">
      <Link to={"/"} className={location.pathname === "/" ? "current" : ""}>
        Home
      </Link>
      <Link
        to={"/lightup"}
        className={location.pathname === "/lightup" ? "current" : ""}
      >
        Light Up Puzzle
      </Link>
      <Link
        to={"/story"}
        className={location.pathname === "/story" ? "current" : ""}
      >
        Interactive Storybook
      </Link>
      <Link
        to={"/tictactoe"}
        className={location.pathname === "/tictactoe" ? "current" : ""}
      >
        Tic-Tac-Toe
      </Link>
    </Box>
  );
};
