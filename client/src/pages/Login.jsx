import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.css";
import HomeIcon from '@mui/icons-material/Home';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
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
        "http://localhost:5000/login",
        formData
      );
      console.log(response.data);
      localStorage.setItem("studentId", response.data.studentId);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };  
  return (
    <div className="bodyparent-l">
      <nav className="navbar-home">
        <div className="logo-home">RoomEngine</div>
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
          
        </div>
      </nav>

      <div className="container" >
        <div className="card">
          <h2>Welcome to SmartMate</h2>
          <p>Sign in to find your perfect roommate match</p>

          <div className="tabs">
            <button id="loginTab" className="active" onClick={() => navigate("/Login")}>Login</button>
            <button id="signupTab" onClick={() => navigate("/SignUp")}>Sign Up</button>
          </div>

          <form id="authForm" onSubmit={handleSubmit}>
            <div
              className="input-group"
              id="nameField"
              style={{ display: "none" }}
            >
              <input type="text" id="name" placeholder="Name" />  
            </div>

            <div className="input-group">
              <input type="email" onChange={handleChange} name="email" placeholder="Email" required />
            </div>

            <div className="input-group password-toggle">
              <input
                type="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required
              />
              <span className="toggle-btn">Show</span>
            </div>

            <div className="error" id="errorMsg"></div>

            <button
              type="submit"
              className="primary-btn"
              id="submitBtn"
            >
              Login
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;