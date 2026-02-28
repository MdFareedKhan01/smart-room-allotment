import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setIsLoggedIn(true);
    }
  }, []);

const handleShowRooms = () => {
  const key = prompt("Enter admin key:");

  if (key === "HOSTEL2026") {
    localStorage.setItem("roomAccess", "true");
    navigate("/rooms");
  } else {
    alert("Wrong key");
  }
};

  return (
    <div class>
    <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>

        <div className="nav-links-home">
            {!isLoggedIn?(
                        <div className="hero-buttons">
            <LoginIcon sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }} onClick={() => navigate("/Login")}  />
                            <img src="https://jmicoe.in/images/jmi-logo.jpg"
                                alt="profile card" />
                        </div>
                    ):(
                        <div className="nav-links-home">
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
      <img
            src="https://jmicoe.in/images/jmi-logo.jpg"
            alt="profile card"
          />
                        </div>
                      )
            }
            
        </div>
    </nav>
    <section className="hero">
  <div className="hero-left">
    <h1>Congratulations!!<br />You are selected for Hostel</h1>
    <p>Sign up and opt for smart room allocation.</p>

    {!isLoggedIn ? (
        <div className="hero-buttons">
            <button className="primary-btn-home" onClick={() => navigate("/SignUp")}>
                Sign Up
            </button>
            <button className="primary-btn-home" onClick={() => navigate("/Login")}>
                Login
            </button>
        </div>
      ) : (
        <div className="hero-buttons">
            <button className="primary-btn-home" onClick={() => navigate("/Mid")}>
                Take the test
            </button>
            <button className="primary-btn-home" onClick={() => navigate("/best-match")}>
                Find Your Best Match
            </button>
            <button className="primary-btn-home" style={{backgroundColor:"#8753de"}} onClick={handleShowRooms}>
                Show Hostel Rooms
            </button>
        </div>
      )}
    
  </div>

  <div className="hero-right stats-panel">
    <h2 className="stats-title">Why SmartRoomAllotment?</h2>
    <p className="stats-subtitle">
      A smarter, fairer way to allocate hostel rooms at JMI.
    </p>

    <div className="stats-grid">
      <div className="stat-item">
        <div className="stat-value">120+</div>
        <div className="stat-label">students matched in our demo data</div>
      </div>

      <div className="stat-item">
        <div className="stat-value">60%</div>
        <div className="stat-label">projected drop in roommate conflicts</div>
      </div>

      <div className="stat-item">
        <div className="stat-value">Live</div>
        <div className="stat-label">hostel seat tracking and room status</div>
      </div>

      <div className="stat-item">
        <div className="stat-value">AI</div>
        <div className="stat-label">character sketch for every student</div>
      </div>
    </div>
  </div>
</section>

    <section class="steps">
    <h2>4 Steps to Your Perfect Flatmate</h2>
    <div class="step">
        <div class="step-number">01</div>
        <div class="step-content">
            <h3>Create Your Profile</h3>
            <p>
                Sign up for free and tell us about yourself: your lifestyle, schedule,
                cleanliness preferences, social habits, and what you're looking for
                in a flatmate.
            </p>

            <div class="tags">
                <span>Set your budget range</span>
                <span>Answer personality questions</span>
                <span>Upload verified photo</span>
                <span>Describe ideal living situation</span>
            </div>
        </div>
    </div>
    <div class="step">
        <div class="step-number">02</div>
        <div class="step-content">
            <h3>Smart Matching</h3>
            <p>
                Our algorithm analyzes compatibility factors to find flatmates
                you'll actually enjoy living with.
            </p>

            <div class="tags">
                <span>Personality compatibility</span>
                <span>Schedule alignment</span>
                <span>Budget matching</span>
                <span>Language preferences</span>
            </div>
        </div>
    </div>

    <div class="step">
        <div class="step-number">03</div>
        <div class="step-content">
            <h3>Connect & Chat</h3>
            <p>
                Browse matches, see compatibility scores, and start chatting
                with potential flatmates through secure messaging.
            </p>
            <div class="tags">
                <span>No Doubt</span>
                <span>Schedule Meet</span>
                <span>Planning</span>
                <span>Harmony</span>
            </div>
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

export default Home;