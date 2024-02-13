const questions = [
    {
        question : "In 1768, Captain James Cook set out to explore which ocean?",
        answers : [
            {text:"Pacific Ocean",correct:true},
            {text:"Atlantic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Arctic Ocean",correct:false}
        ]
    },
    {
        question : "What is actually electricity?",
        answers : [
            {text:"A flow of water",correct:false},
            {text:"A flow of air",correct:false},
            {text:"A flow of electrons",correct:true},
            {text:"A flow of atoms",correct:false}
        ]
    },
    {
        question : "Which of the following is not an international organisation?",
        answers : [
            {text:"FIFA",correct:false},
            {text:"NATO",correct:false},
            {text:"ASEAN",correct:false},
            {text:"FBI",correct:true}
        ]
    },
    {
        question : "What is the speed of sound?",
        answers : [
            {text:"120 km/h",correct:false},
            {text:"1,200 km/h",correct:true},
            {text:"400 km/h",correct:false},
            {text:"700 km/h",correct:false}
        ]
    },
    {
        question : "What do we call a newly hatched butterfly?",
        answers : [
            {text:"A moth",correct:false},
            {text:"A butter",correct:false},
            {text:"A caterpillar",correct:true},
            {text:"A chrysalis",correct:false}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetState(); 
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + "." + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
});
}


function resetState() {
nextButton.style.display = "none";
while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
}
}


function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
} else {
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore() {
resetState();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = "Play Again";
nextButton.style.display = "block";
}

function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}

nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handleNextButton();
} else {
    startQuiz();
}
});

startQuiz();