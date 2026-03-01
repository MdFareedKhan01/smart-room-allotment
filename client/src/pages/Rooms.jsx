import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./rooms.css"
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Header />
    <div className="rooms-container">
      <div className="rooms-header">
        <h2>All Hostel Rooms</h2>
        <p className="rooms-subtitle">Total Rooms: {rooms.length}</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <div key={room._id} className="room-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="room-header">
              <div className="room-number">Room {room.roomNumber}</div>
              <div className="room-badge">{room.students.length} Students</div>
            </div>
            <div className="students-list">
              {room.students.map((student, idx) => (
                <div key={student._id} className="student-item">
                  <div className="student-avatar">{student.name.charAt(0).toUpperCase()}</div>
                  <div className="student-info">
                    <div className="student-name">{student.name}</div>
                    {student.personalityType && (
                      <div className="student-personality">{student.personalityType}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {rooms.length === 0 && (
        <div className="no-rooms-message">
          <p>No rooms assigned yet</p>
        </div>
      )}

      <div className="admin-actions">
        <button className="exit-admin-btn" onClick={handleExit}>
          Exit Admin Panel
        </button>
      </div>
    </div>
   <Footer />
    </div>
  );
}

export default Rooms;