import { FaLink } from "react-icons/fa";

function ProjectLinksCard() {
  return (
    <div className="submission-card">

      <h2 className="card-title">
        <FaLink className="card-icon" />
        Project Links
      </h2>

      <div className="form-group">
        <label>GitHub Repository</label>
        <input
          type="url"
          placeholder="https://github.com/username/project"
        />
      </div>

      <div className="form-group">
        <label>Live Project URL (Optional)</label>
        <input
          type="url"
          placeholder="https://yourproject.com"
        />
      </div>

      <div className="form-group">
        <label>Demo Video URL (Optional)</label>
        <input
          type="url"
          placeholder="https://youtube.com/..."
        />
      </div>

    </div>
  );
}

export default ProjectLinksCard;