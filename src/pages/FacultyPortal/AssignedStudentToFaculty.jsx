import { useState } from "react";
import "./AssignedStudentToFaculty.css";

function AssignedStudentToFaculty() {
  const students = [
    {
      id: 1,
      name: "Rahul Patel",
      enrollment: "23BCA001",
      department: "BCA",
      project: "Student Project Tracking Tool",
      progress: 82,
      status: "Active",
      email: "rahul@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Priya Shah",
      enrollment: "23BCA002",
      department: "BCA",
      project: "Hospital Management System",
      progress: 68,
      status: "Active",
      email: "priya@gmail.com",
      phone: "9876543211",
    },
    {
      id: 3,
      name: "Jay Mehta",
      enrollment: "23BCA003",
      department: "MCA",
      project: "AI Resume Analyzer",
      progress: 45,
      status: "Pending",
      email: "jay@gmail.com",
      phone: "9876543212",
    },
    {
      id: 4,
      name: "Neha Joshi",
      enrollment: "23BCA004",
      department: "BCA",
      project: "Library Management System",
      progress: 95,
      status: "Completed",
      email: "neha@gmail.com",
      phone: "9876543213",
    },
  ];

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) => {
    const searchMatch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.enrollment.toLowerCase().includes(search.toLowerCase());

    const departmentMatch =
      department === "All" || student.department === department;

    const statusMatch =
      status === "All" || student.status === status;

    return searchMatch && departmentMatch && statusMatch;
  });

  return (
    <div className="assigned-page">

      <div className="assigned-header">
        <h1>Assigned Students</h1>
        <p>View and manage students assigned by the administrator.</p>
      </div>

      <div className="toolbar">

        <input
          type="text"
          placeholder="Search by Name or Enrollment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>All</option>
          <option>BCA</option>
          <option>MCA</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Completed</option>
        </select>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Name</th>
              <th>Enrollment</th>
              <th>Department</th>
              <th>Project</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((student) => (

              <tr key={student.id}>

                <td>{student.name}</td>

                <td>{student.enrollment}</td>

                <td>{student.department}</td>

                <td>{student.project}</td>

                <td>

                  <div className="progress-bar">

                    <div
                      className="progress-fill"
                      style={{ width: `${student.progress}%` }}
                    >
                      {student.progress}%
                    </div>

                  </div>

                </td>

                <td>

                  <span
                    className={`status ${student.status.toLowerCase()}`}
                  >
                    {student.status}
                  </span>

                </td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedStudent(student)}
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {selectedStudent && (

        <div className="modal-overlay">

          <div className="student-modal">

            <h2>{selectedStudent.name}</h2>

            <div className="profile-grid">

              <p><strong>Enrollment :</strong> {selectedStudent.enrollment}</p>

              <p><strong>Department :</strong> {selectedStudent.department}</p>

              <p><strong>Email :</strong> {selectedStudent.email}</p>

              <p><strong>Phone :</strong> {selectedStudent.phone}</p>

              <p><strong>Project :</strong> {selectedStudent.project}</p>

              <p><strong>Status :</strong> {selectedStudent.status}</p>

            </div>

            <h3>Overall Progress</h3>

            <div className="progress-bar large">

              <div
                className="progress-fill"
                style={{ width: `${selectedStudent.progress}%` }}
              >
                {selectedStudent.progress}%
              </div>

            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedStudent(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default AssignedStudentToFaculty;