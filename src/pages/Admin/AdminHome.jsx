import "./AdminHome.css";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaHandSparkles,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="admin-home">

      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h1 className="dashboard-title">
            Welcome Admin
            <FaHandSparkles className="welcome-icon" />
          </h1>

          <p className="dashboard-subtitle">
            Manage students, mentors and reports from your dashboard.
          </p>
        </div>
      </div>


      {/* Statistics Cards */}
      <div className="dashboard-cards">

        {/* Assigned Students */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/admin-dashboard/assigned-students")}
        >
          <div className="card-icon">
            <FaUserGraduate />
          </div>

          <div className="card-content">
            <h2>25</h2>
            <p>Assigned Students</p>
          </div>
        </div>


        {/* Mentor Assignment */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/admin-dashboard/mentor-assignment")}
        >
          <div className="card-icon">
            <FaChalkboardTeacher />
          </div>

          <div className="card-content">
            <h2>12</h2>
            <p>Mentor Assignment</p>
          </div>
        </div>


        {/* Report */}
        <div
          className="dashboard-card"
          onClick={() => navigate("/admin-dashboard/notifications")}
        >
          <div className="card-icon">
            <FaFileAlt />
          </div>

          <div className="card-content">
            <h2>20</h2>
            <p>Reports</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AdminHome;