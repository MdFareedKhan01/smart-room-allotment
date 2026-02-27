import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./personality.css";

function Personality() {
  const navigate = useNavigate();

  const questions = [
    "I feel energized after spending time with a group",
    "I enjoy being the center of attention",
    "I prefer discussing ideas out loud",
    "I actively seek social interaction",
    "I focus more on practical details than abstract ideas",
    "I prefer clear instructions over open-ended exploration",
    "I rely on real experiences more than imagination",
    "I pay close attention to concrete facts",
    "I make decisions based on logic rather than emotions",
    "I prioritize fairness over personal feelings",
    "I value honesty over maintaining harmony",
    "I analyze problems objectively",
    "I prefer planning ahead rather than being spontaneous",
    "I like having a structured schedule",
    "I feel uncomfortable without clear deadlines",
    "I complete tasks before relaxing"
  ];

  const options = [
    { text: "Strongly Agree", value: 5 },
    { text: "Agree", value: 4 },
    { text: "Neutral", value: 3 },
    { text: "Disagree", value: 2 },
    { text: "Strongly Disagree", value: 1 }
  ];

  const [groupIndex, setGroupIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleNext = () => {
    if (groupIndex < 3) setGroupIndex(groupIndex + 1);
  };

  const handlePrev = () => {
    if (groupIndex > 0) setGroupIndex(groupIndex - 1);
  };

  const handleOptionChange = (qIndex, value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Collected answers:", answers);
    navigate("/Mid",{ state: { answers } });
  };

  const start = groupIndex * 4;
  const end = start + 4;
  const visibleQuestions = questions.slice(start, end);

  return (
    <div className="bodyparent">
      <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>
        <div className="nav-links-home">
          <button className="primary-btn-home" onClick={() => navigate("/")}>
            Home
          </button>
          <img
            src="https://jmicoe.in/images/jmi-logo.jpg"
            alt="profile card"
          />
        </div>
      </nav>

      <div className="container-personality">
        <div className="card full-width">
          <h2>Personality Test</h2>
          <p>Answer the following 16 questions to discover your personality type</p>

          <form className="question-form" onSubmit={handleSubmit}>
            {visibleQuestions.map((q, index) => (
              <div key={start + index} className="question-block">
                <div className="question-text">
                  {start + index + 1}. {q}
                </div>
                <div className="options">
                  {options.map((opt, i) => (
                    <label key={i} className="option-label">
                      <input
                        type="radio"
                        name={`q${start + index}`}
                        value={opt.value}
                        checked={answers[start + index] === opt.value}
                        onChange={() => handleOptionChange(start + index, opt.value)}
                      />
                      {opt.text}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="nav-buttons">
              {groupIndex > 0 && (
                <button type="button" className="secondary-btn" onClick={handlePrev}>
                  Previous
                </button>
              )}
              {groupIndex < 3 ? (
                <button type="button" className="primary-btn" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className="primary-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 SmartMate Personality Test</p>
      </footer>
    </div>
  );
}

export default Personality;