const questionElement = document.getElementById("question");
const ansBtns = document.getElementById("ansBtn");
const nextBtn = document.getElementById("nextBtn");

const explanationElement = document.getElementById("explanation");
const previousButton = document.getElementById("prevBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next <i class='fa-solid fa-angles-right '></i>";
  previousButton.innerHTML = "<i class='fa-solid fa-angles-left'></i> Previous";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;



  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    ansBtns.appendChild(button);
  });

  explanationElement.innerHTML = `${currentQuestion.Explanation}`;
  explanationElement.style.display = "none";
}

function resetState() {
  nextBtn.style.display = "none";
  ansBtns.innerHTML = "";
  explanationElement.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

  Array.from(ansBtns.children).forEach(btn => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    btn.disabled = true;
  });

  if (isCorrect) score++;
  nextBtn.style.display = "block";

  explanationElement.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  prevBtn.innerText = "Share with your friends";
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function shareOnWhatsApp() {
  // Construct the URL to share
  const message = encodeURIComponent("Check out this page: https://learnwithprathamesh.in");
  const whatsappUrl = `https://wa.me/?text=${message}`;

  // Redirect the user to WhatsApp's sharing page
  window.location.href = whatsappUrl;
}

// Add event listener to the button
// document.getElementById('whatsappShareBtn').addEventListener('click', shareOnWhatsApp);

function handleNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex > 0) {
    prevBtn.style.display = "block";
  };

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}


nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handlePreviousButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex > 0) {
    showQuestion();
  }
}

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0 && currentQuestionIndex < questions.length) {
    handlePreviousButton();
  } else if(currentQuestionIndex >= questions.length){
    shareOnWhatsApp();
  } else {
    startQuiz();
  }

});

startQuiz();
