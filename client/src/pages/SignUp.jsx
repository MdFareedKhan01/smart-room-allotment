import { useNavigate } from "react-router-dom";
import "./signUp.css";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="bodyparent">
      <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>
        <div className="nav-links-home">
          <button
            className="primary-btn-home"
            onClick={() => navigate("/")}
          >
            Home
          </button>
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

          <form id="authForm">
            <div className="input-group">
              <input type="text" id="name" placeholder="Name" required />
            </div>

            <div className="input-group">
              <input type="email" id="email" placeholder="Email" required />
            </div>

            <div className="input-group password-toggle">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
              <span className="toggle-btn">Show</span>
            </div>

            <div className="input-group password-toggle">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;