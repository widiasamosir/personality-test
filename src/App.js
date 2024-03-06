import React, { useState } from 'react';
import './App.css';
import Introduction from './Introduction.js'
function App() {
  const questions = [
    {
      question: "When faced with a problem, I tend to:",
      options: ["I dive in and start working on a solution immediately, relying on my logical thinking to guide me.", "I take a step back to analyze the situation carefully, considering various perspectives before taking action."]
    },
    {
      question: "In social situations, I am more likely to:",
      options: ["I enjoy meeting new people and engaging in conversations, often taking the initiative to start discussions.", "I prefer spending time with close friends or alone, engaging in deeper, meaningful conversations."]
    },
    {
      question: "When making decisions, I rely more on:",
      options: ["I rely on logic and reasoning, weighing the pros and cons before making a choice.", "I trust my intuition and feelings, believing they guide me towards the right decision."]
    },
    {
      question: "In a group project, I am usually the one who:",
      options: ["I take charge and delegate tasks, ensuring everyone stays on track and the project progresses smoothly.", "I offer creative ideas and support team harmony, fostering collaboration and ensuring everyone's voices are heard."]
    },
    {
      question: "I feel most energized when:",
      options: ["I accomplish tasks and achieve goals, feeling a sense of satisfaction and accomplishment.", "I engage in creative activities or spend time in nature, feeling inspired and rejuvenated."]
    },
    {
      question: "When facing a challenge, I am more likely to:",
      options: ["I persist until I find a solution, approaching the challenge with determination and perseverance.", "I seek support and advice from others, believing that collaboration and diverse perspectives lead to better outcomes."]
    },
    {
      question: "My ideal weekend involves:",
      options: ["I attend social events and try new activities, enjoying the excitement and spontaneity of exploring new experiences.", "I relax at home with a book, movie, or hobby, cherishing the peace and quiet of my personal space."]
    },
    {
      question: "When it comes to rules and structure, I:",
      options: ["I prefer having clear guidelines and following them, finding comfort in knowing what is expected of me.", "I enjoy flexibility and adaptability, believing that rules should be guidelines rather than strict boundaries."]
    },
    {
      question: "I tend to express myself best through:",
      options: ["I express myself through verbal communication and direct expression, finding it easy to articulate my thoughts and feelings.", "I express myself through artistic endeavors or writing, using creativity as a means of self-expression."]
    },
    {
      question: "When facing criticism, I:",
      options: ["I take it as constructive feedback and look for areas to improve, viewing criticism as an opportunity for growth.", "I feel sensitive and may dwell on it for a while, taking criticism to heart and reflecting deeply on its implications."]
    },
    {
      question: "When learning something new, I prefer:",
      options: ["I prefer structured learning environments with clear instructions and guidelines.", "I prefer exploring and experimenting, learning through trial and error."]
    },
    {
      question: "My approach to time management is:",
      options: ["I prefer to plan my time meticulously, sticking to schedules and deadlines.", "I prefer to go with the flow, adapting to changing circumstances and prioritizing tasks based on urgency."]
    },
    {
      question: "I am more likely to enjoy:",
      options: ["Structured activities with clear objectives and outcomes.", "Open-ended activities where I can explore and create without constraints."]
    },
    {
      question: "When faced with a disagreement, I tend to:",
      options: ["I prefer to address the issue directly and find a resolution through discussion and compromise.", "I prefer to avoid confrontation and may withdraw from the situation until tensions subside."]
    },
    {
      question: "My communication style is best described as:",
      options: ["I am straightforward and to the point, focusing on conveying information clearly and efficiently.", "I am empathetic and attentive, focusing on understanding others' perspectives and feelings."]
    },
    {
      question: "I am more likely to trust:",
      options: ["Evidence and facts based on logical reasoning.", "Intuition and gut feelings based on personal experiences."]
    },
    {
      question: "My ideal work environment is one that:",
      options: ["Is structured and organized, with clear hierarchies and defined roles.", "Is dynamic and flexible, encouraging innovation and adaptability."]
    },
    {
      question: "When facing a setback, I am more likely to:",
      options: ["I analyze the situation to identify possible causes and develop a plan to overcome the obstacle.", "I seek emotional support from others and focus on finding ways to cope with the challenge."]
    },
    {
      question: "I prefer to receive feedback that is:",
      options: ["Direct and straightforward, focusing on areas for improvement and actionable steps.", "Sensitive and considerate, acknowledging strengths and weaknesses in a supportive manner."]
    },
    {
      question: "When working on a project, I tend to focus more on:",
      options: ["The practical aspects and implementation details, ensuring the project meets its objectives.", "The creative aspects and innovative ideas, seeking to explore new possibilities and push boundaries."]
    },
    {
      question: "I am more comfortable with:",
      options: ["Routine and predictability, knowing what to expect and how to plan ahead.", "Variety and spontaneity, embracing change and adapting to new situations."]
    },
  ];
  

  const personalityTypes = {
    A: "Apple",
    B: "Berry",
    C: "Citrus",
    D: "Peach",
    E: "Kiwi"
  };

  const personalityDescriptions = {
    Apple: {
      description: "For those who are outgoing, logical, and organized. You thrive in structured environments and excel at problem-solving.",
      weekdayActivity: "On weekdays, you may benefit from setting clear goals and prioritizing tasks to stay organized and productive. Engage in activities that challenge your intellect and allow you to demonstrate your leadership skills.",
      weekendActivity: "On weekends, consider spending time with friends and family, participating in social events or outdoor activities. Balance your need for relaxation with opportunities for adventure and exploration."
    },
    Berry: {
      description: "Perfect for individuals who are introspective, creative, and empathetic. You value deep connections and enjoy exploring new ideas.",
      weekdayActivity: "On weekdays, take time for introspection and creative pursuits. Engage in activities that inspire you and allow you to express your creativity.",
      weekendActivity: "Use your weekends to immerse yourself in artistic endeavors or spend time in nature. Seek out meaningful connections with loved ones and focus on nurturing your emotional well-being."
    },
    Citrus: {
      description: "Represents those who are enthusiastic and spontaneous, thriving on excitement and new experiences. You enjoy socializing and embracing adventures.",
      weekdayActivity: "During weekdays, inject energy into your tasks and interactions. Seek out opportunities to collaborate with others and tackle new challenges with enthusiasm.",
      weekendActivity: "On weekends, embrace spontaneity and excitement. Explore new places, try new activities, and connect with friends for memorable adventures."
    },
    Peach: {
      description: "Ideal for those who are thoughtful and reserved, valuing deep connections and introspection. You appreciate quiet moments and meaningful conversations.",
      weekdayActivity: "Weekdays are perfect for quiet reflection and focused work. Take time for meaningful conversations with colleagues or loved ones, and prioritize tasks that align with your values.",
      weekendActivity: "Spend your weekends in peaceful settings, enjoying activities that bring you joy and relaxation. Whether it's reading a book, taking a leisurely walk, or spending time with close friends, prioritize self-care and rejuvenation."
    },
    Kiwi: {
      description: "Symbolizes individuals who are innovative and unconventional, challenging norms and embracing uniqueness. You seek out new perspectives and enjoy pushing boundaries.",
      weekdayActivity: "Weekdays are an opportunity for innovation and creativity. Explore new ideas, challenge conventional thinking, and pursue projects that allow you to express your uniqueness.",
      weekendActivity: "Use your weekends to explore unconventional activities and push your boundaries. Whether it's attending a workshop, trying a new hobby, or engaging in thought-provoking discussions, embrace your curiosity and thirst for knowledge."
    }
  };
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({ A: 0, B: 0 });
  const [personalityType, setPersonalityType] = useState(null);
  const [showIntro, setShowIntro] = useState(true); // State to control showing the introduction

  const handleOptionClick = (option,index) => {
    
    const selectedOption = (index === 0) ? "A" : "B";

    setAnswers({ ...answers, [selectedOption]: answers[selectedOption] + 1 });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Determine personality type
      const result = determinePersonalityType(answers);
      setPersonalityType(result);
    }
  };

  const determinePersonalityType = (answers) => {
    const aCount = answers.A;
    const bCount = answers.B;
    if (aCount > bCount) {
      return personalityTypes.A;
    } else if (aCount < bCount) {
      return personalityTypes.B;
    } else {
      switch (aCount + bCount) {
        case 0:
          return null;
        case questions.length:
          return "Balanced";
        case 2:
          return personalityTypes.C;
        case 4:
          return personalityTypes.D;
        case 6:
          return personalityTypes.E;
        default:
          return null;
      }
    }
  };
  const handleStartQuiz = () => {
    setShowIntro(false); // Hide the introduction when starting the quiz
  };

  return (
    <div className="App">
      <h1>Personality Test</h1>
      {showIntro ? (
        <Introduction /> // Show the Introduction component if showIntro is true     
      ) : (
        personalityType ? (
          // Render the result container if personalityType is not null
          <div className="result-container">
            <h2>Your Personality Type: {personalityType}</h2>
            <img src={require(`../src/img/${personalityType.toLowerCase()}.png`)} alt={personalityType} />
            <p><strong>Description:</strong> {personalityDescriptions[personalityType].description}</p>
            <p><strong>Weekday Activities:</strong> {personalityDescriptions[personalityType].weekdayActivity}</p>
            <p><strong>Weekend Activities:</strong> {personalityDescriptions[personalityType].weekendActivity}</p>
          </div>
        ) : (
          // Render the question container if personalityType is null
          <div className="question-container">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <button key={index} onClick={() => handleOptionClick(option,index)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      )}
      {showIntro && (
        <button className="start-button" onClick={handleStartQuiz}>Start Quiz</button> // Button to start the quiz
      )}   
    </div>
  );
}

export default App;
