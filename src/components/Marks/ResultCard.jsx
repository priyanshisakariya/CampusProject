import {
  FaMedal,
  FaPercentage,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";

function ResultCard() {
  return (
    <div className="marks-card">

      <h2 className="card-title">
        <FaAward className="card-icon" />
        Final Result
      </h2>

      <div className="result-grid">

        <div className="result-item">
          <FaMedal className="result-icon" />

          <div>
            <h4>Total Marks</h4>
            <p>91 / 100</p>
          </div>
        </div>

        <div className="result-item">
          <FaPercentage className="result-icon" />

          <div>
            <h4>Percentage</h4>
            <p>91%</p>
          </div>
        </div>

        <div className="result-item">
          <FaAward className="result-icon" />

          <div>
            <h4>Grade</h4>
            <p>A+</p>
          </div>
        </div>

        <div className="result-item">
          <FaCheckCircle className="result-icon success" />

          <div>
            <h4>Result</h4>
            <p className="pass">PASS</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ResultCard;