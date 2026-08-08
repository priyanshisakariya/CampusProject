import "./AdminDashboard.css";

import {
  FaUsers,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaClock,
  FaUserPlus,
  FaUserTie,
  FaFileAlt,
  FaBell,
} from "react-icons/fa";

function AdminDashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome back! Here's an overview of your Campus Project Management System.</p>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="cards">

        <div className="card">
          <div className="card-icon students">
            <FaUsers />
          </div>
          <div>
            <h2>150</h2>
            <p>Total Students</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon faculty">
            <FaChalkboardTeacher />
          </div>
          <div>
            <h2>20</h2>
            <p>Total Faculty</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon project">
            <FaProjectDiagram />
          </div>
          <div>
            <h2>32</h2>
            <p>Total Projects</p>
          </div>
        </div>

        <div className="card">
          <div className="card-icon pending">
            <FaClock />
          </div>
          <div>
            <h2>12</h2>
            <p>Pending Approvals</p>
          </div>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">

       

        {/* Quick Actions */}
        <div className="dashboard-box">
          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <button>
              <FaUserPlus /> Add Student
            </button>

            <button>
              <FaChalkboardTeacher /> Add Faculty
            </button>

            <button>
              <FaUserTie /> Assign Mentor
            </button>

            <button>
              <FaFileAlt /> View Reports
            </button>

            <button>
              <FaBell /> Send Notification
            </button>

          </div>
        </div>

      </div>

      
  
      </div>

    
  );
}

export default AdminDashboard;