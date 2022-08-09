import React from 'react';

function QuestionBox({database, counter, gameState, validateAnswer}) {
  return (
    <div id="q_and_a">
        <p id="question">{database[counter].question}</p>
        <div id="options">
            <button
            id="opt_a"
            className="options"
            onClick={() => {
                validateAnswer("a");
            }}
            disabled={gameState ? true : false}
            style={{
                backgroundColor: gameState
                ? database[counter].answer === "a"
                    ? "green"
                    : ""
                : "",
                cursor: gameState ? "not-allowed" : "",
            }}
            >
            {database[counter].options[0]}
            </button>
            <button
            id="opt_b"
            className="options"
            onClick={() => {
                validateAnswer("b");
            }}
            disabled={gameState ? true : false}
            style={{
                backgroundColor: gameState
                ? database[counter].answer === "b"
                    ? "green"
                    : ""
                : "",
                cursor: gameState ? "not-allowed" : "",
            }}
            >
            {database[counter].options[1]}
            </button>
            <button
            id="opt_c"
            className="options"
            onClick={() => {
                validateAnswer("c");
            }}
            disabled={gameState ? true : false}
            style={{
                backgroundColor: gameState
                ? database[counter].answer === "c"
                    ? "green"
                    : ""
                : "",
                cursor: gameState ? "not-allowed" : "",
            }}
            >
            {database[counter].options[2]}
            </button>
            <button
            id="opt_d"
            className="options"
            onClick={() => {
                validateAnswer("d");
            }}
            disabled={gameState ? true : false}
            style={{
                backgroundColor: gameState
                ? database[counter].answer === "d"
                    ? "green"
                    : ""
                : "",
                cursor: gameState ? "not-allowed" : "",
            }}
            >
            {database[counter].options[3]}
            </button>
        </div>
    </div>
  )
}

export default QuestionBox;