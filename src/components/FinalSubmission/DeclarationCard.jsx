import { FaCheckCircle, FaPaperPlane, FaUndo } from "react-icons/fa";

function DeclarationCard({ formData, setFormData, handleSubmit }) {

  const handleDeclaration = (e) => {
    setFormData((prev) => ({
      ...prev,
      declaration: e.target.checked,
    }));
  };

  return (
    <div className="submission-card">

      <h2 className="card-title">
        <FaCheckCircle className="card-icon" />
        Declaration
      </h2>

      <div className="declaration-box">

        <label className="checkbox-label">

          <input
            type="checkbox"
            checked={formData.declaration || false}
            onChange={handleDeclaration}
          />

          <span>
            I declare that this project is my original work and all
            submitted documents are complete and accurate.
          </span>

        </label>

      </div>

      <div className="button-group">

        <button
          type="button"
          className="reset-btn"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              declaration: false,
            }))
          }
        >
          <FaUndo />
          Clear
        </button>

        <button
          type="button"
          className="submit-btn"
          onClick={handleSubmit}
        >
          <FaPaperPlane />
          Submit Final Project
        </button>

      </div>

    </div>
  );
}

export default DeclarationCard;