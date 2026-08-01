import { FaProjectDiagram } from "react-icons/fa";

function ProjectInfoCard() {
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
          placeholder="Enter Project Title"
        />
      </div>

      <div className="form-group">
        <label>Project Domain</label>
        <input
          type="text"
          placeholder="Enter Project Domain"
        />
      </div>

      <div className="form-group">
        <label>Technologies Used</label>
        <input
          type="text"
          placeholder="React, Spring Boot, MySQL"
        />
      </div>

    

      </div>

  );
}

export default ProjectInfoCard;