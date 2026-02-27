import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './home.css'

function Home() {
  const navigate = useNavigate();
  const [items, setItems]=useState([]);

  
  useEffect(() => {
    const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/');
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchItems();
  }, []);

  return (
    <div>
    <nav class="navbar">
        <div class="logo">Yet_to_decide</div>

        <div class="nav-links">
            <button className="primary-btn" onClick={() => navigate("/signup")}>  Sign Up</button>
            <button className="primary-btn" onClick={() => navigate("/loign")}>  login</button>
            <img src="https://jmicoe.in/images/jmi-logo.jpg"
                     alt="profile card" />
        </div>
    </nav>
    <section class="hero">
        <div class="hero-left">
            <h1>Congratulaion!!<br />You are selected for Hostel</h1>
            <p>
                sign up and opt for room allocation
            </p>

            <div class="hero-buttons">
                <button className="primary-btn" onClick={() => navigate("/Personality")}>  Sign Up</button>
                <button className="primary-btn" onClick={() => navigate("/loign")}>  login</button>

            </div>
        </div>

        <div class="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
        <div class="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
        <div class="hero-right">
            <img src="https://r1.ilikewallpaper.net/pic/202004/ana-de-armas-hollywood-reporter-4k-91735-1242x2688_640.jpg"
                 alt="profile card" />
        </div>
    </section>

    <footer class="footer">
        <div class="footer-container">

            <div class="footer-column">
                <h3>Stay Connected</h3>
                <div class="social-icons">
                    <a href="#">Facebook</a>
                    <a href="#">YouTube</a>
                </div>
                <p>Jamia Millia Islamia</p>
            </div>

            <div class="footer-column">
                <h3>Navigate JMI</h3>
                <ul>
                    <li><a href="#">jmi.ac.in</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Guidelines for Filling</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Find out more</h3>
                <ul>
                    <li><a href="#">Old Question paper-All</a></li>
                    <li><a href="#">Payment method</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h3>Important links</h3>
                <ul>
                    <li><a href="#">Admin</a></li>
                </ul>
            </div>

        </div>

        <div class="footer-bottom">
            © 2017 All Rights Reserved Jamia Millia Islamia.
        </div>
    </footer>
    </div>
  );

}

export default Home;