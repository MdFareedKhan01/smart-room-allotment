import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p>RoomEngine • Jamia Millia Islamia</p>
        </div>

        <div className="footer-column">
          <h3>Navigate JMI</h3>
          <ul>
            <li><a href="https://jmi.ac.in" target="_blank" rel="noopener noreferrer">Official Website</a></li>
            <li><a href="#">Courses & Programs</a></li>
            <li><a href="#">Hostel Guidelines</a></li>
            <li><a href="#">Campus Map</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Room Allocation Policies</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Apply for Hostel</a></li>
            <li><a href="#">Check Allocation Status</a></li>
            <li><a href="#">Student Dashboard</a></li>
            <li><a href="#">Admin Login</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 RoomEngine • All Rights Reserved • Jamia Millia Islamia
      </div>
    </footer>
  );
}

export default Footer;
