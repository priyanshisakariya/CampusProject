import "./Topbar.css";
import logo from "../../assets/logo1.jpeg";
import { FaBell } from "react-icons/fa";

function Topbar() {
  return (
    <header className="topbar">

      {/* Left */}
      <div className="project-name">
        
      </div>

      {/* Center */}
      <h2 className="portal-title">
        Student Portal
      </h2>

      {/* Right */}
      <div className="user-section">

        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">

          <img
            src={logo}
            alt="Profile"
            className="profile-img"
          />

          <div className="profile-info">
            <h4>Priyanshi Sakariya</h4>
            <p>Student</p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;