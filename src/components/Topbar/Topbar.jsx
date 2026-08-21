import "./Topbar.css";
import logo from "../../assets/logo1.jpeg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBell, FaBars } from "react-icons/fa";

function Topbar({ sidebarOpen, setSidebarOpen }) {

  const location = useLocation();

  const [student, setStudent] = useState(() => {
    const savedStudent = localStorage.getItem("student");

    return savedStudent ? JSON.parse(savedStudent) : null;
  });

  useEffect(() => {

    const params = new URLSearchParams(location.search);

    const googleLogin = params.get("googleLogin");
    const name = params.get("name");
    const email = params.get("email");

    if (googleLogin === "true" && name && email) {

      const googleStudent = {
        fullName: name,
        email: email
      };

      // Save Google student
      localStorage.setItem(
        "student",
        JSON.stringify(googleStudent)
      );

      // Update Topbar immediately
      setStudent(googleStudent);

      // Remove Google parameters from URL
      window.history.replaceState(
        {},
        document.title,
        "/student-portal"
      );
    }

  }, [location]);

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
          Student Portal
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
        </div>

        <div className="profile-info">

          <h4>
            {student?.fullName || "Student"}
          </h4>

          <p>Student</p>

        </div>

      </div>

    </header>
  );
}

export default Topbar;