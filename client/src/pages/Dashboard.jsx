import { useLocation } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const location = useLocation();

  // Data passed from Login, Personality, Preference
  const name = location.state?.name || "Guest";
  const id = location.state?.id || "N/A";
  const personality = location.state?.personality || null;
  const preferences = location.state?.preferences || {};

  // Character sketch generator
  const generateSketch = () => {
    if (!personality) return "No personality data available.";
    const { type } = personality;
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

    // Add flavor from preferences
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
          <p><strong>ID:</strong> {id}</p>
        </section>

        <section className="dash-section">
          <h3>Personality Results</h3>
          {personality ? (
            <>
              <p><strong>Type:</strong> {personality.type}</p>
              <p>
                Scores: EI={personality.scores.EI}, SN={personality.scores.SN}, 
                TF={personality.scores.TF}, JP={personality.scores.JP}
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