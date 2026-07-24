import ProjectInfoCard from "../../components/FinalSubmission/ProjectInfoCard";
import ProjectLinksCard from "../../components/FinalSubmission/ProjectLinksCard";
import UploadDocumentsCard from "../../components/FinalSubmission/UploadDocumentsCard";
import DeclarationCard from "../../components/FinalSubmission/DeclarationCard";

import "./FinalSubmission.css";

export default function FinalSubmission() {
  return (
    <div className="submission-container">

      <h1 className="page-title">
        Final Project Submission
      </h1>

      <p className="page-subtitle">
        Submit your final project details, documents, and repository links for faculty evaluation.
      </p>

      <ProjectInfoCard />

      <ProjectLinksCard />

      <UploadDocumentsCard />

      <DeclarationCard />

    </div>
  );
}