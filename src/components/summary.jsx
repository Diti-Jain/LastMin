import React, { useState } from 'react';
import './summary.css';

function App() {
  const [quizQuestions, setQuizQuestions] = useState(null);

  const generateQuiz = () => {
    setQuizQuestions([
      { question: 'What is the main focus of the SmartMoms app?', answer: 'Mental health support for mothers during and after pregnancy' },
      { question: 'Which country does the app have a special focus on?', answer: 'India' },
      { question: 'What are some features offered by the app?', answer: 'Guided meditation, exercise tips, heartwarming stories' },
    ]);
  };

  return (
    <div className="app-body">
      <div className="app-wrapper">
        <h1>Summary</h1>
        <p className="app-paragraph">
          1. Introduce your idea in brief - Many moms face mental struggles...
          {/* truncated content for brevity */}
        </p>
        <button onClick={generateQuiz} className="app-button">
          Generate Quiz
        </button>
        {quizQuestions && (
          <div>
            <h2 className="app-quiz-title">Quiz Questions</h2>
            <ul className="app-quiz-list">
              {quizQuestions.map((q, index) => (
                <li key={index} className="app-quiz-item">
                  <strong>{q.question}</strong> - {q.answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
