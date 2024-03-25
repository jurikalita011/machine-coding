# Puzzle Ground

## Introduction
This project consists of three different games: an Interactive Light-Up Puzzle, an Interactive Storybook, and Tic-Tac-Toe with an Undo feature and Move History. The Interactive Light-Up Puzzle challenges users to turn off all the lights in a circle, the Interactive Storybook provides a simple way to navigate through a story, and Tic-Tac-Toe offers a classic game with added functionality.

## Project Type
Frontend

## Deplolyed App
Frontend: [Puzzle-Ground](https://machine-coding-jk03.vercel.app/)

 ## Directory Structure
```bash
 machine-coding/
├─ src/
│  ├─ allRoutes
│  │  ├─ MainRoutes.jsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ InteractiveStorybook.jsx
│  │  ├─ LightUpPuzzle.jsx
│  │  ├─ Navbar.tsx
│  │  ├─ TicTacToe.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  ├─ App.js
│  ├─ index.js
├─ public/
│  ├─ index.html
├─ README.md
├─ package-lock.json
├─ package.json
```

## Features
### Light-Up Puzzle
* Circular arrangement of light bulbs.
* Clicking toggles the state of bulbs and its immediate neighbors.
* Random initial state with the task to turn off all lights.
* Move counter tracking.
### Interactive Storybook
* Simple UI with "Next" and "Previous" buttons.
* Display area showing text and images for storytelling.
* Sequential navigation through the story.
* Looping back to the beginning after reaching the end.
### Tic-Tac-Toe with Undo Feature and Move History
* Classic 3x3 grid gameplay.
* Two-player mode with turn tracking.
* Ability to undo moves.
* Display of move history.
* Win/draw detection.
* Restart functionality.

## design decisions or assumptions
* Circular layout for the Interactive Light-Up Puzzle.
* Assumed linear storytelling for the Interactive Storybook.
* Standard Tic-Tac-Toe rules with additional features for undo and move history.

## Installation & Getting started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   
2. **Change into the project directory:**
   ```bash
   cd <project-directory>
   
3. **Install dependencies:**
   ```bash
   npm install
   
4. **Start the development server:**
   ```bash
   npm run start

The app will be running on `http://localhost:3000/`.

## Usage
* Open the provided URLs for the deployed apps.
* Follow on-screen instructions to play the games.
* Solve the Light-Up Puzzle by toggling lights.
* Navigate the Interactive Storybook with "Next" and "Previous" buttons.
* Play Tic-Tac-Toe with the classic rules and additional features.


## Technology Stack
Frontend: HTML, CSS, JavaScript, React.js
