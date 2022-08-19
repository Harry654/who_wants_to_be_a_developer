const fetchQuestions = () => {
    return(
        [
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
                "alert('Hello world!'). In the code above, 'Hello world' is the?",
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
              options: ["Building UI", "Improving speed", "Asynchronous handling", "Smart typing"],
              answer: "a"
            },
            {
              question: "JavaScript is a(n) ?",
              options: ["Compiled language", "Interpreted language", "Strongly typed", "Non-programming language"],
              answer: "b"
            },
            {
              question: "What is the error code for bad request?",
              options: ["500", "404", "400", "200"],
              answer: "c"
            },
            {
              question: "Whai is the order of execution of the following?  1. constructor 2. componentDidMount 3. render",
              options: ["3 2 1", "1 3 2", "2 3 1", "3 1 2"],
              answer: "b"
            },
            {
              question: "Props is location in memory",
              options: ["True", "Not sure", "False", "None of the above"],
              answer: "c"
            },
            {
              question: "What company invented ReactJS?",
              options: ["Fakebook", "Google", "Alibaba", "Facebook"],
              answer: "d"
            }
          ]
    );
}
export default fetchQuestions;