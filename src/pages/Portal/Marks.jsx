import { useEffect, useState } from "react";

import ProjectDetailsCard from "../../components/Marks/ProjectDetailsCard";
import MarksTableCard from "../../components/Marks/MarksTableCard";
import FeedbackCard from "../../components/Marks/FeedbackCard";
import ResultCard from "../../components/Marks/ResultCard";

import "./Marks.css";

function Marks() {

  const [projectDetails, setProjectDetails] = useState({
    projectTitle: "",
    guideName: "",
    submissionDate: "",
    status: "",
  });

  useEffect(() => {

    const fetchProjectDetails = async () => {

      try {

        const student = JSON.parse(
          localStorage.getItem("student")
        );

        if (!student) {
          console.log("Student not found in localStorage");
          return;
        }

        const studentId = student.id || student.Id;

        console.log("Student ID:", studentId);

        const response = await fetch(
          `http://localhost:8081/proposal/student/${studentId}`
        );

        const data = await response.json();

        console.log("Proposal Data:", data);

        if (!response.ok) {
          console.error("Failed to fetch proposal:", data);
          return;
        }

        setProjectDetails({
          projectTitle: data.projectTitle || "",
          guideName: data.guideName || "",
          submissionDate: data.submissionDate || "",
          status: "Submitted",
        });

      } catch (error) {

        console.error(
          "Error fetching project details:",
          error
        );

      }

    };

    fetchProjectDetails();

  }, []);

  return (
    <div className="marks-container">

      <h1 className="page-title">
        My Marks
      </h1>

      <p className="page-subtitle">
        View your project evaluation, faculty feedback, and final result.
      </p>

      <ProjectDetailsCard
        projectDetails={projectDetails}
      />

      <MarksTableCard />

      <FeedbackCard />

      <ResultCard />

    </div>
  );
}

export default Marks;