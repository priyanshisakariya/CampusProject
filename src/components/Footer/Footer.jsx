import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>CampusProject</h2>

          <p>
            One Platform for Students, Faculty, and Administrators.
          </p>

          <p>
            Simplifying student project management from proposal
            submission to final evaluation.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Features</a>
        </div>

        <div className="footer-section">
          <h3>Project Modules</h3>

          <p>Student Portal</p>
          <p>Faculty Portal</p>
          <p>Admin Portal</p>
          <p>Project Tracking</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: campusproject@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Rajkot, Gujarat, India</p>
        </div>

      </div>

      <hr />

      <div className="copyright">
        © 2026 CampusProject | All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;