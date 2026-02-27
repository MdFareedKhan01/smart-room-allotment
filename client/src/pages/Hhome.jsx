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