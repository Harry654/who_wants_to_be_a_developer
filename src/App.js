import "./App.css";
import { useState } from "react";
import logo from "./images/logo.png";
import WelcomeScreen from './components/WelcomeScreen';
import Game from './components/Game';
function App() {
  const [counter, setCounter] = useState(0);
  const [currentPrize, setCurrentPrize] = useState(0);
  const [gameState, setGameState] = useState(false);
  const [time, setTime] = useState(30);

  var database = [
    {
      question: "How is the front page of a website commonly referred to?",
      options: ["Pile page", "Abode page", "Pad Page", "Home page"],
      answer: "d"
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c"
    },
    {
      question: "Which of the following is not a Higher order function?",
      options: ["alert", "filter", "map", "reduce"],
      answer: "a"
    },
    {
      question:
        "The process in which a function is called above it's declaration is known as?",
      options: ["Preemption", "Hoisting", "Preference", "Scoping"],
      answer: "b"
    },
    {
      question:
        "alert('Hello world!');<br />In the code above, 'Hello world' is the",
      options: ["parameter", "argument", "placeholder", "input"],
      answer: "b"
    },
    {
      question: "Asynchronous JavaScript is also known as?",
      options: ["Blocking", "Non-blocking", "Serial", "Unordered"],
      answer: "b"
    },
    {
      question: "Promises are used to ?",
      options: ["Enhance polymorphism", "Avoid callback hell", "Serve Ice cream", "Stop execution",],
      answer: "b"
    },
    {
      question: "Which of the following doesn't work with promises?",
      options: ["then", "catch", "finally", "stop"],
      answer: "d"
    },
    {
      question: "What type of component uses the \"this\" keyword?",
      options: ["Functional", "Dumb", "Class", "Stateless"],
      answer: "c"
    },
    {
      question: "React is primarily made for?",
      options: ["Making better UI", "Improving speed", "Asynchronous handling", "Smart typing"],
      answer: "a"
    },
    {
      question: "JavaScript is a ?",
      options: ["Compiled language", "Interpreted language", "Strongly typed", "Non-programming language"],
      answer: "b"
    },
    {
      question: "What is the error code for bad request?",
      options: ["500", "404", "400", "200"],
      answer: "c"
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c"
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c"
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c"
    }
  ];
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
    let modal_bg = document.getElementById("modal_bg");
    modal_bg.style.display = "none";
    // fadeOut(modal_bg, 0.07);
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
                    return 0;
                }
                return (time -=  1);
            });
        }, 1000);
    }
    // setTimeout(() => {console.log(time)}, 3000)  


  function stop_timer() {
    clearInterval(tick);
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
