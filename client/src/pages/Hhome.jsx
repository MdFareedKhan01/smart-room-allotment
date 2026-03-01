import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './home.css'

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stats, setStats] = useState({ count1: 0, count2: 0 });
  const navigate = useNavigate();
  
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const statsPanel = document.querySelector('.stats-panel');
    if (!statsPanel) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsPanel);
    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);

      setStats({
        count1: Math.floor(120 * progress),
        count2: Math.floor(60 * progress)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  };

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
    <div className="home-container">
    <Header />
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
        <div className="stat-value">{stats.count1}+</div>
        <div className="stat-label">students matched in our demo data</div>
      </div>

      <div className="stat-item">
        <div className="stat-value">{stats.count2}%</div>
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

    <section className="steps">
    <h2>4 Steps to Your Perfect Flatmate</h2>
    <div className="step">
        <div className="step-number">01</div>
        <div className="step-content">
            <h3>Create Your Profile</h3>
            <p>
                Sign up for free and tell us about yourself: your lifestyle, schedule,
                cleanliness preferences, social habits, and what you're looking for
                in a flatmate.
            </p>

            <div className="tags">
                <span>Set your budget range</span>
                <span>Answer personality questions</span>
                <span>Upload verified photo</span>
                <span>Describe ideal living situation</span>
            </div>
        </div>
    </div>
    <div className="step">
        <div className="step-number">02</div>
        <div className="step-content">
            <h3>Smart Matching</h3>
            <p>
                Our algorithm analyzes compatibility factors to find flatmates
                you'll actually enjoy living with.
            </p>

            <div className="tags">
                <span>Personality compatibility</span>
                <span>Schedule alignment</span>
                <span>Budget matching</span>
                <span>Language preferences</span>
            </div>
        </div>
    </div>

    <div className="step">
        <div className="step-number">03</div>
        <div className="step-content">
            <h3>Connect & Chat</h3>
            <p>
                Browse matches, see compatibility scores, and start chatting
                with potential flatmates through secure messaging.
            </p>
            <div className="tags">
                <span>No Doubt</span>
                <span>Schedule Meet</span>
                <span>Planning</span>
                <span>Harmony</span>
            </div>
        </div>
    </div>

</section>
    <Footer />
    </div>
  );

}

export default Home;