import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './mid.css';

function Mid() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchStudentProgress = async () => {
      const studentId = localStorage.getItem("studentId");
      if (!studentId) {
        setStep(1);
        setProgress(0);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/student/${studentId}`);
        const student = response.data;

        const hasPersonality =
          Array.isArray(student?.personalityScores) &&
          student.personalityScores.length === 4 &&
          Boolean(student?.personalityType);

        const hasPreferences =
          Boolean(student?.preferences?.food) &&
          Boolean(student?.preferences?.time) &&
          Boolean(student?.preferences?.room) &&
          Boolean(student?.preferences?.study) &&
          Boolean(student?.preferences?.social);

        if (hasPersonality && hasPreferences) {
          setStep(2);
          setProgress(100);
        } else if (hasPersonality) {
          setStep(2);
          setProgress(50);
        } else {
          setStep(1);
          setProgress(0);
        }
      } catch (err) {
        console.error("Failed to load student progress", err);
        setStep(1);
        setProgress(0);
      }
    };

    fetchStudentProgress();
  }, []);

  return (
    <div>
      <Header />

      <section className="prev-mid-hero">
        <h1 style={{ color: "#22c55e", fontSize: "42px", marginBottom: "20px" }}>
          Welcome to Smart Room Allocation
        </h1>
        <div className="step-indicator">
          <span className={step === 1 ? "active-step" : ""}>Step 1: Personality Test</span>
          <span className={step === 2 ? "active-step" : ""}>Step 2: Preferences</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "45px" }}>
          <div className="prev-mid-hero-up">
            <h1>Discover Your Own Personality</h1>
            <p>
              Answer a short set of questions to understand your preferences, strengths, and compatibility.
              This helps us allocate rooms where you’ll feel comfortable and thrive during your stay.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                navigate("/Personality");
              }}
            >
              Start Personality Test
            </button>
          </div>
          <div className="prev-mid-hero-up">
            <h1>Select Your Room Preferences</h1>
            <p>
              Choose your preferred room type, food preferences, studytime preferences, music ones , amenities, and lifestyle options.
              We’ll match these with your personality profile to suggest the best fit for you.
            </p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                setStep(2);
                navigate("/Preference");
              }}
            >
              Set Preferences
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Mid;