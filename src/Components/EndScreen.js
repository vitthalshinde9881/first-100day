import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css";

function EndScreen() {
    // Correctly destructure score, setScore, and setGameState
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0); // Reset the score
        setGameState("menu"); // Change the game state back to "menu"
    };

    return (
        <div>
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3> {/* Display score out of total questions */}
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    );
}

export default EndScreen;
