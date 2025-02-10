// Array to hold all the questions for the game
const questions = [
  {
    category: "Variables", // Category of the question
    question: "What keyword is used to declare a variable in JavaScript?", // The question itself
    answer: "var", // Correct answer
    value: 100 // The point value for this question
  },
  {
    category: "Variables",
    question: "Which keyword is used for creating a constant in JavaScript?",
    answer: "const",
    value: 200
  },
  {
    category: "Variables",
    question: "Which keyword is used for block-scoped variable declarations?",
    answer: "let",
    value: 300
  },
  {
    category: "Functions",
    question: "How do you define a function in JavaScript?",
    answer: "function",
    value: 100
  },
  {
    category: "Functions",
    question: "What is the keyword used to return a value from a function?",
    answer: "return",
    value: 200
  },
  {
    category: "Functions",
    question: "What is an anonymous function in JavaScript?",
    answer: "function without a name",
    value: 300
  },
  {
    category: "Arrays",
    question: "How do you declare an array in JavaScript?",
    answer: "[]",
    value: 100
  },
  {
    category: "Arrays",
    question: "Which method is used to add an element at the end of an array?",
    answer: "push",
    value: 200
  },
  {
    category: "Arrays",
    question: "Which method is used to remove the last element of an array?",
    answer: "pop",
    value: 300
  },
  {
    category: "Variables",
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "== compares values, === compares values and types",
    value: 400
  },
  {
    category: "Functions",
    question: "How do you invoke a function in JavaScript?",
    answer: "by calling its name followed by parentheses",
    value: 400
  },
  {
    category: "Functions",
    question: "What is a callback function?",
    answer: "a function passed into another function as an argument",
    value: 500
  },
  {
    category: "Arrays",
    question: "How do you find the length of an array in JavaScript?",
    answer: "array.length",
    value: 400
  },
  {
    category: "Arrays",
    question: "Which method is used to join all elements of an array into a string?",
    answer: "join",
    value: 500
  },
  {
    category: "Variables",
    question: "What is 'hoisting' in JavaScript?",
    answer: "moving variable and function declarations to the top of their scope",
    value: 500
  }
  // Add 5 more questions to make a total of 20 questions
];

// Initialize game state variables
let score = 0; // User's score
let questionsAnswered = 0; // Number of questions answered correctly
let currentQuestion = null; // Holds the current question object

// Get references to the elements on the page
const scoreDisplay = document.getElementById("score"); // Displays current score
const answeredDisplay = document.getElementById("answered"); // Displays number of questions answered
const questionContainer = document.getElementById("question-container"); // Container to display questions
const questionText = document.getElementById("question-text"); // The actual question text element
const answerInput = document.getElementById("answer-input"); // Input field for the user to enter their answer
const submitAnswerButton = document.getElementById("submit-answer"); // Button to submit the answer
const feedbackDisplay = document.getElementById("feedback"); // Where feedback (correct/incorrect) is shown
const nextQuestionButton = document.getElementById("next-question"); // Button to move to the next question

// Event listener for question buttons (when a user clicks on a question)
document.querySelectorAll(".question-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value; // Get the value of the question clicked (100, 200, etc.)
    const category = e.target.parentElement.dataset.category; // Get the category of the clicked question

    // Find the question that matches the category and value
    currentQuestion = questions.find(q => q.category === category && q.value == value);

    // Call the function to display the question
    showQuestion();
  });
});

// Event listener to check the user's answer when they click the "Submit" button
submitAnswerButton.addEventListener("click", checkAnswer);

// Event listener to move to the next question when the user clicks the "Next Question" button
nextQuestionButton.addEventListener("click", nextQuestion);

// Function to display the current question
function showQuestion() {
  // Display the question text
  questionText.textContent = currentQuestion.question;

  // Show the question container
  questionContainer.classList.remove("hidden");

  // Hide the "Next Question" button until after the answer is submitted
  nextQuestionButton.classList.add("hidden");
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase(); // Get the answer from the input and normalize it
  const correctAnswer = currentQuestion.answer.toLowerCase(); // Normalize the correct answer

  // Check if the user's answer matches the correct answer
  if (userAnswer === correctAnswer) {
    feedbackDisplay.textContent = "Correct!"; // Provide positive feedback
    score += parseInt(currentQuestion.value); // Add the point value of the question to the score
    questionsAnswered++; // Increment the number of questions answered correctly
  } else {
    feedbackDisplay.textContent = `Incorrect! The correct answer is: ${currentQuestion.answer}`; // Provide feedback
  }

  // Update the displayed score and answered count
  scoreDisplay.textContent = score;
  answeredDisplay.textContent = questionsAnswered;

  // Show the "Next Question" button
  nextQuestionButton.classList.remove("hidden");
}

// Function to move to the next question
function nextQuestion() {
  // Hide the question container
  questionContainer.classList.add("hidden");

  // Reset the answer input field
  answerInput.value = '';

  // Clear the feedback message
  feedbackDisplay.textContent = '';
}