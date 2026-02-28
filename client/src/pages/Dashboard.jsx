import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStudent = async () => {
      const studentId = localStorage.getItem("studentId");
      if (!studentId) {
        console.log("No student ID found");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:5000/student/${studentId}`
        );
        setStudent(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStudent();
  }, []);
  if (!student) return <div>Loading...</div>;

  const name = student.name || "Guest";
  const personality = student.personalityType || null;
  const personalityScores = student.personalityScores || null;
  const preferences = student.preferences || {};
  const email = student.email || "none";

  const generateSketch = () => {
    if (!personality) return "No personality data available.";
    const type  = personality;
    let sketch = `Based on your MBTI type (${type}), you are `;
    switch(type) {
      case "ENTJ":
        sketch += "a natural leader, decisive and strategic, with strong organizational skills.";
        break;
      case "INFJ":
        sketch += "insightful and empathetic, guided by values and a vision for the future.";
        break;
      case "ISTP":
        sketch += "practical, adaptable, and resourceful, thriving in hands-on problem solving.";
        break;
      default:
        sketch += "balanced in your traits, showing flexibility and adaptability across situations.";
    }

    if (preferences.food) {
      sketch += ` You prefer ${preferences.food} food,`;
    }
    if (preferences.time) {
      sketch += ` are more of a ${preferences.time} person,`;
    }
    if (preferences.room) {
      sketch += ` and like ${preferences.room} rooms.`;
    }

    return sketch;
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
    <div className="dash-body">
      <div className="dash-card">
        <h2>Hello {name}</h2>

        <section className="dash-section">
          <h3>User Info</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </section>

        <section className="dash-section">
          <h3>Personality Results</h3>
          {personality ? (
            <>
              <p><strong>Type:</strong> {personality}</p>
              <p>
                <b>Scores</b>:-
                <br></br> 
                <b>EI</b>={personalityScores[0]}
                <br></br> 
                <b>SN</b>={personalityScores[1]}
                <br></br> 
                <b>TF</b>={personalityScores[2]}
                <br></br> 
                <b>JP</b>={personalityScores[3]}
              </p>
            </>
          ) : (
            <p>No personality answers submitted.</p>
          )}
        </section>

        <section className="dash-section">
          <h3>Preferences</h3>
          <ul>
            <li><strong>Food:</strong> {preferences.food || "Not selected"}</li>
            <li><strong>Time:</strong> {preferences.time || "Not selected"}</li>
            <li><strong>Room:</strong> {preferences.room || "Not selected"}</li>
            <li><strong>Study:</strong> {preferences.study || "Not selected"}</li>
            <li><strong>Social:</strong> {preferences.social || "Not selected"}</li>
          </ul>
        </section>

        <section className="dash-section">
          <h3>AI Character Sketch</h3>
          <p>{generateSketch()}</p>
        </section>
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

export default Dashboard;