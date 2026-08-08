import { useState } from "react";
import "./MentorAssignment.css";

function MentorAssignment() {
  const facultyList = [
    { name: "Prof. Payal Patel", department: "MCA" },
    { name: "Dr. Patel", department: "MCA" },
    { name: "Prof. Shah", department: "IT" },
    { name: "Prof. Mehta", department: "CE" },
    { name: "Prof. Joshi", department: "MCA" },
  ];

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      project: "Student Portal",
      student: "Khushi Undhad",
      mentor: "Dr. Patel",
      department: "MCA",
      status: "Assigned",
    },
    {
      id: 2,
      project: "Library Management",
      student: "Priyanshi",
      mentor: "",
      department: "",
      status: "Pending",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState("");

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((item) => item.id !== id));
  };

  const assignMentor = (id) => {
    if (!selectedFaculty) {
      alert("Please select a faculty.");
      return;
    }

    const faculty = facultyList.find(
      (f) => `${f.name} (${f.department})` === selectedFaculty
    );

    const updatedAssignments = assignments.map((item) =>
      item.id === id
        ? {
            ...item,
            mentor: faculty.name,
            department: faculty.department,
            status: "Assigned",
          }
        : item
    );

    setAssignments(updatedAssignments);
    setEditId(null);
    setSelectedFaculty("");
  };

  return (
    <div className="mentor-page">
      <h1>Mentor Assignment</h1>

      {/* Cards */}

      <div className="mentor-cards">
        <div className="mentor-card">
          <h2>{assignments.length}</h2>
          <p>Total Assignments</p>
        </div>

        <div className="mentor-card">
          <h2>
            {assignments.filter((a) => a.status === "Assigned").length}
          </h2>
          <p>Assigned</p>
        </div>

        <div className="mentor-card">
          <h2>
            {assignments.filter((a) => a.status === "Pending").length}
          </h2>
          <p>Pending</p>
        </div>
      </div>

      {/* Search */}

      <div className="mentor-search">
        <input
          type="text"
          placeholder="Search Student or Project..."
        />
      </div>

      {/* Table */}

      <div className="mentor-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Project</th>
              <th>Student</th>
              <th>Mentor</th>
              <th>Department</th>
              <th>Status</th>
              <th width="280">Action</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.project}</td>
                <td>{item.student}</td>
                <td>{item.mentor || "-"}</td>
                <td>{item.department || "-"}</td>

                <td>
                  <span
                    className={
                      item.status === "Assigned"
                        ? "status assigned"
                        : "status pending"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  {editId === item.id ? (
                    <div className="assign-section">
                      <select
                        value={selectedFaculty}
                        onChange={(e) =>
                          setSelectedFaculty(e.target.value)
                        }
                      >
                        <option value="">
                          Select Faculty
                        </option>

                        {facultyList.map((faculty, index) => (
                          <option
                            key={index}
                            value={`${faculty.name} (${faculty.department})`}
                          >
                            {faculty.name} ({faculty.department})
                          </option>
                        ))}
                      </select>

                      <button
                        className="assign-btn"
                        onClick={() => assignMentor(item.id)}
                      >
                        Assign
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => setEditId(item.id)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteAssignment(item.id)
                        }
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MentorAssignment;