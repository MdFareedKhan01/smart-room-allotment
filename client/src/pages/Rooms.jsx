import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      <h2>All Hostel Rooms</h2>

      {rooms.map((room) => (
        <div key={room._id}>
          <h3>Room {room.roomNumber}</h3>
          <ul>
            {room.students.map((student) => (
              <li key={student._id}>{student.name}</li>
            ))}
          </ul>
        </div>
      ))}

      <button onClick={handleExit}>Exit Admin</button>
    </div>
  );
}

export default Rooms;