const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 5 + 7?",
    choices: ["10", "12", "14"],
    answer: "12"
  },
  {
    category: "Geography",
    question: "What is the capital of Kenya?",
    choices: ["Nairobi", "Mombasa", "Kisumu"],
    answer: "Nairobi"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language"
    ],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(
    Math.random() * questionsArray.length
  );

  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(
    Math.random() * choicesArray.length
  );

  return choicesArray[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
