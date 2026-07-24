import { FaClipboardCheck } from "react-icons/fa";

function MarksTableCard() {
  return (
    <div className="marks-card">

      <h2 className="card-title">
        <FaClipboardCheck className="card-icon" />
        Evaluation Marks
      </h2>

      <table className="marks-table">

        <thead>

          <tr>
            <th>Evaluation</th>
            <th>Obtained</th>
            <th>Maximum</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>Project Proposal</td>
            <td>18</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Weekly Progress</td>
            <td>17</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Final Report</td>
            <td>19</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Presentation / Viva</td>
            <td>18</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Source Code Quality</td>
            <td>19</td>
            <td>20</td>
          </tr>

        </tbody>

        <tfoot>

          <tr>

            <th>Total</th>

            <th>91</th>

            <th>100</th>

          </tr>

        </tfoot>

      </table>

    </div>
  );
}

export default MarksTableCard;