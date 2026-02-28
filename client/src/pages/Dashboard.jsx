import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";

function Dashboard() {
  const [student, setStudent] = useState(null);

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
    <div className="dash-body">
      <div className="dash-card">
        <h2>Final Dashboard</h2>

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
  );
}

export default Dashboard;