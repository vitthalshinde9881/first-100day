import React, { useState } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState("menu"); // Initial game state is "menu"
  const [score, setScore] = useState(0); // Initialize score

  return (
    <div className='App'>
      <h1>Quiz App</h1>

      {/* Provide gameState, setGameState, score, and setScore to child components using context */}
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {/* Conditional rendering based on the value of gameState */}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>  
  );
}

export default App;
