import "./Topbar.css";
import logo from "../../assets/logo1.jpeg";

import { FaBell, FaBars } from "react-icons/fa";

function Topbar({ sidebarOpen, setSidebarOpen }) {
  const student = JSON.parse(localStorage.getItem("student"));
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

        <h2 className="portal-title">Student Portal</h2>
      </div>

      {/* Right */}
      <div className="user-section">
        <div className="notification">
          <FaBell />
        </div>

        <div className="profile">
          <img src={logo} alt="Profile" className="profile-img" />
        </div>
        <div className="profile-info">
        <h4>{student?.fullName}</h4>
        <p>Student</p>
      </div>

      </div>
    </header>
  );
}

export default Topbar;
