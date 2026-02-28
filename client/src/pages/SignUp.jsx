import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./signUp.css";
import HomeIcon from '@mui/icons-material/Home';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      console.log("Saved:", response.data);
      navigate("/Login")
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bodyparent-s">
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
              localStorage.setItem("step", "1");
              navigate("/");
            }}/>
          <img
            src="https://jmicoe.in/images/jmi-logo.jpg"
            alt="profile card"
          />
        </div>
      </nav>

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
                placeholder="Confirm Password"
                required
              />
              <span className="toggle-btn">Show</span>
            </div>

            <div className="error" id="errorMsg"></div>

            <button
              type="submit"
              className="primary-btn"
              id="submitBtn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;