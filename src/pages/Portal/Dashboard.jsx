import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Welcome, Student 👋</h1>
      <p className="dashboard-text">
        Manage your academic project efficiently through the CampusProject
        Student Portal.
      </p>

      <div className="dashboard-cards">

        <div className="card">
          <h2>📄 Proposal Status</h2>
          <p>Not Submitted</p>
        </div>

        <div className="card">
          <h2>📅 Weekly Progress</h2>
          <p>0 / 12 Reports Submitted</p>
        </div>

        <div className="card">
          <h2>📑 Final Report</h2>
          <p>Pending Upload</p>
        </div>

        <div className="card">
          <h2>⭐ Project Marks</h2>
          <p>Not Available</p>
        </div>

      </div>

      <div className="recent-section">

        <h2>Recent Notifications</h2>

        <ul>
          <li>📢 Proposal submission starts from 15 August.</li>
          <li>📢 Weekly Progress Report deadline every Friday.</li>
          <li>📢 Final Report submission before semester end.</li>
        </ul>

      </div>

    </div>
  );
}
        
export default Dashboard;