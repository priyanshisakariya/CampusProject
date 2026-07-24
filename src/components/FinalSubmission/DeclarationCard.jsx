import { FaCheckCircle, FaPaperPlane, FaUndo } from "react-icons/fa";

function DeclarationCard() {
  return (
    <div className="submission-card">

      <h2 className="card-title">
        <FaCheckCircle className="card-icon" />
        Declaration
      </h2>

      <div className="declaration-box">

        <label className="checkbox-label">
          <input type="checkbox" />

          I declare that this project is my original work and all
          submitted documents are complete and accurate.
        </label>

      </div>

      <div className="button-group">

        <button className="reset-btn">
          <FaUndo />
          Clear
        </button>

        <button className="submit-btn">
          <FaPaperPlane />
          Submit Final Project
        </button>

      </div>

    </div>
  );
}

export default DeclarationCard;