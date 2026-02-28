import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./preference.css";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
function Preference() {
  const [preferences, setPreferences] = useState({
    food: null,
    time: null,
    room: null,
    study: null,
    social: null,
  });
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setPreferences((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentId = localStorage.getItem("studentId");
    if (!studentId) {
    alert("User not logged in");
    return;
  }
  try {
      await axios.post("http://localhost:5000/submit-preferences", {
        studentId,
        preferences
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
    
  };

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
    <div className="bodyparent-p">
    <div className="pref-body">
      <div className="pref-card">
        <h1>Preference Test</h1>
        <p>Select your lifestyle preferences below</p>

        <form onSubmit={handleSubmit} className="pref-form">
          <div className="pref-block">
            <h4>Food Preference</h4>
            <div className="pref-options">
              <button
                type="button"
                className={preferences.food === "Veg" ? "active" : ""}
                onClick={() => handleChange("food", "Veg")}
              >
                Veg
              </button>
              <button
                type="button"
                className={preferences.food === "Non-Veg" ? "active" : ""}
                onClick={() => handleChange("food", "Non-Veg")}
              >
                Non-Veg
              </button>
            </div>
          </div>

          <div className="pref-block">
            <h4>Preferred Time</h4>
            <div className="pref-options">
              <button
                type="button"
                className={preferences.time === "Morning" ? "active" : ""}
                onClick={() => handleChange("time", "Morning")}
              >
                Morning
              </button>
              <button
                type="button"
                className={preferences.time === "Night" ? "active" : ""}
                onClick={() => handleChange("time", "Night")}
              >
                Night
              </button>
            </div>
          </div>

          <div className="pref-block">
            <h4>Room Type</h4>
            <div className="pref-options">
              <button
                type="button"
                className={preferences.room === "AC" ? "active" : ""}
                onClick={() => handleChange("room", "AC")}
              >
                AC
              </button>
              <button
                type="button"
                className={preferences.room === "Non-AC" ? "active" : ""}
                onClick={() => handleChange("room", "Non-AC")}
              >
                Non-AC
              </button>
            </div>
          </div>


          <div className="pref-block">
            <h4>Study Style</h4>
            <div className="pref-options">
              <button
                type="button"
                className={preferences.study === "Group" ? "active" : ""}
                onClick={() => handleChange("study", "Group")}
              >
                Group
              </button>
              <button
                type="button"
                className={preferences.study === "Solo" ? "active" : ""}
                onClick={() => handleChange("study", "Solo")}
              >
                Solo
              </button>
            </div>
          </div>

          <div className="pref-block">
            <h4>Social Preference</h4>
            <div className="pref-options">
              <button
                type="button"
                className={preferences.social === "Outgoing" ? "active" : ""}
                onClick={() => handleChange("social", "Outgoing")}
              >
                Outgoing
              </button>
              <button
                type="button"
                className={preferences.social === "Reserved" ? "active" : ""}
                onClick={() => handleChange("social", "Reserved")}
              >
                Reserved
              </button>
            </div>
          </div>

          <button type="submit" className="pref-submit" >
            Save Preferences
          </button>
        </form>
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
  );
}

export default Preference;