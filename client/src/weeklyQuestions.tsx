import { useState } from "react";
import "./styles/questions.css";

const RandomQuestion = () => {
  const weeklyQuestions = [
    "What was the highlight of your week?",
    "What challenges did you face this week?",
    "What are you most grateful for this week?",
    "What's something new you learned?",
    "What's one thing you'd like to improve next week?",
    "What is one thing you did this week that made you proud?",
    "What mistake did you make this week, and what did you learn from it?",
    "How did you step out of your comfort zone this week?",
    "What's one thing you wish you had done differently this week?",
    "Did you try anything new this week? How did it go?",
    "What stressed you out the most this week, and how did you handle it?",
    "When did you feel most at peace this week?",
    "What's one thing you're looking forward to next week?",
    "What's one little thing that made this week special?",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    return weeklyQuestions[Math.floor(Math.random() * weeklyQuestions.length)];
  });

  const getNewQuestion = () => {
    let newQuestion;
    do {
      newQuestion =
        weeklyQuestions[Math.floor(Math.random() * weeklyQuestions.length)];
    } while (newQuestion === currentQuestion);
    setCurrentQuestion(newQuestion);
  };

  return (
    <div className="random-question-container">
      <h2>Need help reflecting?</h2>
      <p>
        Sometimes it's hard to know where to start when journaling. These
        questions are here to guide your thoughts and help you reflect on your
        week.
      </p>
      <h2>
        Reflect on this: <strong>{currentQuestion}</strong>
      </h2>
      <button onClick={getNewQuestion}>Show me another question</button>
    </div>
  );
};

export default RandomQuestion;
