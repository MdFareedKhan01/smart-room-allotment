import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './mid.css';

function Mid() {
  const navigate = useNavigate();

  // Initialize step from localStorage, default to 1
  const [step, setStep] = useState(() => {
    return parseInt(localStorage.getItem("step")) || 1;
  });

  // Reset step to 1 when Mid mounts (new user login scenario)
  useEffect(() => {
    if (!localStorage.getItem("step")) {
      setStep(1);
      localStorage.setItem("step", "1");
    }
  }, []);

  return (
    <div>
      <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>
        <div className="nav-links-home">
          <button
            className="primary-btn-home"
            onClick={() => {
              // Reset step when user clicks Home (new login)
              setStep(1);
              localStorage.setItem("step", "1");
              navigate("/");
            }}
          >
            Home
          </button>
          <img
            src="https://jmicoe.in/images/jmi-logo.jpg"
            alt="profile card"
          />
        </div>
      </nav>

      <section className="prev-mid-hero">
        <h1 style={{ color: "#22c55e", fontSize: "42px", marginBottom: "20px" }}>
          Welcome to Smart Room Allocation
        </h1>

        {/* Step Indicator */}
        <div className="step-indicator">
          <span className={step === 1 ? "active-step" : ""}>Step 1: Personality Test</span>
          <span className={step === 2 ? "active-step" : ""}>Step 2: Preferences</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: step === 1 ? "50%" : "100%" }}
          ></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "45px" }}>
          <div className="prev-mid-hero-up">
            <h1>Discover Your Personality</h1>
            <p>
              Answer a short set of questions to understand your preferences, strengths, and compatibility. 
              This helps us allocate rooms where you’ll feel comfortable and thrive during your stay.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setStep(2);
                localStorage.setItem("step", "2");
                navigate("/Personality");
              }}
            >
              Start Personality Test
            </button>
          </div>
          <div className="prev-mid-hero-up">
            <h1>Select Your Room Preferences</h1>
            <p>
              Choose your preferred room type, food preferences, studytime preferences, music ones , amenities, and lifestyle options. 
              We’ll match these with your personality profile to suggest the best fit for you.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setStep(2);
                localStorage.setItem("step", "2");
                navigate("/Preference");
              }}
            >
              Set Preferences
            </button>
          </div>
        </div>
      </section>

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
  );
}

export default Mid;