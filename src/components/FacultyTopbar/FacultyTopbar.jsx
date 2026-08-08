import "./FacultyTopbar.css";
import logo from "../../assets/logo1.jpeg";

import { FaBell, FaBars } from "react-icons/fa";

function FacultyTopbar({ sidebarOpen, setSidebarOpen }) {

  return (
    <header className="topbar">

      {/* Left */}
      <div className="top-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        <h2 className="portal-title">
          Faculty Portal
        </h2>

      </div>

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

export default FacultyTopbar;