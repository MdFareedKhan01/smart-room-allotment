import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div>
    <nav className="navbar-home">
        <div className="logo-home">smartRootAllotment</div>

        <div className="nav-links-home">
            <button className="primary-btn-home" onClick={() => navigate("/SignUp")}>  Sign Up</button>
            <button className="primary-btn-home" onClick={() => navigate("/Login")}>  login</button>
            <img src="https://jmicoe.in/images/jmi-logo.jpg"
                     alt="profile card" />
        </div>
    </nav>
    <section className="hero">

        <div className="hero-left">
            <h1>Congratulations!!<br />You are selected for Hostel</h1>
            <p>
                sign up and opt for room allocation
            </p>

            <div className="hero-buttons">
                <button className="primary-btn-home" onClick={() => navigate("/SignUp")}>  Sign Up</button>
                <button className="primary-btn-home" onClick={() => navigate("/Login")}>  login</button>

            </div>
        </div>

        <div className="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
        <div className="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
        <div className="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
    </section>
    <section class="steps">
    <h2>4 Steps to Your Perfect Flatmate</h2>
    <div class="step">
        <div class="step-number">01</div>
        <div class="step-content">
            <h3>Create Your Profile</h3>
            <p>
                Sign up for free and tell us about yourself: your lifestyle, schedule,
                cleanliness preferences, social habits, and what you're looking for
                in a flatmate.
            </p>

            <div class="tags">
                <span>Set your budget range</span>
                <span>Answer personality questions</span>
                <span>Upload verified photo</span>
                <span>Describe ideal living situation</span>
            </div>
        </div>
    </div>
    <div class="step">
        <div class="step-number">02</div>
        <div class="step-content">
            <h3>Smart Matching</h3>
            <p>
                Our algorithm analyzes compatibility factors to find flatmates
                you'll actually enjoy living with.
            </p>

            <div class="tags">
                <span>Personality compatibility</span>
                <span>Schedule alignment</span>
                <span>Budget matching</span>
                <span>Language preferences</span>
            </div>
        </div>
    </div>

    <div class="step">
        <div class="step-number">03</div>
        <div class="step-content">
            <h3>Connect & Chat</h3>
            <p>
                Browse matches, see compatibility scores, and start chatting
                with potential flatmates through secure messaging.
            </p>
        </div>
    </div>

</section>
    <footer className="footer">
        <div className="footer-container">

            <div className="footer-column">
                <h3>Stay Connected</h3>
                <div className="social-icons">
                    <a href="#">Facebook</a>
                    <a href="#">YouTube</a>
                </div>
                <p>Jamia Millia Islamia</p>
            </div>

            <div className="footer-column">
                <h3>Navigate JMI</h3>
                <ul>
                    <li><a href="#">jmi.ac.in</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Guidelines for Filling</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Find out more</h3>
                <ul>
                    <li><a href="#">Old Question paper-All</a></li>
                    <li><a href="#">Payment method</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Important links</h3>
                <ul>
                    <li><a href="#">Admin</a></li>
                </ul>
            </div>

        </div>

        <div className="footer-bottom">
            © 2017 All Rights Reserved Jamia Millia Islamia.
        </div>
    </footer>
    </div>
  );

}

export default Home;