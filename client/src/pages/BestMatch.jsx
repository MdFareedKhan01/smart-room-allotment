import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './bestMatch.css'

function BestMatch() {
  const navigate = useNavigate();
  const [matchData, setMatchData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchMatch = async () => {
      const studentId = localStorage.getItem("studentId");
      if (!studentId) {
        alert("Not logged in");
        navigate("/login");
        return;
      }
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:5000/best-match/${studentId}`
        );
        setMatchData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to find matches. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMatch();
  }, [navigate]);
  
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
  
  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Finding your best match...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div className="error-container">
          <h2>{error}</h2>
          <button className="primary-btn-home" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!matchData) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div className="loading-container">
          <p>No data available</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (matchData?.message && !matchData?.match) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div className="no-match-container">
          <h2>{matchData.message}</h2>
          <button className="primary-btn-home" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0f172a' }}>
      <Header />
      <section className="dash-body-best">
        <div className="card-ro">
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
      <Footer />
    </div>
  );
}

export default BestMatch;