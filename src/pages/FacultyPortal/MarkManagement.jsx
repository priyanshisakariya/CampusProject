import { useState } from "react";
import "./MarkManagement.css";

function MarkManagement() {
  const students = [
    {
      id: 1,
      name: "Rahul Patel",
      enrollment: "23BCA001",
      project: "Student Project Tracking Tool",
    },
    {
      id: 2,
      name: "Priya Shah",
      enrollment: "23BCA002",
      project: "Hospital Management System",
    },
    {
      id: 3,
      name: "Jay Mehta",
      enrollment: "23BCA003",
      project: "AI Resume Analyzer",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [marks, setMarks] = useState({
    proposal: 0,
    weekly: 0,
    implementation: 0,
    documentation: 0,
    presentation: 0,
    viva: 0,
    remarks: "",
  });

  const handleChange = (e) => {
    setMarks({
      ...marks,
      [e.target.name]: e.target.value,
    });
  };

  const total =
    Number(marks.proposal) +
    Number(marks.weekly) +
    Number(marks.implementation) +
    Number(marks.documentation) +
    Number(marks.presentation) +
    Number(marks.viva);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mark-page">

      <div className="mark-header">
        <h1>Mark Management</h1>
        <p>Assign marks based on student performance.</p>
      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="student-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Enrollment</th>
            <th>Project</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredStudents.map((student) => (

            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.enrollment}</td>
              <td>{student.project}</td>

              <td>

                <button
                  className="assign-btn"
                  onClick={() => setSelectedStudent(student)}
                >
                  Assign Marks
                </button>

              </td>
            </tr>

          ))}

        </tbody>

      </table>

      {selectedStudent && (

        <div className="modal-overlay">

          <div className="mark-modal">

            <h2>{selectedStudent.name}</h2>

            <p>{selectedStudent.project}</p>

            <div className="mark-grid">

              <div>
                <label>Proposal (20)</label>
                <input
                  type="number"
                  name="proposal"
                  value={marks.proposal}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Weekly Review (30)</label>
                <input
                  type="number"
                  name="weekly"
                  value={marks.weekly}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Implementation (20)</label>
                <input
                  type="number"
                  name="implementation"
                  value={marks.implementation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Documentation (10)</label>
                <input
                  type="number"
                  name="documentation"
                  value={marks.documentation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Presentation (10)</label>
                <input
                  type="number"
                  name="presentation"
                  value={marks.presentation}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Viva (10)</label>
                <input
                  type="number"
                  name="viva"
                  value={marks.viva}
                  onChange={handleChange}
                />
              </div>

            </div>

            <h3>Total : {total} / 100</h3>

            <textarea
              name="remarks"
              placeholder="Faculty Remarks..."
              value={marks.remarks}
              onChange={handleChange}
            />

            <div className="button-group">

              <button className="save-btn">
                Save Marks
              </button>

              <button
                className="cancel-btn"
                onClick={() => setSelectedStudent(null)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default MarkManagement;