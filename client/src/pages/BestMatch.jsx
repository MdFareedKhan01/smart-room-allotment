import { useEffect, useState } from "react";
import axios from "axios";

function BestMatch() {
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
        console.error(err);
      }
    };
    fetchMatch();
  }, []);

  if (!matchData) return <div>Finding your best match...</div>;

  return (
    <div>
      <h2>Your Best Match</h2>

      <h3>{matchData.match.name}</h3>
      <p>Compatibility: {matchData.compatibilityPercent}%</p>
      <p>Preference Match: {matchData.preferenceMatchScore}/5</p>
      <p>Personality: {matchData.match.personalityType}</p>
    </div>
  );
}

export default BestMatch;