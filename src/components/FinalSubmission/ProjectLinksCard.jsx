import { FaLink } from "react-icons/fa";

function ProjectLinksCard({ formData, setFormData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          name="githubRepository"
          value={formData.githubRepository}
          onChange={handleChange}
          placeholder="https://github.com/username/project"
          required
        />
      </div>

      <div className="form-group">
        <label>Live Project URL (Optional)</label>

        <input
          type="url"
          name="liveProjectUrl"
          value={formData.liveProjectUrl}
          onChange={handleChange}
          placeholder="https://yourproject.com"
        />
      </div>

      <div className="form-group">
        <label>Demo Video URL (Optional)</label>

        <input
          type="url"
          name="demoVideoUrl"
          value={formData.demoVideoUrl}
          onChange={handleChange}
          placeholder="https://youtube.com/..."
        />
      </div>

    </div>
  );
}

export default ProjectLinksCard;