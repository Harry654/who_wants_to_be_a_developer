import "./App.css";
import { useState } from "react";
import WelcomeScreen from './components/WelcomeScreen';
import Game from './components/Game';
import fetchQuestions from './components/fetchQuestions';
function App() {
  const [counter, setCounter] = useState(0);
  const [currentPrize, setCurrentPrize] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [time, setTime] = useState(30);
  const [database, setDatabase] = useState(fetchQuestions);
  
  var prizes = [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
    250000, 500000, 1000000
  ];

  let tick = null;
  function fadeOut(target, speed) {
    // fade in effect
    let opacity = 1;
    // alert(opacity);
    let timer = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(timer);
        target.style.visibility = "hidden";
      }
      target.style.opacity = opacity;
      target.style.filter = "alpha(opacity=" + opacity * 100 + ")";

      opacity -= speed;
    }, 100);
  }
  function play_game() {
    let welcome_screen = document.getElementById("welcome-screen");
    welcome_screen.style.display = "none";
    // fadeOut(welcome_screen, 0.07);
    start_timer(validateAnswer);
  }
  function display_question() {
    setCounter((counter) => counter + 1);
    setCurrentPrize(prizes[counter]);
  }
  function validateAnswer(answer) {

    if (answer !== database[counter].answer) {
        clearInterval(tick);

        alert("wrong answer");
        setGameState(true);
        setCurrentPrize(0);
    } else {
        if (counter === database.length - 1) {
            clearInterval(tick);
            // display congrats
            alert("you've won!!");
            setCounter(0);
        } else {
            setTime((time) => 30);
            display_question();
        }
    }
  }
//   function getTime(){return time}
    function start_timer(callback) {
        tick = setInterval(() => {
            setTime((time) => {
            // console.log(time);
                if(time === 0) {
                    callback();
                    console.log(time);
                    return 0;
                }
                return (time -=  1);
            });
        }, 1000);
  }

  function setStyle(prize) {
    if (prize === currentPrize) {
      if (prize === 100 || prize === 32000 || prize === 1000000)
        return { backgroundColor: "green", color: "white" };

      return { backgroundColor: "green", color: "black" };
    }

    return { backgroundColor: "" };
  }

  return (
    <div className="App">
      <WelcomeScreen play_game={play_game} />
      <Game time={time} setStyle={setStyle} database={database} counter={counter} gameState={gameState} validateAnswer={validateAnswer} />
    </div>
  );
}

export default App;
