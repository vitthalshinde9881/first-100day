import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

function Quiz() {
    const { score, setScore, gameState, setGameState } = useContext(QuizContext); // Added gameState and setGameState to track game status

    const [currQuestion, setCurrQuestion] = useState(0); // Start at the first question
    const [optionChosen, setOptionChosen] = useState(""); // Track chosen option

    const nextQuestion = () => {
        // Check if selected answer is correct and update score
        if (optionChosen === Questions[currQuestion].answer) {
            setScore(score + 1);
        }

        if (currQuestion < Questions.length - 1) {
            setCurrQuestion(currQuestion + 1); // Move to next question
            setOptionChosen(""); // Reset chosen option
        }
    };

    const finishQuiz = () => {
        // Check if selected answer is correct before finishing the quiz
        if (optionChosen === Questions[currQuestion].answer) {
            setScore(score + 1);
        }
        // Change game state to show end screen
        setGameState("endScreen");
    };

    return (
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>
                    {Questions[currQuestion].OptionA}
                </button>
                <button onClick={() => setOptionChosen("B")}>
                    {Questions[currQuestion].OptionB}
                </button>
                <button onClick={() => setOptionChosen("C")}>
                    {Questions[currQuestion].OptionC}
                </button>
                <button onClick={() => setOptionChosen("D")}>
                    {Questions[currQuestion].OptionD}
                </button>
            </div>

            {/* Check if it's the last question */}
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz;
