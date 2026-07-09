import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo1.jpeg"; // Change path if needed
function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="CampusProject Logo" />

        <h2>CampusProject</h2>
      </div>

      <nav className="navbar">
        <a href="/">Home</a>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
      </nav>

      <div className="auth-buttons">
        <button className="login-btn" onClick={() => navigate("/student")}>
            Login
        </button>
        <button  className="register-btn"  onClick={() => navigate("/register")}> Register</button>
      </div>
    </header>
  );
}

export default Header;