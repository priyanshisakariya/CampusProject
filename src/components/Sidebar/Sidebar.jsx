import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../assets/logo1.jpeg";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCalendarAlt,
  FaFolderOpen,
  FaAward,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
   <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <img
          src={logo}
          alt="CampusProject Logo"
          className="sidebar-logo"
        />

        <h2 className="sidebar-title">
          CampusProject
        </h2>
      </div>

      {/* Navigation */}
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

      {/* Logout */}
      <div className="logout-area">
        <NavLink to="/">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>
      </div>

    </aside>
  );
}

export default Sidebar;