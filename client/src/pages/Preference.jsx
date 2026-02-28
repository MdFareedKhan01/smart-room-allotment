import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./preference.css";

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
    <div className="pref-body">
      <div className="pref-card">
        <h2>Preference Test</h2>
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
  );
}

export default Preference;