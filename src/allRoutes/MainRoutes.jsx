import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import { LightUpPuzzle } from "../components/LightUpPuzzle";
import { InteractiveStorybook } from "../components/InteractiveStorybook";
import { TicTacToe } from "../components/TicTacToe";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lightup" element={<LightUpPuzzle />} />
      <Route path="/story" element={<InteractiveStorybook />} />
      <Route path="/tictactoe" element={<TicTacToe />} />
    </Routes>
  );
};
