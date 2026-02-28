import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './mid.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
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
        <div className="logo-home">RoomEngine</div>
        <div className="nav-links-home">
          <HomeIcon sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }}
            onClick={() => {
              // Reset step when user clicks Home (new login)
              setStep(1);
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
                                setIsLoggedIn(false);
                                navigate("/");
                                window.location.reload();
                            }} sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }} />
          
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
            <h1>Discover Your Own Personality</h1>
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
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>RoomEngine • Jamia Millia Islamia</p>
    </div>

    <div className="footer-column">
      <h3>Navigate JMI</h3>
      <ul>
        <li><a href="https://jmi.ac.in">Official Website</a></li>
        <li><a href="#">Courses & Programs</a></li>
        <li><a href="#">Hostel Guidelines</a></li>
        <li><a href="#">Campus Map</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Resources</h3>
      <ul>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Room Allocation Policies</a></li>
        <li><a href="#">Payment Options</a></li>
        <li><a href="#">Support Center</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Apply for Hostel</a></li>
        <li><a href="#">Check Allocation Status</a></li>
        <li><a href="#">Student Dashboard</a></li>
        <li><a href="#">Admin Login</a></li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 RoomEngine • All Rights Reserved • Jamia Millia Islamia
  </div>
</footer>
    </div>
  );
}

export default Mid;