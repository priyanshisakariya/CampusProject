import { useState, useEffect } from "react";
import "./SubmitProposal.css";

function SubmitProposal() {
  const [formData, setFormData] = useState({
    studentId: "",

    studentName: "",
    enrollment: "",

    projectTitle: "",
    projectDomain: "",
    guideName: "",

    technologyStack: [],
    otherTechnology: "",

    member2Name: "",
    member2Enrollment: "",

    member3Name: "",
    member3Enrollment: "",

    description: "",
    proposal: null,
  });
  useEffect(() => {
  const student = JSON.parse(localStorage.getItem("student"));

  if (student) {
    setFormData((prev) => ({
      ...prev,
      studentId: student.id || student.Id,
      studentName: student.fullName,
      enrollment: student.enrollmentNo,
    }));
  }
}, []);

  const submitProposal = async (proposalData) => {
    const response = await fetch("http://localhost:8081/proposal/submit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(proposalData),
    });

    return response.json();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    setFormData({
      ...formData,
      proposal: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Student ID:", formData.studentId);
  console.log("Form Data:", formData);

  if (!formData.studentId) {
    alert("Student ID not found. Please login again.");
    return;
  }

  const proposalData = {
  studentId: formData.studentId,

  projectTitle: formData.projectTitle,
  projectDomain: formData.projectDomain,
  guideName: formData.guideName,
  technologyStack: formData.technologyStack.join(","),
  otherTechnology: formData.otherTechnology,
  member2Name: formData.member2Name,
  member2Enrollment: formData.member2Enrollment,
  member3Name: formData.member3Name,
  member3Enrollment: formData.member3Enrollment,
  projectDescription: formData.description,
  proposalFile: formData.proposal
    ? formData.proposal.name
    : "",
};

  console.log("Sending Proposal:", proposalData);

  const result = await submitProposal(proposalData);

  console.log(result);

  alert("Project Proposal Submitted Successfully!");

  const student = JSON.parse(localStorage.getItem("student"));

  setFormData({
    studentId: student?.id || student?.Id || "",
    studentName: student?.fullName || "",
    enrollment: student?.enrollmentNo || "",

    projectTitle: "",
    projectDomain: "",
    guideName: "",

    technologyStack: [],
    otherTechnology: "",

    member2Name: "",
    member2Enrollment: "",

    member3Name: "",
    member3Enrollment: "",

    description: "",
    proposal: null,
  });

  e.target.reset();
};
  const handleTechnologyChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        technologyStack: [...formData.technologyStack, value],
      });
    } else {
      setFormData({
        ...formData,
        technologyStack: formData.technologyStack.filter(
          (tech) => tech !== value,
        ),
      });
    }
  };

  return (
    <div className="proposal-container">
      <div className="proposal-card">
        <h1>📄 Submit Project Proposal</h1>

        <form onSubmit={handleSubmit}>
          {/* Student Information */}

          <h2 className="section-title">Student Information</h2>

          <div className="grid">
            <div>
              <label>Student Name</label>

              <input type="text" value={formData.studentName} readOnly />
            </div>

            <div>
              <label>Enrollment Number</label>

              <input type="text" value={formData.enrollment} readOnly />
            </div>
          </div>

          {/* Project Information */}

          <h2 className="section-title">Project Information</h2>

          <label>Project Title</label>

          <input
            type="text"
            name="projectTitle"
            placeholder="Enter Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
            required
          />

          <label>Project Domain</label>

          <select
            name="projectDomain"
            value={formData.projectDomain}
            onChange={handleChange}
            required
          >
            <option value="">Select Domain</option>
            <option>Web Development</option>
            <option>Android Development</option>
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>Cloud Computing</option>
            <option>Cyber Security</option>
            <option>Data Science</option>
            <option>Internet of Things</option>
          </select>

          <label>Guide Name</label>

          <input
            type="text"
            name="guideName"
            placeholder="Enter Guide Name"
            value={formData.guideName}
            onChange={handleChange}
            required
          />
          <h2 className="section-title">Technology Stack</h2>

          <div className="technology-grid">
            <label>
              <input
                type="checkbox"
                value="Java"
                onChange={handleTechnologyChange}
              />
              Java
            </label>

            <label>
              <input
                type="checkbox"
                value="Spring Boot"
                onChange={handleTechnologyChange}
              />
              Spring Boot
            </label>

            <label>
              <input
                type="checkbox"
                value="React.js"
                onChange={handleTechnologyChange}
              />
              React.js
            </label>

            <label>
              <input
                type="checkbox"
                value="HTML"
                onChange={handleTechnologyChange}
              />
              HTML
            </label>

            <label>
              <input
                type="checkbox"
                value="CSS"
                onChange={handleTechnologyChange}
              />
              CSS
            </label>

            <label>
              <input
                type="checkbox"
                value="JavaScript"
                onChange={handleTechnologyChange}
              />
              JavaScript
            </label>

            <label>
              <input
                type="checkbox"
                value="MySQL"
                onChange={handleTechnologyChange}
              />
              MySQL
            </label>

            <label>
              <input
                type="checkbox"
                value="Python"
                onChange={handleTechnologyChange}
              />
              Python
            </label>

            <label>
              <input
                type="checkbox"
                value="AWS"
                onChange={handleTechnologyChange}
              />
              AWS
            </label>

            <label>
              <input
                type="checkbox"
                value="Firebase"
                onChange={handleTechnologyChange}
              />
              Firebase
            </label>

            <label>
              <input
                type="checkbox"
                value="MongoDB"
                onChange={handleTechnologyChange}
              />
              MongoDB
            </label>
          </div>

          <label>Other Technology (Optional)</label>

          <input
            type="text"
            name="otherTechnology"
            placeholder="Enter Other Technology"
            value={formData.otherTechnology}
            onChange={handleChange}
          />

          {/* Team Members */}

          <h2 className="section-title">Team Members</h2>

          <div className="member-box">
            <h3>👑 Team Leader</h3>

            <div className="grid">
              <input type="text" value={formData.studentName} readOnly />

              <input type="text" value={formData.enrollment} readOnly />
            </div>
          </div>

          <div className="member-box">
            <h3>Member 2</h3>

            <div className="grid">
              <input
                type="text"
                name="member2Name"
                placeholder="Member Name"
                value={formData.member2Name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="member2Enrollment"
                placeholder="Enrollment Number"
                value={formData.member2Enrollment}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="member-box">
            <h3>Member 3</h3>

            <div className="grid">
              <input
                type="text"
                name="member3Name"
                placeholder="Member Name"
                value={formData.member3Name}
                onChange={handleChange}
              />

              <input
                type="text"
                name="member3Enrollment"
                placeholder="Enrollment Number"
                value={formData.member3Enrollment}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Description */}

          <label>Project Description</label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          {/* Upload */}

          <label>Upload Proposal (PDF)</label>

          <input type="file" accept=".pdf" onChange={handleFile} required />

          <button type="submit">Submit Proposal</button>
        </form>
      </div>
    </div>
  );
}

export default SubmitProposal;
