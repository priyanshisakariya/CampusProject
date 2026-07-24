
import ProjectDetailsCard from "../../components/Marks/ProjectDetailsCard"
import MarksTableCard from "../../components/Marks/MarksTableCard"
import FeedbackCard from "../../components/Marks/FeedbackCard"
import ResultCard from "../../components/Marks/ResultCard"
import './Marks.css'
function Marks()
{
    return(
        <div className="marks-container">

      <h1 className="page-title">
        My Marks
      </h1>

      <p className="page-subtitle">
        View your project evaluation, faculty feedback, and final result.
      </p>
            <ProjectDetailsCard />

            <MarksTableCard />

            <FeedbackCard />

            <ResultCard />
    </div>
    )
}

export default Marks;