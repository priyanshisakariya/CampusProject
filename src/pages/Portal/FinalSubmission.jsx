import { useState, useEffect } from "react";

import ProjectInfoCard from "../../components/FinalSubmission/ProjectInfoCard";
import ProjectLinksCard from "../../components/FinalSubmission/ProjectLinksCard";
import UploadDocumentsCard from "../../components/FinalSubmission/UploadDocumentsCard";
import DeclarationCard from "../../components/FinalSubmission/DeclarationCard";

import "./FinalSubmission.css";

export default function FinalSubmission() {
  const [formData, setFormData] = useState({
    studentId: "",

    projectTitle: "",
    projectDomain: "",
    technologiesUsed: "",

    githubRepository: "",
    liveProjectUrl: "",
    demoVideoUrl: "",

    finalReportFile: null,
    sourceCodeFile: null,
    databaseFile: null,

    declaration: false,
  });

  // Get logged-in student
  useEffect(() => {
  const student = JSON.parse(localStorage.getItem("student"));

  if (!student) {
    console.log("Student not found in localStorage");
    return;
  }

  const studentId = student.id || student.Id;

  fetch(`http://localhost:8081/proposal/student/${studentId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch proposal");
      }

      return response.json();
    })
    .then((proposal) => {

      console.log("Proposal received:", proposal);

      setFormData((prev) => ({
        ...prev,

        studentId: studentId,

        projectTitle: proposal.projectTitle || "",
        projectDomain: proposal.projectDomain || "",
        technologiesUsed: proposal.technologyStack || "",
      }));
    })
    .catch((error) => {
      console.error("Proposal fetch error:", error);
    });

}, []);

  // Handle all input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("========== FINAL SUBMISSION START ==========");

    console.log("Student ID:", formData.studentId);

    console.log("Form Data:", formData);

    // Student ID check
    if (!formData.studentId) {
      alert("Student ID not found. Please login again.");

      return;
    }

    // Declaration check
    if (!formData.declaration) {
      alert("Please accept the declaration.");

      return;
    }

    // Create RequestDTO object
    const requestData = {
      studentId: formData.studentId,

      projectTitle: formData.projectTitle,

      projectDomain: formData.projectDomain,

      technologiesUsed: formData.technologiesUsed,

      githubRepository: formData.githubRepository,

      liveProjectUrl: formData.liveProjectUrl,

      demoVideoUrl: formData.demoVideoUrl,

      finalReportFile: formData.finalReportFile
        ? formData.finalReportFile.name
        : "",

      sourceCodeFile: formData.sourceCodeFile
        ? formData.sourceCodeFile.name
        : "",

      databaseFile: formData.databaseFile ? formData.databaseFile.name : "",

      declaration: formData.declaration,
    };

    console.log("========== SENDING TO BACKEND ==========");

    console.log(JSON.stringify(requestData, null, 2));

    try {
      const response = await fetch(
        "http://localhost:8081/final-submission/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(requestData),
        },
      );

      const result = await response.json();

      console.log("Backend Response:", result);

      if (!response.ok) {
        alert("Final submission failed!");

        console.error("Backend Error:", result);

        return;
      }

      // SUCCESS
      alert("Final Project Submitted Successfully!");

      console.log("Submission ID:", result.submissionId);

      // Clear form
      setFormData((prev) => ({
        ...prev,

        projectTitle: "",
        projectDomain: "",
        technologiesUsed: "",

        githubRepository: "",
        liveProjectUrl: "",
        demoVideoUrl: "",

        finalReportFile: null,
        sourceCodeFile: null,
        databaseFile: null,

        declaration: false,
      }));
    } catch (error) {
      console.error("Frontend Error:", error);

      alert("Cannot connect to backend.");
    }
  };

  return (
    <div className="submission-container">
      <h1 className="page-title">Final Project Submission</h1>

      <p className="page-subtitle">
        Submit your final project details, documents, and repository links for
        faculty evaluation.
      </p>

      <form onSubmit={handleSubmit}>
       <ProjectInfoCard
  formData={formData}/>
        <ProjectLinksCard formData={formData} setFormData={setFormData} />

        <UploadDocumentsCard formData={formData} setFormData={setFormData} />

        <DeclarationCard
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}
