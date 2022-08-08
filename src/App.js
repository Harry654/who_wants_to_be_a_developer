import "./App.css";
import { useState } from "react";
import logo from './logo.png';
function App() {
  const [counter, setCounter] = useState(0);
  const [currentPrize, setCurrentPrize] = useState(0);
  const [failed, setFailed] = useState(false);
  const [time, setTime] = useState(30);
  var database = [
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "How is the front page of a website commonly referred to?",
      options: ["Pile page", "Abode page", "Pad Page", "Home page"],
      answer: "d",
    },
    {
      question: "Which of yhe following is not a Higher order function?",
      options: ["alert", "filter", "map", "reduce"],
      answer: "a",
    },
    {
      question:
        "The process in which a function is called above it's declaration is known as?",
      options: ["Preemption", "Hoisting", "Preference", "Scoping"],
      answer: "b",
    },
    {
      question:
        "alert('Hello world!');<br />In the code above, 'Hello world' is the",
      options: ["parameter", "argument", "placeholder", "input"],
      answer: "b",
    },
    {
      question: "Asynchronous JavaScript is also known as?",
      options: ["Blocking", "Non-blocking", "Serial", "Unordered"],
      answer: "b",
    },
    {
      question: "Promises are used to ?",
      options: [
        "Enhance polymorphism",
        "Avoid callback hell",
        "Serve Ice cream",
        "Stop execution",
      ],
      answer: "b",
    },
    {
      question: "Which of the following doesn't work with promises?",
      options: ["then", "catch", "finally", "stop"],
      answer: "d",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
    {
      question: "What JavaScript engine is used in Chrome?",
      options: ["Chakra", "Spider Monkey", "V8 Engine", "JavaScriptCore"],
      answer: "c",
    },
  ];
  var prizes = [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
    250000, 500000, 1000000,
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
    // alert("op");
    // fadeOut(modal_bg, 0.07);
    // setTimeout(display_question, 2000);
    start_timer(validate_answer);
    // setTime(90);
    // setTimeout(() => {setTime(20)}, 2000);
  }
  // let counter = 0;
  // let correct_answer = "";
  // let current_prize = 0;
  function display_question() {
    setCounter(counter + 1);
    setCurrentPrize(prizes[counter]);
    // counter += 1;

    // alert(currentPrize);
    // let question = document.getElementById("question");
    // let opt_a = document.getElementById("opt_a");
    // let opt_b = document.getElementById("opt_b");
    // let opt_c = document.getElementById("opt_c");
    // let opt_d = document.getElementById("opt_d");

    // question.innerHTML = database[counter].question;
    // opt_a.innerHTML = "A. " + database[counter].options[0];
    // opt_b.innerHTML = "B. " + database[counter].options[1];
    // opt_c.innerHTML = "C. " + database[counter].options[2];
    // opt_d.innerHTML = "D. " + database[counter].options[3];

    // correct_answer = database[counter].answer;

    // let time_box = document.getElementById("time_box");
    // current_prize = prizes[counter];
    // let selected_prize = document.getElementById("_" + current_prize);
    // selected_prize.style.backgroundColor = "green";
    // let prev_color = selected_prize.style.color;
    // selected_prize.style.color = "black";
    // selected_prize.style.fontWeight = "bolder";

    // if(counter){
    //     let prev_prize = prizes[counter-1];
    //     document.getElementById("_" + prev_prize).style.backgroundColor = "";
    //     document.getElementById("_" + prev_prize).style.color = prev_color;
    //     document.getElementById("_" + prev_prize).style.fontWeight = "";
    // }
  }
  function validate_answer(answer) {
    // stop timer
    stop_timer();
    // start_timer(validate_answer);

    if (answer !== database[counter].answer) {
      // disable buttons
      // document.getElementById("opt_a").setAttribute("disabled", "true");
      // document.getElementById("opt_a").style.cursor = "not-allowed";
      // document.getElementById("opt_b").setAttribute("disabled", "true");
      // document.getElementById("opt_b").style.cursor = "not-allowed";
      // document.getElementById("opt_c").setAttribute("disabled", "true");
      // document.getElementById("opt_c").style.cursor = "not-allowed";
      // document.getElementById("opt_d").setAttribute("disabled", "true");
      // document.getElementById("opt_d").style.cursor = "not-allowed";

      alert("wrong answer");
      setFailed(true);
      setCurrentPrize(0);
      // current_prize = 0;
      // let correct_opt = document.getElementById("opt_" + database[counter].answer);
      // correct_opt.style.backgroundColor = "green";
    } else {
      // duration = 30;
      if (counter === database.length - 1) {
        // display congrats
        alert("you've won!!");
        setCounter(0);
        // counter = 0;
      } else {
        // alert("right answer");
        display_question();
      }
    }
  }
  function start_timer(callback) {
    // let duration = given_duration;
    tick = setInterval(() => {
        // alert(duration);
        // if (duration <= 10) {
        //     time_box.style.fontWeight = "bolder";

        // if(time < 0)
        //     callback()
        // }
        // time_box.innerHTML = duration >= 0 ? duration : 0;
        // time_box.style.color = duration <= 10 ? "red" : "white";
        // duration -= 1;
        setTime(time - 1);
        // timee -= 1;
        // console.log(time);
        // time = (time - 1);
    }, 1000);
  }
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
      <div id="modal_bg">
        <img src={logo} id="logo_1" alt="logo" />

        <h1 id="title_msg">
          Welcome to <br />
          Who Wants To Be A Developer?
        </h1>
        <button
          id="play"
          className="welcome_btns"
          onClick={() => {
            play_game();
          }}
        >
          Play
        </button>
        <button id="help" className="welcome_btns">
          Help
        </button>
      </div>

      <div id="container">
        <div id="grid">
          <div id="empty" className="halves"></div>

          <div id="logo_div" className="halves">
            <img src="./images/logo.png" id="logo" alt="logo" />
            <p id="time_box" style={{ color: time <= 10 ? "red" : "white" }}>
              {time}
            </p>
          </div>

          <div id="prizes" className="halves">
            <p id="_100" className="prizes" style={setStyle(100)}>
              {"1. N100"}
            </p>
            <p id="_200" className="prizes" style={setStyle(200)}>
              {"2. N200"}
            </p>
            <p id="_300" className="prizes" style={setStyle(300)}>
              {"3. N300"}
            </p>
            <p id="_500" className="prizes" style={setStyle(500)}>
              {"4. N500"}
            </p>
            <p id="_1000" className="prizes" style={setStyle(1000)}>
              {"5. N1,000"}
            </p>
            <p id="_2000" className="prizes" style={setStyle(2000)}>
              {"6. N2,000"}
            </p>
            <p id="_4000" className="prizes" style={setStyle(4000)}>
              {"7. N4,000"}
            </p>
            <p id="_8000" className="prizes" style={setStyle(8000)}>
              {"8. N8,000"}
            </p>
            <p id="_16000" className="prizes" style={setStyle(16000)}>
              {"9. N16,000"}
            </p>
            <p id="_32000" className="prizes" style={setStyle(32000)}>
              {"10. N32,000"}
            </p>
            <p id="_64000" className="prizes" style={setStyle(64000)}>
              {"11. N64,000"}
            </p>
            <p id="_125000" className="prizes" style={setStyle(125000)}>
              {"12. N125,000"}
            </p>
            <p id="_250000" className="prizes" style={setStyle(250000)}>
              {"13. N250,000"}
            </p>
            <p id="_500000" className="prizes" style={setStyle(500000)}>
              {"14. N500,000"}
            </p>
            <p id="_1000000" className="prizes" style={setStyle(1000000)}>
              {"15. N1 MILLION"}
            </p>
          </div>

          <div id="q_and_a">
            <p id="question">{database[counter].question}</p>
            <div id="options">
              <button
                id="opt_a"
                className="options"
                onClick={() => {
                  validate_answer("a");
                }}
                disabled={failed ? true : false}
                style={{
                  backgroundColor: failed
                    ? database[counter].answer === "a"
                      ? "green"
                      : ""
                    : "",
                  cursor: failed ? "not-allowed" : "",
                }}
              >
                {database[counter].options[0]}
              </button>
              <button
                id="opt_b"
                className="options"
                onClick={() => {
                  validate_answer("b");
                }}
                disabled={failed ? true : false}
                style={{
                  backgroundColor: failed
                    ? database[counter].answer === "b"
                      ? "green"
                      : ""
                    : "",
                  cursor: failed ? "not-allowed" : "",
                }}
              >
                {database[counter].options[1]}
              </button>
              <button
                id="opt_c"
                className="options"
                onClick={() => {
                  validate_answer("c");
                }}
                disabled={failed ? true : false}
                style={{
                  backgroundColor: failed
                    ? database[counter].answer === "c"
                      ? "green"
                      : ""
                    : "",
                  cursor: failed ? "not-allowed" : "",
                }}
              >
                {database[counter].options[2]}
              </button>
              <button
                id="opt_d"
                className="options"
                onClick={() => {
                  validate_answer("d");
                }}
                disabled={failed ? true : false}
                style={{
                  backgroundColor: failed
                    ? database[counter].answer === "d"
                      ? "green"
                      : ""
                    : "",
                  cursor: failed ? "not-allowed" : "",
                }}
              >
                {database[counter].options[3]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
