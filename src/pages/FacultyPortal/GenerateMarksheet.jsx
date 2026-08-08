import { useMemo, useState } from "react";
import "./GenerateMarksheet.css";

const students = [
  {
    id: 1,
    name: "Rahul Patel",
    enrollment: "22MCA101",
    project: "Student Project Tracking System",
    guide: "Dr. Sharma",
  },
  {
    id: 2,
    name: "Priya Shah",
    enrollment: "22MCA102",
    project: "Hospital Management System",
    guide: "Dr. Sharma",
  },
  {
    id: 3,
    name: "Jay Mehta",
    enrollment: "22MCA103",
    project: "E-Commerce Website",
    guide: "Dr. Sharma",
  },
];

function GenerateMarksheet() {
  const [selectedStudentId, setSelectedStudentId] = useState(students[0].id);
  const [subject, setSubject] = useState("Software Development Project");
  const [finalVivaDate, setFinalVivaDate] = useState("2026-08-10");
  const [remarks, setRemarks] = useState("Excellent project work.");
  const [showPreview, setShowPreview] = useState(false);
  const [marks, setMarks] = useState({
    proposal: 18,
    weekly: 26,
    implementation: 18,
    documentation: 9,
    presentation: 9,
    viva: 9,
  });

  const selectedStudent = useMemo(
    () => students.find((student) => student.id === Number(selectedStudentId)) || students[0],
    [selectedStudentId]
  );

  const total = useMemo(
    () =>
      Number(marks.proposal) +
      Number(marks.weekly) +
      Number(marks.implementation) +
      Number(marks.documentation) +
      Number(marks.presentation) +
      Number(marks.viva),
    [marks]
  );

  const percentage = useMemo(() => ((total / 100) * 100).toFixed(2), [total]);

  const grade = useMemo(() => {
    if (total >= 85) return "A+";
    if (total >= 75) return "A";
    if (total >= 65) return "B+";
    if (total >= 50) return "B";
    return "C";
  }, [total]);

  const result = total >= 40 ? "PASS" : "FAIL";

  const handleMarkChange = (event) => {
    const { name, value } = event.target;
    setMarks((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    setShowPreview(true);
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="gm-container">
      <div className="gm-header">
        <h1>Generate Marksheet</h1>
        <p>
          Fill student project marks, preview the marksheet, and download it as a
          printable report.
        </p>
      </div>
      <form onSubmit={handleGenerate} className="gm-form">
        <div className="gm-grid-2">
          <label>
            Student
            <select
              value={selectedStudentId}
              onChange={(event) => setSelectedStudentId(event.target.value)}
              className="gm-input"
            >
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name} — {student.enrollment}
                </option>
              ))}
            </select>
          </label>

          <label>
            Subject
            <input
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              className="gm-input"
            />
          </label>

          <label>
            Final Viva Date
            <input
              type="date"
              value={finalVivaDate}
              onChange={(event) => setFinalVivaDate(event.target.value)}
              className="gm-input"
            />
          </label>

          <label>
            Project Title
            <input
              type="text"
              value={selectedStudent.project}
              disabled
              className="gm-input gm-disabled"
            />
          </label>
        </div>

        <div className="gm-grid-3">
          <label>
            Proposal (20)
            <input
              name="proposal"
              type="number"
              min="0"
              max="20"
              value={marks.proposal}
              onChange={handleMarkChange}
              className="gm-input"
            />
          </label>

          <label>
            Weekly Review (30)
            <input
              name="weekly"
              type="number"
              min="0"
              max="30"
              value={marks.weekly}
              onChange={handleMarkChange}
              style={{ width: "100%", marginTop: "8px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Implementation (20)
            <input
              name="implementation"
              type="number"
              min="0"
              max="20"
              value={marks.implementation}
              onChange={handleMarkChange}
              style={{ width: "100%", marginTop: "8px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </label>
        </div>

        <div className="gm-grid-3">
          <label>
            Documentation (10)
            <input
              name="documentation"
              type="number"
              min="0"
              max="10"
              value={marks.documentation}
              onChange={handleMarkChange}
              className="gm-input"
            />
          </label>

          <label>
            Presentation (10)
            <input
              name="presentation"
              type="number"
              min="0"
              max="10"
              value={marks.presentation}
              onChange={handleMarkChange}
              style={{ width: "100%", marginTop: "8px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </label>

          <label>
            Viva (10)
            <input
              name="viva"
              type="number"
              min="0"
              max="10"
              value={marks.viva}
              onChange={handleMarkChange}
              style={{ width: "100%", marginTop: "8px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
          </label>
        </div>

        <label>
          Faculty Remarks
          <textarea rows="3" value={remarks} onChange={(event) => setRemarks(event.target.value)} className="gm-textarea" />
        </label>

        <div className="gm-actions">
          <button type="button" onClick={() => setShowPreview(false)} className="gm-btn gm-btn-primary">
            Reset Preview
          </button>
          <button type="submit" className="gm-btn gm-btn-primary">
            Generate Marksheet
          </button>
        </div>
      </form>

      {showPreview && (
        <section className="gm-preview">
          <div className="gm-preview-header">
            <div>
              <h2 className="gm-preview-title">University of Applied Sciences</h2>
              <p className="gm-muted">Department of Computer Applications</p>
            </div>
            <div className="gm-preview-date">
              <p className="gm-strong">Final Viva Date</p>
              <p className="gm-small">{finalVivaDate}</p>
            </div>
          </div>

          <div className="gm-grid-2 gm-preview-details">
            <div>
              <p className="gm-strong gm-no-margin">Student Name</p>
              <p className="gm-small">{selectedStudent.name}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Enrollment No</p>
              <p className="gm-small">{selectedStudent.enrollment}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Project Title</p>
              <p className="gm-small">{selectedStudent.project}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Guide Name</p>
              <p className="gm-small">{selectedStudent.guide}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Subject</p>
              <p className="gm-small">{subject}</p>
            </div>
          </div>

          <table className="gm-table">
            <thead>
              <tr>
                <th>Component</th>
                <th className="gm-right">Marks Obtained</th>
                <th className="gm-right">Max Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Proposal</td>
                <td className="gm-right">{marks.proposal}</td>
                <td className="gm-right">20</td>
              </tr>
              <tr>
                <td>Weekly Review</td>
                <td className="gm-right">{marks.weekly}</td>
                <td className="gm-right">30</td>
              </tr>
              <tr>
                <td>Implementation</td>
                <td className="gm-right">{marks.implementation}</td>
                <td className="gm-right">20</td>
              </tr>
              <tr>
                <td>Documentation</td>
                <td className="gm-right">{marks.documentation}</td>
                <td className="gm-right">10</td>
              </tr>
              <tr>
                <td>Presentation</td>
                <td className="gm-right">{marks.presentation}</td>
                <td className="gm-right">10</td>
              </tr>
              <tr>
                <td>Viva</td>
                <td className="gm-right">{marks.viva}</td>
                <td className="gm-right">10</td>
              </tr>
              <tr className="gm-total-row">
                <td>Total</td>
                <td className="gm-right">{total}</td>
                <td className="gm-right">100</td>
              </tr>
            </tbody>
          </table>

          <div className="gm-grid-2 gm-summary">
            <div>
              <p className="gm-strong gm-no-margin">Percentage</p>
              <p className="gm-small">{percentage}%</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Grade</p>
              <p className="gm-small">{grade}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Result</p>
              <p className={result === "PASS" ? "gm-result pass" : "gm-result fail"}>{result}</p>
            </div>
            <div>
              <p className="gm-strong gm-no-margin">Faculty Signature</p>
              <p className="gm-small">________________________</p>
            </div>
          </div>

          <div className="gm-remarks-block">
            <p className="gm-strong gm-no-margin">Remarks</p>
            <p className="gm-remarks">{remarks}</p>
          </div>

          <div className="gm-actions gm-actions-end">
            <button type="button" onClick={handleDownload} className="gm-btn gm-btn-primary">
              Download / Print
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default GenerateMarksheet;

