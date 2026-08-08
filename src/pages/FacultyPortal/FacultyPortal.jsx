import { useState } from "react";
import { Outlet } from "react-router-dom";

import FacultySidebar from "../../components/FacultySidebar/FacultySidebar";
import FacultyTopbar from "../../components/FacultyTopbar/FacultyTopbar";

import "./FacultyPortal.css";

function FacultyPortal() {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="portal">

      {/* Sidebar */}
      <FacultySidebar sidebarOpen={sidebarOpen} />

      {/* Main */}
      <div
        className={`main ${sidebarOpen ? "" : "expanded"}`}
      >

        <FacultyTopbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default FacultyPortal;