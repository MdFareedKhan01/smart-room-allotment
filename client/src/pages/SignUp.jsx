import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from '../components/Header';
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      );
      console.log("Saved:", response.data);
      navigate("/Login");
    } catch (error) {
      setError(error.response?.data?.error || "Registration failed. Please try again.");
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bodyparent-s">
      <Header />

      <div className="container">
        <div className="card">
          <h2>Create Your Account</h2>
          <p>Sign up to find your perfect roommate match</p>

          <div className="tabs">
            <button id="loginTab" onClick={() => navigate("/Login")}>Login</button>
            <button id="signupTab" className="active" onClick={() => navigate("/SignUp")}>Sign Up</button>
          </div>

          <form id="authForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Name" onChange={handleChange} name="name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" onChange={handleChange} name="email" required />
            </div>

            <div className="input-group password-toggle">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              
              <span className="toggle-btn">Show</span>
            </div>

            <div className="input-group password-toggle">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
              <span className="toggle-btn">Show</span>
            </div>

            {error && <div className="error" style={{ color: "red", marginTop: "10px" }}>{error}</div>}

            <button
              type="submit"
              className="primary-btn"
              id="submitBtn"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;