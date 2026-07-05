// Quiz Game Logic
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// Initialize the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(quizData.length).fill(null);
    
    showScreen('quizScreen');
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizData[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = quizData.length;
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Load options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            label.classList.add('selected');
        }
        
        label.innerHTML = `
            <input type="radio" name="option" value="${index}" ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
            <span>${option}</span>
        `;
        
        label.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(label);
    });
    
    // Update button states
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').textContent = currentQuestion === quizData.length - 1 ? 'Submit' : 'Next';
}

// Select an option
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === index);
        option.querySelector('input[type="radio"]').checked = i === index;
    });
}

// Next question
function nextQuestion() {
    if (currentQuestion === quizData.length - 1) {
        // Submit quiz
        calculateScore();
        showResults();
    } else {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            loadQuestion();
        }
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Calculate score
function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
}

// Show results screen
function showResults() {
    showScreen('resultsScreen');
    document.getElementById('finalScore').textContent = score;
    
    // Generate score message
    const percentage = (score / quizData.length) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = "Perfect! You're a quiz master! 🏆";
    } else if (percentage >= 80) {
        message = "Excellent! You did great! 🌟";
    } else if (percentage >= 60) {
        message = "Good job! Keep practicing! 💪";
    } else if (percentage >= 40) {
        message = "Not bad! Study a bit more! 📚";
    } else {
        message = "Don't worry! Try again! 🔄";
    }
    
    document.getElementById('scoreMessage').textContent = message;
    
    // Generate detailed results
    const resultsDetails = document.getElementById('resultsDetails');
    resultsDetails.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const userAnswer = userAnswers[index] !== null ? question.options[userAnswers[index]] : 'Not answered';
        const correctAnswer = question.options[question.correct];
        
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <div class="result-item-title">Q${index + 1}: ${isCorrect ? '✓' : '✗'} ${question.question}</div>
            <div class="result-item-subtitle">
                Your answer: <strong>${userAnswer}</strong><br>
                ${!isCorrect ? `Correct answer: <strong>${correctAnswer}</strong>` : ''}
            </div>
        `;
        resultsDetails.appendChild(resultItem);
    });
}

// Restart quiz
function restartQuiz() {
    showScreen('welcomeScreen');
}

// Show specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Initialize welcome screen on page load
document.addEventListener('DOMContentLoaded', () => {
    showScreen('welcomeScreen');
});
