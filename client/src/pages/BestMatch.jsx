import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './bestMatch.css'

function BestMatch() {
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState(null);
  useEffect(() => {
    const fetchMatch = async () => {
      const studentId = localStorage.getItem("studentId");
      if (!studentId) {
        alert("Not logged in");
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:5000/best-match/${studentId}`
        );
        setMatchData(response.data);
      } catch (err) {
        console.log("failed");
        console.error(err);
      }
    };
    fetchMatch();
  }, []);
  
  if (!matchData) return <div>Finding your best match...</div>;
  console.log(matchData);
  const handleConfirmRoom = async () => {
  try {
    const student1Id = localStorage.getItem("studentId");

    if (!student1Id) {
      alert("User not logged in");
      return;
    }

    if (!matchData) {
      alert("No match selected");
      return;
    }
    const response = await axios.post(
      "http://localhost:5000/confirm-room",
      {
        student1Id,
        student2Id: matchData.match._id,
      }
    );

    alert(`Room ${response.data.roomNumber} assigned successfully!`);

    navigate("/");

  } catch (err) {
    console.error(err);
    alert("Room assignment failed");
  }
};
  if(matchData.message == "No other students available"){
    return (<div>No other students available</div>);
  } 
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
        <section className="dash-body-best">
    <div className="card">
        <h2>Your Best Match</h2>
        <h3>{matchData.match.name}</h3>
        <p>Compatibility: {matchData.compatibilityPercent}%</p>
        <p>Preference Match: {matchData.preferenceMatchScore}/5</p>
        <p>Personality: {matchData.match.personalityType}</p>
        <button className="primary-btn-home" onClick={handleConfirmRoom}>
          Confirm Roommate
      </button>
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

export default BestMatch;