import React, { useState } from 'react';

function App() {
  const [quizQuestions, setQuizQuestions] = useState(null);

  const generateQuiz = () => {
    // Replace this with your actual quiz generation logic
    setQuizQuestions([
      { question: 'What is the main focus of the SmartMoms app?', answer: 'Mental health support for mothers during and after pregnancy' },
      { question: 'Which country does the app have a special focus on?', answer: 'India' },
      { question: 'What are some features offered by the app?', answer: 'Guided meditation, exercise tips, heartwarming stories' },
    ]);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <h1>Summary</h1>
      <p>
        1.Introduce your idea in brief - Many moms face mental struggles after giving birth,
        but the help they need is often missing when it matters most - We're building a cozy
        online space for moms, where mental health during and after pregnancy gets the
        spotlight it deserves - Tackling postpartum blues worldwide, with a special focus on
        India's moms, we're turning stats into stories of support-Imagine a digital hug our
        app offers guided meditation, exercise tips, and heartwarming stories to uplift every
        new mom -All this, while ticking off global goals for health, education, and equality
        because happy moms mean a happier world! 2.Does product solve any sdg The web
        application is designed to support important Sustainable Development Goals (SDGs),
        particularly in key areas Goal 17: Partnerships for the Goals by facilitating
        collaboration among healthcare providers, mental health experts, and technology
        developers to create a holistic support ecosystem. Operations: Distribution: The app
        is shared through healthcare providers and social media Sales Strategy: Promotion:
        SmartMoms is promoted by partnering with healthcare providers and using social
        media to reach new mothers User Engagement: The app keeps users engaged by
        offering information and self-screening tools tailored to their needs. Direct-to-
        Consumer (D2C): The app was promoted via social media ads, influencers, and online
        communities focused on new mothers
      </p>
      <button onClick={generateQuiz} style={{ backgroundColor: 'white ', color: 'black', padding: '10px', border: 'none', cursor: 'pointer' }}>
        Generate Quiz
      </button>
      {quizQuestions && (
        <div>
          <h2>Quiz Questions</h2>
          <ul>
            {quizQuestions.map((q, index) => (
              <li key={index}>
                <strong>{q.question}</strong> - {q.answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;