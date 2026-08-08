import { useState } from "react";
import "./WeeklyReview.css";

function WeeklyReview() {
  const weeklyData = [
    {
      id: 1,
      student: "Rahul Patel",
      week: "Week 5",
      progress: 80,
      status: "Submitted",
      tasks:
        "Completed Login Module, JWT Authentication, Faculty Dashboard UI.",
      challenges:
        "JWT token expiration issue while refreshing the page.",
      nextPlan:
        "Complete Proposal Review Module and integrate APIs.",
      github: "https://github.com/example/project",
    },
    {
      id: 2,
      student: "Priya Shah",
      week: "Week 5",
      progress: 65,
      status: "Submitted",
      tasks:
        "Designed database schema and completed ER Diagram.",
      challenges:
        "Confusion in foreign key relationships.",
      nextPlan:
        "Start backend development using Spring Boot.",
      github: "https://github.com/example/project2",
    },
    {
      id: 3,
      student: "Jay Mehta",
      week: "Week 5",
      progress: 45,
      status: "Pending",
      tasks: "-",
      challenges: "-",
      nextPlan: "-",
      github: "-",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [feedback, setFeedback] = useState("");

  const filteredData = weeklyData.filter((item) =>
    item.student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="weekly-page">

      <div className="weekly-header">
        <h1>Weekly Review</h1>
        <p>Review weekly progress submitted by students.</p>
      </div>

      <div className="weekly-toolbar">

        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select>
          <option>All Weeks</option>
          <option>Week 1</option>
          <option>Week 2</option>
          <option>Week 3</option>
          <option>Week 4</option>
          <option>Week 5</option>
        </select>

      </div>

      <div className="weekly-grid">

        {filteredData.map((item) => (

          <div className="weekly-card" key={item.id}>

            <div className="weekly-top">
              <h3>{item.student}</h3>

              <span
                className={
                  item.status === "Submitted"
                    ? "submitted"
                    : "pending"
                }
              >
                {item.status}
              </span>
            </div>

            <p><strong>{item.week}</strong></p>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              >
                {item.progress}%
              </div>

            </div>

            <button
              className="view-btn"
              onClick={() => setSelectedWeek(item)}
            >
              View Review
            </button>

          </div>

        ))}

      </div>

      {selectedWeek && (

        <div className="modal-overlay">

          <div className="weekly-modal">

            <h2>{selectedWeek.student}</h2>

            <p><strong>{selectedWeek.week}</strong></p>

            <hr />

            <h4>Tasks Completed</h4>

            <p>{selectedWeek.tasks}</p>

            <h4>Challenges Faced</h4>

            <p>{selectedWeek.challenges}</p>

            <h4>Plan for Next Week</h4>

            <p>{selectedWeek.nextPlan}</p>

            <h4>GitHub Repository</h4>

            <a
              href={selectedWeek.github}
              target="_blank"
              rel="noreferrer"
            >
              {selectedWeek.github}
            </a>

            <h4>Faculty Feedback</h4>

            <textarea
              placeholder="Write feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <div className="modal-buttons">

              <button className="approve-btn">
                Approve
              </button>

              <button className="improve-btn">
                Needs Improvement
              </button>

            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedWeek(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default WeeklyReview;