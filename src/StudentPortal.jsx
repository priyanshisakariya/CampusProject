import { Link, Outlet } from "react-router-dom";
import "./StudentPortal.css";
import logo from "./assets/logo1.jpeg";
import { useState } from "react";


function StudentPortal() {

  const [sidebarOpen, setSidebarOpen] = useState(true);


  return (

    <div className="portal">


      {/* Sidebar */}

      <div className={sidebarOpen ? "sidebar active" : "sidebar"}>


        <h2>🎓 CampusProject</h2>


        <Link to="/student-portal">
          🏠 Dashboard
        </Link>


        <Link to="/student-portal/profile">
          👤 My Profile
        </Link>


        <Link to="/student-portal/proposal">
          📄 Submit Proposal
        </Link>


        <Link to="/student-portal/progress">
          📅 Weekly Progress
        </Link>


        <Link to="/student-portal/report">
          📁 Final Report
        </Link>


        <Link to="/student-portal/marks">
          🏆 My Marks
        </Link>


        <Link to="/student-portal/notification">
          🔔 Notifications
        </Link>


        <Link to="/">
          🚪 Logout
        </Link>


      </div>




      {/* Main */}

      <div className="main">



        {/* Top Navbar */}

        <div className="topbar">


          <div className="top-left">


            <button
              className="menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>



            <h2 className="portal-title">
              Student Portal
            </h2>


          </div>




          <div className="user-section">


            <span className="bell">
              🔔
            </span>



            <div className="profile">


              <img 
                src={logo} 
                alt="Profile"
              />


              <span>
                Priyanshi
              </span>


            </div>


          </div>


        </div>





        {/* Page Content */}

        <div className="content">


            <Outlet />


        </div>



      </div>


    </div>

  );

}


export default StudentPortal;