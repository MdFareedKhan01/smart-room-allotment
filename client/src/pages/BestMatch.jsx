import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BestMatch() {
  const [matchData, setMatchData] = useState(null);
  const navigate = useNavigate();
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
  if(matchData.message == "No other students available") return <div>No other students available</div>
  return (
    <div>
      <div>
        <h2>Your Best Match</h2>
        <h3>{matchData.match.name}</h3>
        <p>Compatibility: {matchData.compatibilityPercent}%</p>
        <p>Preference Match: {matchData.preferenceMatchScore}/5</p>
        <p>Personality: {matchData.match.personalityType}</p>
      </div>
      <button onClick={handleConfirmRoom}>
          Confirm Roommate
      </button>
    </div>
  );
}

export default BestMatch;