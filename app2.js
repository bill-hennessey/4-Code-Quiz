console.log("Here we go!");
var body = document.body;
var screen = 0;
console.log(screen);
var correct = 0;
var incorrect = 0;
var stats = {
  correct: localStorage.getItem("correct"),
  incorrect: localStorage.getItem("incorrect"),
};
// creates the empty elements
// create the elements for the start page
var startCard = document.createElement("div");
var startWelcome = document.createElement("h1");
var startDir = document.createElement("h3");
var startButton = document.createElement("button");

var card = document.getElementById("card");

var welcome = "Welcome to the Coding Quiz Challenge.";
var directions =
  "Answer the following questions as quickly as you can. But beware, when you click Begin, a timer will start. When you answer a question incorrectly, it will take precious time off the clock. When the clock reaches 0, your challenge is over. Good Luck!";

// append them to the DOM or else they wont show up on the page!!
body.appendChild(startCard);
startCard.appendChild(startWelcome);
startCard.appendChild(startDir);
startCard.appendChild(startButton);

// add text content to the new elements
startDir.textContent = directions;
startWelcome.textContent = welcome;
startButton.textContent = "Begin";

// style the text and button
startCard.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; justify-content: center;"
);

startWelcome.setAttribute(
  "style",
  "font-size:25px; text-align:center; color: black"
);

startDir.setAttribute(
  "style",
  "font-size:18px; text-align:center; color: black"
);

startButton.setAttribute("style", "font-size:18px; color: black");

// startButton.addEventListener("click", clearPage);
startButton.addEventListener("click", populatePage);

// question objects
var question1 = {
  question: "What is the largest planet in the Solar System?",
  a: "Earth",
  b: "Jupiter",
  c: "Neptune",
  d: "Saturn",
  answer: "Jupiter",
};

var question2 = {
  quesiton: "What is the smallest planet in the Solar System?",
  a: "Mercury",
  b: "Mars",
  c: "Venus",
  d: "Pluto",
  answer: "Mercury",
};

var question3 = {
  question: "What is the closest planet to the Sun?",
  a: "Neptune",
  b: "Earth",
  c: "Mercury",
  d: "Venus",
  answer: "Mercury",
};

var question4 = {
  question: "What is the farthest planet from the Sun?",
  a: "Saturn",
  b: "Jupiter",
  c: "Mars",
  d: "Neptune",
  answer: "Neptune",
};

var questionPool = [question1, question2, question3, question4];
console.log(questionPool);

function clearPage() {
  event.preventDefault();
  if (screen === 0) {
    console.log(screen);
    startWelcome.remove();
    startDir.remove();
    startCard.remove();
    populatePage();
  } else if (screen < questionPool.length) {
    console.log("else if " + screen);
    questionText.remove();
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();
    populatePage();
  } else {
    console.log(stats);
    return;
  }
}

// function to write the text to the page
function populatePage() {
  console.log(screen);
  var questionText = document.createElement("h1");
  var opt1 = document.createElement("button");
  var opt2 = document.createElement("button");
  var opt3 = document.createElement("button");
  var opt4 = document.createElement("button");
  console.log(screen);
  // arranges elements on the page
  card.appendChild(questionText);
  card.appendChild(opt1);
  card.appendChild(opt2);
  card.appendChild(opt3);
  card.appendChild(opt4);

  //   add text to the empty elements

  questionText.textContent = questionPool[screen].question;
  opt1.textContent = questionPool[screen].a;
  opt2.textContent = questionPool[screen].b;
  opt3.textContent = questionPool[screen].c;
  opt4.textContent = questionPool[screen].d;

  card.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: flex-start; max-width: 25%"
  );
  console.log(stats);
  return stats;
}

//   how do i listen for a button clicked and validate whether or not it matches the "answer" in the object?

opt1.addEventListener("click", function () {
  if (opt1.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    clearPage();
    // populatePage();
  } else {
    incorrect++;
    screen++;
    localStorage.setItem("incorrect", incorrect);
    clearPage();
    // populatePage();
  }
});

opt2.addEventListener("click", function () {
  if (opt2.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    clearPage();
    // populatePage();
  } else {
    incorrect++;
    screen++;
    localStorage.setItem("incorrect", incorrect);
    clearPage();
    // populatePage();
  }
});

opt3.addEventListener("click", function () {
  if (opt3.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    clearPage();
    // populatePage();
  } else {
    incorrect++;
    screen++;
    localStorage.setItem("incorrect", incorrect);
    clearPage();
    // populatePage();
  }
});

opt4.addEventListener("click", function () {
  if (opt4.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    //   clearPage();
    populatePage();
  } else {
    incorrect++;
    screen++;
    localStorage.setItem("incorrect", incorrect);
    clearPage();
    // populatePage();
  }
});

// populate the function with arrays or objects? or an array of objects?
// var question1 = {
//   question: "What is your name?",
//   answer1: "Tom",
//   answer2: "Bob",
//   answer3: "Ed",
//   answer4: "Jon",
//   correct: "Tom",
// };

// var allQuestions = [question1; ]

// Timer:
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//   }, 1000);
// }
