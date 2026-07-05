# 🎯 Quiz Master - Online Quiz Game

A fully interactive web-based quiz game built with vanilla HTML, CSS, and JavaScript. Test your knowledge with engaging questions and get instant feedback!

## ✨ Features

- **Interactive Quiz Interface**: Smooth, responsive design with beautiful animations
- **10 Diverse Questions**: Topics covering geography, science, history, and literature
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Navigation**: Move between questions freely with Previous/Next buttons
- **Instant Results**: Detailed score breakdown with question-by-question review
- **Performance Feedback**: Personalized messages based on your score
- **Mobile Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Professional transitions and hover effects

## 📁 Project Structure

```
online-quiz/
├── index.html      # Main HTML structure
├── styles.css      # Comprehensive styling and animations
├── script.js       # Quiz game logic and functionality
├── quiz-data.js    # Quiz questions database
└── README.md       # Documentation
```

## 🎮 How to Play

1. **Start the Quiz**: Click the "Start Quiz" button on the welcome screen
2. **Answer Questions**: Select one option from the available choices
3. **Navigate**: Use Previous/Next buttons to move between questions
4. **Submit**: Click Submit on the last question to view your results
5. **Review Results**: See your score and review all answers
6. **Retake**: Click "Retake Quiz" to start over

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, Gradients, and Animations
- **Vanilla JavaScript**: No frameworks or dependencies required

## 🎨 Design Features

- **Modern Gradient Background**: Purple to pink gradient
- **Clean UI**: Minimalist design with good contrast
- **Smooth Animations**: Slide-in effects and transitions
- **Progress Visualization**: Real-time progress bar
- **Score Circle**: Visual score display with gradient
- **Detailed Feedback**: Question-by-question result review

## 📊 Scoring System

- **100%**: Perfect! You're a quiz master! 🏆
- **80-99%**: Excellent! You did great! 🌟
- **60-79%**: Good job! Keep practicing! 💪
- **40-59%**: Not bad! Study a bit more! 📚
- **Below 40%**: Don't worry! Try again! 🔄

## 🚀 Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start taking the quiz!

## 📝 Customization

### Adding More Questions
Edit `quiz-data.js` and add new question objects to the `quizData` array:

```javascript
{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 1  // Index of correct answer (0-based)
}
```

### Changing Colors
Modify the gradient colors in `styles.css`. Look for:
- `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`
- Change hex color codes to your preferred colors

### Customizing Messages
Edit the score messages in `script.js` in the `showResults()` function.

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 💡 Tips for Use

- Questions are randomized based on your navigation
- Your answers are saved as you move between questions
- You can review and change answers before submitting
- Results show both your answers and correct answers
- Perfect for studying, testing, or entertainment

## 📈 Future Enhancements

- Add categories/difficulty levels
- Implement timed questions
- Add user profiles and leaderboards
- Include image and video questions
- Add sound effects
- Save quiz progress
- Export results as PDF

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork this project and submit improvements!

---

**Made with ❤️ using HTML, CSS, and JavaScript**
