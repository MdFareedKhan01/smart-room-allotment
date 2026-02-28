import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./personality.css";
import {calculateMBTI} from "./Comp"
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (groupIndex !== 3){
      return;
    }
    if (answers.includes(null)) {
      console.log(e);
      alert("Please answer all questions");
      return;
    }
    console.log("Collected answers:", answers);
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
      alert("User not logged in");
      return;
    }
  const result = calculateMBTI(answers);
  try {
    await axios.post("http://localhost:5000/submit-personality", {
      studentId,
      scores: Object.values(result.scores),
      type: result.type
    });

    navigate("/Mid");

  } catch (err) {
    console.error(err);
  }
  };
  const start = groupIndex * 4;
  const end = start + 4;
  const visibleQuestions = questions.slice(start, end);

  return (
    <div>
      <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>
        <div className="nav-links-home">
          <HomeIcon sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }}
            onClick={() => {
              // Reset step when user clicks Home (new login)
              // setStep(1);
              localStorage.setItem("step", "1");
              navigate("/");
            }}/>
            <AccountCircleIcon sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }} onClick={() => navigate("/Dashboard")}  />
      <LogoutIcon onClick={() => {
                                localStorage.removeItem("studentId");
                                // setIsLoggedIn(false);
                                navigate("/");
                                window.location.reload();
                            }} sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }} />
          <img
            src="https://jmicoe.in/images/jmi-logo.jpg"
            alt="profile card"
          />
        </div>
      </nav>
    <div className="bodyparent">

      <div className="container-personality">
        <div className="card full-width">
          <h2>Personality Test</h2>
          <p>Answer the following 16 questions to discover your personality type</p>

          <div className="question-form">
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
                <button type="submit" className="primary-btn" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

       <footer className="footer">
        <div className="footer-container">

          <div className="footer-column">
            <h3>Stay Connected</h3>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
            <p>Jamia Millia Islamia</p>
          </div>

          <div className="footer-column">
            <h3>Navigate JMI</h3>
            <ul>
              <li><a href="#">jmi.ac.in</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Hostel Guidelines</a></li>
              <li><a href="#">Campus Map</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Find out more</h3>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Old Question Papers</a></li>
              <li><a href="#">Payment Methods</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Apply Now</a></li>
              <li><a href="#">Check Allocation Status</a></li>
              <li><a href="#">Admin</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 All Rights Reserved Jamia Millia Islamia.
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Personality;