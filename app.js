const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-quiz');

const questions = [
    {
        question: "What planet is known as the red planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the capital of Punjab?",
        options: ["Chandigarh", "Attari", "Amritsar", "Haryana"],
        answer: "Chandigarh"
    },
    {
        question: "What is the primary gas that makes up the atmosphere of Mars?",
        options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide"
    },
    {
        question: "What is the capital city of France?",
        options: ["Madrid", "Paris", "Rome", "Berlin"],
        answer: "Paris"
    },
];

let currentIdx = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentIdx];

    const questionText = document.getElementById('question-text');
    questionText.textContent = currentQuestion.question;

    document.getElementById('q-num').textContent = currentIdx + 1;
    document.getElementById('q-total').textContent = questions.length;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;

        btn.addEventListener('click', () => {
    const allButtons = optionsContainer.querySelectorAll('button');

    if (option === currentQuestion.answer) {
        btn.style.backgroundColor = 'green';
        score++;
    } else {
        btn.style.backgroundColor = 'red';

        allButtons.forEach(b => {
            if (b.textContent === currentQuestion.answer) {
                b.style.backgroundColor = 'green';
            }
        });
    }

    allButtons.forEach(b => {
        b.disabled = true;
    });
});

        optionsContainer.appendChild(btn);
    });
}

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    loadQuestion();
});

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => {
    currentIdx++;

    if (currentIdx < questions.length) {
        loadQuestion();
    } else {
        quizScreen.style.display = 'none';
        resultScreen.style.display = 'flex';
        document.getElementById('result-score').textContent = score + " / " + questions.length;
    }
});

const retryBtn = document.getElementById('retry-btn');

retryBtn.addEventListener('click', () => {
    currentIdx = 0;
    score = 0;
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'flex';
    loadQuestion();
});

