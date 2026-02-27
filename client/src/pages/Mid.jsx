import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './mid.css';

function Mid() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="prev-mid-navbar">
        <div className="prev-mid-logo">Yet_to_decide</div>

        <div className="prev-mid-nav-links">
          <img
            src="vecteezy_account-icon-sign-symbol-logo-design_6732119.jpg"
            height="50px"
            alt="ddd"
          />
        </div>
      </nav>

      <section className="prev-mid-hero">
        <h1 style={{ color: "#64C34B", fontSize: "48px", marginBottom: "20px" }}>
          Welcome!!
        </h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "45px" }}>
          <div className="prev-mid-hero-up">
            <h1>Take your personality test</h1>
            <p>sign up and opt for room allocation</p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => navigate("/Personality")}
            >
              click
            </button>
          </div>
          <div className="prev-mid-hero-up">
            <h1>Select Your Preferences</h1>
            <p>sign up and opt for room allocation</p>
            <button
              type="button"
              className="primary-btn"
              onClick={() => navigate("/Preference")}
            >
              click
            </button>
          </div>
        </div>
      </section>

      <footer className="prev-mid-footer">
        <div className="prev-mid-footer-container">
          <div className="prev-mid-footer-column">
            <h3>Stay Connected</h3>
            <div className="prev-mid-social-icons">
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
            <p>Jamia Millia Islamia</p>
          </div>

          <div className="prev-mid-footer-column">
            <h3>Navigate JMI</h3>
            <ul>
              <li><a href="#">jmi.ac.in</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Guidelines for Filling</a></li>
            </ul>
          </div>

          <div className="prev-mid-footer-column">
            <h3>Find out more</h3>
            <ul>
              <li><a href="#">Old Question paper-All</a></li>
              <li><a href="#">Payment method</a></li>
            </ul>
          </div>

          <div className="prev-mid-footer-column">
            <h3>Important links</h3>
            <ul>
              <li><a href="#">Admin</a></li>
            </ul>
          </div>
        </div>

        <div className="prev-mid-footer-bottom">
          © 2017 All Rights Reserved Jamia Millia Islamia.
        </div>
      </footer>
    </div>
  );
}

export default Mid;