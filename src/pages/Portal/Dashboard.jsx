import "./Dashboard.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
} from "recharts";

function Dashboard() {
  const student = JSON.parse(localStorage.getItem("student"));

  /* ==========================================
     PROJECT STATUS
  ========================================== */

  // Static value for now.
  // Later this can come from Spring Boot API.
  const projectCompletion = 40;

  const projectStatusData = [
    {
      name: "Completed",
      value: projectCompletion,
      color: "#3B82F6",
    },
    {
      name: "Remaining",
      value: 100 - projectCompletion,
      color: "#E5E7EB",
    },
  ];

  /* ==========================================
     WEEKLY PROGRESS - 6 WEEKS
  ========================================== */

  const weeklyProgressData = [
    {
      week: "W1",
      submitted: 0,
      background: 1,
    },
    {
      week: "W2",
      submitted: 0,
      background: 1,
    },
    {
      week: "W3",
      submitted: 0,
      background: 1,
    },
    {
      week: "W4",
      submitted: 0,
      background: 1,
    },
    {
      week: "W5",
      submitted: 0,
      background: 1,
    },
    {
      week: "W6",
      submitted: 0,
      background: 1,
    },
  ];

  /* ==========================================
     WEEKLY REPORT COUNT
  ========================================== */

  const submittedReports = 0;

  const totalReports = 6;

  const weeklyPercentage = Math.round((submittedReports / totalReports) * 100);

  /* ==========================================
     PROJECT MARKS
  ========================================== */

  // Static value for now.
  // Later this will come from Faculty/Spring Boot API.
  const projectMarks = 78;

  const marksChartData = [
    {
      name: "Obtained",
      value: projectMarks,
      fill: "#F59E0B",
    },
    {
      name: "Remaining",
      value: 100 - projectMarks,
      fill: "#FEF3C7",
    },
  ];

  return (
    <div className="dashboard">
      {/* ==========================================
          WELCOME
      ========================================== */}

      <div className="dashboard-header">
        <h1>Welcome, {student?.fullName || "Student"} 👋</h1>

        <p className="dashboard-text">
          Track your academic project progress, weekly submissions, and
          performance from one place.
        </p>
      </div>

      {/* ==========================================
          ANALYTICS
      ========================================== */}

      <div className="dashboard-analytics">
        {/* ========================================
            PROJECT STATUS
        ======================================== */}

        <div className="analytics-card">
          <div className="analytics-header">
            <div>
              <h2>Project Status</h2>

              <p>Overall project progress</p>
            </div>

            <span className="analytics-icon purple">📊</span>
          </div>

          <div className="project-chart">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={projectStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {projectStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="project-chart-center">
              <strong>{projectCompletion}%</strong>

              <span>Completed</span>
            </div>
          </div>

          {/* STATUS DETAILS */}

          <div className="status-list">
            <div className="status-item">
              <span className="status-color blue"></span>

              <span>Proposal</span>

              <strong>Pending</strong>
            </div>

            <div className="status-item">
              <span className="status-color purple"></span>

              <span>Weekly Progress</span>

              <strong>0 / 6</strong>
            </div>

            <div className="status-item">
              <span className="status-color green"></span>

              <span>Final Submission</span>

              <strong>Pending</strong>
            </div>
          </div>
        </div>

        {/* ========================================
            WEEKLY PROGRESS
        ======================================== */}

        <div className="analytics-card">
          <div className="analytics-header">
            <div>
              <h2>Weekly Progress</h2>

              <p>Weekly report submissions</p>
            </div>

            <span className="analytics-icon blue-icon">📅</span>
          </div>

          <div className="weekly-chart">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={weeklyProgressData}
                margin={{
                  top: 20,
                  right: 10,
                  left: -20,
                  bottom: 5,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />

                <XAxis
                  dataKey="week"
                  tick={{
                    fontSize: 11,
                  }}
                />

                <YAxis domain={[0, 1]} ticks={[0, 1]} allowDecimals={false} />

                {/* IMPORTANT:
                    Removes gray hover rectangle
                */}

                <Tooltip cursor={false} />

                {/* Empty week background */}

                <Bar
                  dataKey="background"
                  fill="#EDE9FE"
                  radius={[6, 6, 0, 0]}
                  barSize={25}
                />

                {/* Actual submitted reports */}

                <Bar
                  dataKey="submitted"
                  fill="#8B5CF6"
                  radius={[6, 6, 0, 0]}
                  barSize={25}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="weekly-bottom">
            <div>
              <strong>
                {submittedReports} / {totalReports}
              </strong>

              <span>Reports Submitted</span>
            </div>

            <div className="progress-percentage">{weeklyPercentage}%</div>
          </div>
        </div>

        {/* ========================================
            PROJECT MARKS
        ======================================== */}

        <div className="analytics-card marks-card">
          <div className="analytics-header">
            <div>
              <h2>Project Marks</h2>

              <p>Final project evaluation</p>
            </div>

            <span className="analytics-icon orange">⭐</span>
          </div>

          <div className="marks-chart">
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="95%"
                barSize={18}
                data={marksChartData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar background dataKey="value" cornerRadius={10} />
              </RadialBarChart>
            </ResponsiveContainer>

            <div className="marks-center">
              <strong>{projectMarks}</strong>

              <span>/ 100</span>
            </div>
          </div>

          <div className="marks-message">Current Project Score</div>
        </div>
      </div>

      {/* ==========================================
          RECENT NOTIFICATIONS
      ========================================== */}

      <div className="recent-section">
        <div className="notification-header">
          <div>
            <h2>Recent Notifications</h2>

            <p>Stay updated with important project announcements.</p>
          </div>

          <span className="notification-icon">🔔</span>
        </div>

        <ul>
          <li>
            <span>📢</span>
            Proposal submission starts from 15 August.
          </li>

          <li>
            <span>📢</span>
            Weekly Progress Report deadline every Friday.
          </li>

          <li>
            <span>📢</span>
            Final Report submission before semester end.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
