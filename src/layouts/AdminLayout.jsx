import { Outlet } from "react-router-dom";
import { useState } from "react";

import AdminSidebar from "../pages/Admin/AdminSidebar";
import AdminTopbar from "../pages/Admin/AdminTopbar";

import "./AdminLayout.css";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <AdminSidebar sidebarOpen={sidebarOpen} />

      <div className={`main ${sidebarOpen ? "" : "expanded"}`}>
        
        <AdminTopbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="content">
          <Outlet />
        </div>

      </div>
    </>
  );
}

export default AdminLayout;