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
        <div className="logo-home">RoomEngine</div>

        <div className="nav-links-home">
            {!isLoggedIn?(
                        <div className="hero-buttons">
            <LoginIcon sx={{
        color: '#22c55e',
        '&:hover': {
          backgroundColor: '#0f766e', // Use pseudo-selectors
        },
      }} onClick={() => navigate("/Login")}  />
                            
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
            <button className="primary-btn-home" style={{backgroundColor:"rgb(138 71 222)"}} onClick={handleShowRooms}>
                Show Hostel Rooms
            </button>
        </div>
      )}
    
  </div>

  <div className="hero-right stats-panel">
    <h2 className="stats-title">Why RoomEngine?</h2>
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

export default Home;