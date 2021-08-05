console.log("Here we go!");
var body = document.body;
var screen = 0;
var correct = 0;
var incorrect = 0;
var clock = document.getElementById("clock");
var secondsLeft = 20;
var allDone = false;

//  I seem to be having issues with the stats obj. Console.log keeps returning null so I think there could be a datatype issue.
var stats = {
  correct: localStorage.getItem(correct),
  incorrect: localStorage.getItem(incorrect),
};

// create the elements for the start page
var startCard = document.createElement("div");
var startWelcome = document.createElement("h1");
var startDir = document.createElement("h3");
var startButton = document.createElement("button");

// create the elements for the questions and answers
var questionText = document.createElement("h1");
var opt1 = document.createElement("button");
var opt2 = document.createElement("button");
var opt3 = document.createElement("button");
var opt4 = document.createElement("button");

var card = document.getElementById("card");

var congrats = document.createElement("h1");
var right = document.createElement("p");
var wrong = document.createElement("p");
var initials = document.createElement("input");
var initialsText = document.createElement("p");
var initialsSubmit = document.createElement("button");

var titleHS = document.createElement("h1");
var name1HS = document.createElement("h2");
var name2HS = document.createElement("h2");
var name3HS = document.createElement("h2");
var name4HS = document.createElement("h2");
var name5HS = document.createElement("h2");

var pos1 =
  localStorage.getItem("initials") +
  localStorage.getItem("correct") +
  localStorage.getItem("incorrect");

// Text for the front/into page
var welcome = "Welcome to the Coding Quiz Challenge.";
var directions =
  "Answer the following questions as quickly as you can. But beware, when you click Begin, a timer will start. When you answer a question incorrectly, it will take precious time off the clock. When the clock reaches 0, your challenge is over. Good Luck!";

// append them to the DOM or else they wont show up on the page!!
body.appendChild(startCard);
card.appendChild(startCard);
startCard.appendChild(startWelcome);
startCard.appendChild(startDir);
startCard.appendChild(startButton);

// add text content to the new elements
startDir.textContent = directions;
startWelcome.textContent = welcome;
startButton.textContent = "Begin";

// style the startcard div
startCard.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; justify-content: center;"
);

// style the welcome message text
startWelcome.setAttribute(
  "style",
  "font-size:25px; text-align:center; color: black"
);

// Style the directions text
startDir.setAttribute(
  "style",
  "font-size:18px; text-align:center; color: black"
);

// style the start button
startButton.setAttribute("style", "font-size:18px; color: black");

// listen for click on the BEGIN button
startButton.addEventListener("click", monkeyFunk);

startButton.addEventListener("click", function () {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    clock.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of action at setinterval
      clearInterval(timerInterval);
      console.log("about to fire");
      timesUp();
      console.log("fired");
      console.log(allDone);
    }
  }, 1000);
});

initialsSubmit.addEventListener("click", function () {
  var x = initials.value;
  localStorage.setItem("Initials", x);

  congrats.remove();
  right.remove();
  wrong.remove();
  initialsText.remove();
  initialsSubmit.remove();
  initials.remove();
});

function dispHighScore() {
  card.appendChild(titleHS);
  card.appendChild(name1HS);
  card.appendChild(name2HS);
  card.appendChild(name3HS);
  card.appendChild(name4HS);
  card.appendChild(name5HS);

  titleHS.textContent("High Scores!");
  name1HS.textContent(pos1);
  name2HS.textContent(pos2);
  name3HS.textContent(pos3);
  name4HS.textContent(pos4);
  name5HS.textContent(pos5);
}

function timesUp() {
  if ((allDone = false)) {
    questionText.remove();
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();
    var message = document.createElement("h1");
    var right = document.createElement("p");
    var wrong = document.createElement("p");
    card.appendChild(message);
    card.appendChild(right);
    card.appendChild(wrong);
    message.textContent = "TIME'S UP!";
    right.textContent = "correct: " + correct;
    wrong.textContent = "incorrect: " + incorrect;
  } else {
    return;
  }
}

// question objects attached to the screen variable as the code iterates
var question1 = {
  question: "What is the largest planet in the Solar System?",
  a: "Earth",
  b: "Jupiter",
  c: "Neptune",
  d: "Saturn",
  answer: "Jupiter",
};

