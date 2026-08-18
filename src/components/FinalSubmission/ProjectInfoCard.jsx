import { FaProjectDiagram } from "react-icons/fa";

function ProjectInfoCard({ formData }) {
  return (
    <div className="submission-card">

      <h2 className="card-title">
        <FaProjectDiagram className="card-icon" />
        Project Information
      </h2>

      <div className="form-group">
        <label>Project Title</label>

        <input
          type="text"
          value={formData.projectTitle || ""}
          readOnly
          placeholder="Project Title"
        />
      </div>

      <div className="form-group">
        <label>Project Domain</label>

        <input
          type="text"
          value={formData.projectDomain || ""}
          readOnly
          placeholder="Project Domain"
        />
      </div>

      <div className="form-group">
        <label>Technologies Used</label>

        <input
          type="text"
          value={formData.technologiesUsed || ""}
          readOnly
          placeholder="Technologies Used"
        />
      </div>

    </div>
  );
}

export default ProjectInfoCard;