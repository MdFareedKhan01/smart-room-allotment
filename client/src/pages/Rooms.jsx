import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rooms.css"
import axios from "axios";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

function Rooms() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const access = localStorage.getItem("roomAccess");

    if (access !== "true") {
      alert("Wrong key");
      navigate("/");
      return;
    }

    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/all-rooms"
        );

        setRooms(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRooms();
  }, []);

  const handleExit = () => {
    localStorage.removeItem("roomAccess");
    navigate("/");
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
    <div className="dash-body-best">
    <div className="card-ro">
      <h2>All Hostel Rooms</h2>

      {rooms.map((room) => (
        <div key={room._id}>
          <h3>Room {room.roomNumber}</h3>
          <ul style={{"list-style-type": "none"}}>
            {room.students.map((student) => (
              <li key={student._id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ))}

      <button className="primary-btn-home" style={{marginTop:"6px" , backgroundColor:"#B23B3B"}} onClick={handleExit}>Exit Admin</button>
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

export default Rooms;