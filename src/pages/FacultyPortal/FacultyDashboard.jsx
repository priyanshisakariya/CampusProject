import "./FacultyDashboard.css";


function FacultyDashboard() {
  const cards = [
    {
      title: "Assigned Students",
      value: 18,
      icon: "👨‍🎓",
      color: "#2F80ED",
    },
    {
      title: "Pending Proposals",
      value: 5,
      icon: "📄",
      color: "#F2994A",
    },
    {
      title: "Weekly Reviews",
      value: 7,
      icon: "📅",
      color: "#27AE60",
    },
    {
      title: "Notifications",
      value: 4,
      icon: "🔔",
      color: "#EB5757",
    },
  ];

  const students = [
    { name: "Rahul Patel", progress: 80 },
    { name: "Priya Shah", progress: 65 },
    { name: "Jay Mehta", progress: 40 },
    { name: "Neha Joshi", progress: 90 },
  ];

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>Good Morning, Dr. Sharma 👋</h1>

        <p>
          View summary of assigned students and pending work.
        </p>
      </div>

      <div className="card-grid">

        {cards.map((card, index) => (

          <div
            className="card"
            key={index}
            style={{ borderTop: `5px solid ${card.color}` }}
          >
            <div className="icon">{card.icon}</div>

            <h2>{card.value}</h2>

            <p>{card.title}</p>
          </div>

        ))}
      </div>

      <div className="dashboard-content">

        <div className="progress-box">

          <h2>Student Progress</h2>

          {students.map((student, index) => (

            <div key={index} className="student-progress">

              <div className="student-name">
                {student.name}
              </div>

              <div className="progress">

                <div
                  className="progress-fill"
                  style={{ width: `${student.progress}%` }}
                >
                  {student.progress}%
                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="activity-box">

          <h2>Recent Activities</h2>

          <ul>

            <li>📄 Rahul submitted Week 8 report</li>

            <li>📝 Priya uploaded proposal</li>

            <li>💬 Jay replied to faculty comments</li>

            <li>✅ Neha completed milestone 3</li>

            <li>📅 Viva scheduled for Team Alpha</li>

          </ul>

        </div>

      </div>

      <div className="dashboard-content">

        <div className="deadline-box">

          <h2>Upcoming Deadlines</h2>

          <ul>

            <li>📅 Proposal Review - 20 Aug</li>

            <li>📑 Weekly Report - 22 Aug</li>

            <li>🎤 Final Viva - 30 Aug</li>

          </ul>

        </div>

        <div className="announcement-box">

          <h2>Faculty Notices</h2>

          <ul>

            <li>📢 Internal Evaluation starts next week.</li>

            <li>📢 Submit marks before 28 Aug.</li>

            <li>📢 Project exhibition on 5 Sept.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default FacultyDashboard;