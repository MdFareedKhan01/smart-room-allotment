import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './mid.css';

function Mid() {
  const navigate = useNavigate();
  const [step, setStep] = useState(() => {
  return parseInt(localStorage.getItem("step")) || 1;
});

  return (
    <div>
      <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>
        <div className="nav-links-home">
          <button
            className="primary-btn-home"
            onClick={() => navigate("/")}
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
        <h1 style={{ color: "#64C34B", fontSize: "48px", marginBottom: "20px" }}>
          Welcome!!
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
            <h1>Take your personality test</h1>
            <p>sign up and opt for room allocation</p>
            <button
  type="button"
  className="primary-btn"
  onClick={() => {
    setStep(2);
    localStorage.setItem("step", "2");
    navigate("/Personality");
  }}
>
  Personality
</button>

          </div>
          <div className="prev-mid-hero-up">
            <h1>Select Your Preferences</h1>
            <p>sign up and opt for room allocation</p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => navigate("/Preference")}
            >
              Preference
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
                    <li><a href="#">Guidelines for Filling</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Find out more</h3>
                <ul>
                    <li><a href="#">Old Question paper-All</a></li>
                    <li><a href="#">Payment method</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Important links</h3>
                <ul>
                    <li><a href="#">Admin</a></li>
                </ul>
            </div>

        </div>

        <div className="footer-bottom">
            © 2017 All Rights Reserved Jamia Millia Islamia.
        </div>
    </footer>
    </div>
  );
}

export default Mid;