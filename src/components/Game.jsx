import React from 'react';
import Logo from './Logo';
import QuestionBox from './QuestionBox';
import Timer from './Timer';
import Prizes from './Prizes';
import Moves from './Moves';

function Game({time, setStyle, database, counter, gameState, validateAnswer}) {
  return (
        <div id="game">
            <Moves />
            <div id="logo_div" className="halves">
              <Logo />
              <Timer time={time} />
            </div>
            <Prizes setStyle={setStyle} />
            <QuestionBox database={database} counter={counter} gameState={gameState} validateAnswer={validateAnswer} />
        </div>
  )
}

export default Game;