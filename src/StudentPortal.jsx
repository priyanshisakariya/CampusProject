import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./StudentPortal.css";
import logo from "./assets/logo1.jpeg";

import {
  FaBars,
  FaHome,
  FaUser,
  FaFileAlt,
  FaCalendarAlt,
  FaFolderOpen,
  FaAward,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

function StudentPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="portal">

      {/* Sidebar */}

      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>

        <div className="sidebar-header">

          <img
            src={logo}
            alt="Logo"
            className="sidebar-logo"
          />

          <h2>CampusProject</h2>

        </div>

        <nav className="sidebar-menu">

          <NavLink
            to="/student-portal"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/student-portal/profile"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaUser />
            <span>My Profile</span>
          </NavLink>

          <NavLink
            to="/student-portal/proposal"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaFileAlt />
            <span>Submit Proposal</span>
          </NavLink>

         
          <NavLink
  to="/student-portal/weekly-progress"
  className={({ isActive }) =>
    isActive ? "active" : ""
  }
>
  <FaCalendarAlt />
  <span>Weekly Progress</span>
</NavLink>

          <NavLink
            to="/student-portal/report"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaFolderOpen />
            <span>Final Submission</span>
          </NavLink>

          <NavLink
            to="/student-portal/marks"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaAward />
            <span>My Marks</span>
          </NavLink>

          <NavLink
            to="/student-portal/notification"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <FaBell />
            <span>Notifications</span>
          </NavLink>

        </nav>

        <div className="logout-area">

          <NavLink to="/">

            <FaSignOutAlt />

            <span>Logout</span>

          </NavLink>

        </div>

      </aside>

      {/* Main */}

      <div className="main">

        {/* Topbar */}

        <header className="topbar">

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

          <div className="user-section">

            <div className="notification">

              <FaBell />

            </div>

            <div className="profile">

              <img
                src={logo}
                alt="Profile"
              />

              <div>

                <h4>Priyanshi Sakariya</h4>

                <p>Student</p>

              </div>

            </div>

          </div>

        </header>

        {/* Page */}

        <main className="content">

          <Outlet />

        </main>

      </div>

    </div>
  );
}

export default StudentPortal;