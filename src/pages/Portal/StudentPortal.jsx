import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import "./StudentPortal.css";

function StudentPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`portal ${
        sidebarOpen ? "sidebar-open" : "sidebar-closed"
      }`}
    >

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Section */}
      <div className="main">

        {/* Topbar */}
        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default StudentPortal;