var question2 = {
  question: "What is the smallest planet in the Solar System?",
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
// array of quesiton objs
var questionPool = [question1, question2, question3, question4];

// FUNKtion that checks to see what iteration thru the code we are at (screen), and if at the first round clear out the welcome page code, build the DOM with declared variables and placetext into new elements by referencing the questionpool array obj data. ELSE...
function monkeyFunk() {
  event.preventDefault();
  if (screen === 0) {
    console.log(screen);
    startWelcome.remove();
    startDir.remove();
    startCard.remove();
    console.log(screen);

    // arranges elements on the page
    card.appendChild(questionText);
    card.appendChild(opt1);
    card.appendChild(opt2);
    card.appendChild(opt3);
    card.appendChild(opt4);

    questionText.textContent = questionPool[screen].question;
    opt1.textContent = questionPool[screen].a;
    opt2.textContent = questionPool[screen].b;
    opt3.textContent = questionPool[screen].c;
    opt4.textContent = questionPool[screen].d;

    // if not the first round, replace text in the elements with questionPool
  } else if (screen < questionPool.length) {
    questionText.textContent = questionPool[screen].question;
    opt1.textContent = questionPool[screen].a;
    opt2.textContent = questionPool[screen].b;
    opt3.textContent = questionPool[screen].c;
    opt4.textContent = questionPool[screen].d;
  } else {
    //   need a quiz complete screen where you can enter your intials.
    allDone = true;

    questionText.remove();
    opt1.remove();
    opt2.remove();
    opt3.remove();
    opt4.remove();

    card.appendChild(congrats);
    card.appendChild(right);
    card.appendChild(wrong);
    card.appendChild(initials);
    card.appendChild(initialsSubmit);
    card.appendChild(initialsText);
    congrats.textContent = "Congratulations!";
    right.textContent = "correct:       " + correct;
    wrong.textContent = "incorrect:     " + incorrect;
    initialsText.textContent =
      "Type your initials into the field and click submit";
    initialsSubmit.textContent = "SUBMIT";
    initialsSubmit.setAttribute("Style", "width: 100px; margin-top: 10px");

    secondsLeft = 0;
    clock.remove();
    return;
  }
}
//     console.log(stats);
//     return;
//   }

console.log(screen);

// style the card that holds the questions and answers
card.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: flex-start; max-width: 25%"
);
console.log(stats);

//   event listeners for each button. They have if statements attached. If text in the button you press matches text in the questionpool object "answer", the answer is correct, add 1 to the correct var, the screen variable, local storage, and restart monkeyFUNK. If the text doesnt match, do the opposite and restart MF.
opt1.addEventListener("click", function () {
  if (opt1.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    monkeyFunk();
  } else {
    incorrect++;
    screen++;
    secondsLeft = secondsLeft - 3;
    localStorage.setItem("incorrect", incorrect);
    monkeyFunk();
  }
});

opt2.addEventListener("click", function () {
  if (opt2.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    monkeyFunk();
  } else {
    incorrect++;
    screen++;
    secondsLeft = secondsLeft - 3;
    localStorage.setItem("incorrect", incorrect);
    monkeyFunk();
  }
});

opt3.addEventListener("click", function () {
  if (opt3.textContent === questionPool[screen].answer) {
    console.log(screen);
    correct++;
    console.log(screen);
    screen++;
    console.log(screen);
    localStorage.setItem("correct", correct);
    console.log(screen);
    monkeyFunk();
  } else {
    console.log(screen);
    incorrect++;
    console.log(screen);
    screen++;
    secondsLeft = secondsLeft - 3;
    console.log(screen);
    localStorage.setItem("incorrect", incorrect);
    console.log(screen);
    monkeyFunk();
  }
});

opt4.addEventListener("click", function () {
  if (opt4.textContent === questionPool[screen].answer) {
    correct++;
    screen++;
    localStorage.setItem("correct", correct);
    monkeyFunk();
  } else {
    incorrect++;
    screen++;
    secondsLeft = secondsLeft - 3;
    localStorage.setItem("incorrect", incorrect);
    monkeyFunk();
  }
});

// OLD
// // function to write the text to the page
// function populatePage() {

//   return stats;
// }

//   how do i listen for a button clicked and validate whether or not it matches the "answer" in the object?

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
