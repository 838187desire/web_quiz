const questionElement = document.getElementById("question");
const ansBtns = document.getElementById("ansBtn");
const nextBtn = document.getElementById("nextBtn");

const explanationElement = document.getElementById("explanation");
const previousButton = document.getElementById("prevBtn");
const doubtButton = document.getElementById("doubtBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next <i class='fa-solid fa-angles-right '></i>";
  if(currentQuestionIndex == 0){
    prevBtn.style.display = "none";
  }
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
  doubtButton.style.display = "none";
  const complainBox = document.getElementById("complain_box");
      if (complainBox) {
        complainBox.remove();  // Remove the existing complain box
      }
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
  doubtButton.style.display = "block";
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

//for doubt section
//const doubtButton = document.getElementById("doubtBtn");

if (doubtButton) {
  doubtButton.addEventListener("click", () => {
    // Check if the complain box already exists in the document
    let existingComplainBox = document.getElementById("complain_box");
    
    if (existingComplainBox) {
      // If the box exists, toggle its display (show/hide)
      if (existingComplainBox.style.display === 'none' || existingComplainBox.style.display === '') {
          existingComplainBox.style.display = 'block';
      } else {
          existingComplainBox.style.display = 'none';
      }
    } else {
      // If the box does not exist, create and append it for the first time
      createComplainBox();
    }
  });
}

// Function to create and append the complain box
function createComplainBox() {
  const quizContainer = document.querySelector(".quiz");
  if (!quizContainer) {
      console.error('Quiz container not found!');
      return;
  }

  // CREATE THE COMPLAIN BOX HERE INSTEAD OF GLOBALLY
  const complainBox = document.createElement("div");
  complainBox.id = "complain_box";
  complainBox.style.display = 'block'; // Make it visible on creation

  const heading1 = document.createElement("h3");
  heading1.innerHTML = "To complain about this question you have to provide some information like:";
  complainBox.appendChild(heading1);

  const heading2 = document.createElement("h4");
  heading2.innerHTML = "1. Quiz name and quiz number";
  complainBox.appendChild(heading2);

  const heading3 = document.createElement("h4");
  heading3.innerHTML = "2. Question number";
  complainBox.appendChild(heading3);

  const heading4 = document.createElement("h4");
  heading4.innerHTML = "3. Screenshot of the question in which you have doubt";
  complainBox.appendChild(heading4);

  const heading5 = document.createElement("h4");
  heading5.innerHTML = "4. Write your doubt";
  complainBox.appendChild(heading5);

  const heading6 = document.createElement("h4");
  heading6.innerHTML = 'To complain about the question you have to click on <u>complain</u> button, it will redirect to a whatsapp chat where you can send information';
  complainBox.appendChild(heading6);

  const complainButton = document.createElement("button");
  complainButton.innerHTML = "Complain";

  complainButton.onclick = function () {
      window.location.href = "https://wa.me/message/UTAYXAFE2W3JG1";
  };
  
  complainBox.appendChild(complainButton);

  // Append the newly created complain box to the quiz container
  quizContainer.appendChild(complainBox);
}
startQuiz();
