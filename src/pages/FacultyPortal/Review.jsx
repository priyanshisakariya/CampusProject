import { useState } from "react";
import "./Review.css";

function Review() {
  const proposals = [
    {
      id: 1,
      student: "Rahul Patel",
      project: "Student Project Tracking Tool",
      technology: "React + Spring Boot",
      date: "12 Aug 2026",
      status: "Pending",
      objective:
        "Develop a web-based system to track student project progress, reviews, marks, and final reports.",
      problem:
        "Manual project tracking is difficult and lacks transparency between students and faculty.",
    },
    {
      id: 2,
      student: "Priya Shah",
      project: "Hospital Management System",
      technology: "MERN Stack",
      date: "10 Aug 2026",
      status: "Approved",
      objective:
        "Digitize hospital appointments and patient records.",
      problem:
        "Hospitals struggle with paper-based records and appointment scheduling.",
    },
    {
      id: 3,
      student: "Jay Mehta",
      project: "AI Resume Analyzer",
      technology: "Python + Flask",
      date: "09 Aug 2026",
      status: "Rejected",
      objective:
        "Analyze resumes using NLP techniques.",
      problem:
        "Recruiters spend too much time screening resumes manually.",
    },
  ];

  const [selectedProposal, setSelectedProposal] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProposals = proposals.filter((proposal) => {
    const matchSearch =
      proposal.student.toLowerCase().includes(search.toLowerCase()) ||
      proposal.project.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || proposal.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div className="review-page">

      <div className="review-header">
        <h1>Project Proposal Review</h1>
        <p>Review, approve or reject student project proposals.</p>
      </div>

      <div className="review-toolbar">

        <input
          type="text"
          placeholder="Search Student / Project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>

      </div>

      <div className="proposal-grid">

        {filteredProposals.map((proposal) => (

          <div className="proposal-card" key={proposal.id}>

            <div className="proposal-top">

              <h3>{proposal.project}</h3>

              <span className={`status ${proposal.status.toLowerCase()}`}>
                {proposal.status}
              </span>

            </div>

            <p><strong>Student :</strong> {proposal.student}</p>

            <p><strong>Technology :</strong> {proposal.technology}</p>

            <p><strong>Submitted :</strong> {proposal.date}</p>

            <button
              className="view-btn"
              onClick={() => setSelectedProposal(proposal)}
            >
              View Proposal
            </button>

          </div>

        ))}

      </div>

      {selectedProposal && (

        <div className="modal-overlay">

          <div className="proposal-modal">

            <h2>{selectedProposal.project}</h2>

            <p><strong>Student :</strong> {selectedProposal.student}</p>

            <p><strong>Technology :</strong> {selectedProposal.technology}</p>

            <p><strong>Objective :</strong></p>

            <p>{selectedProposal.objective}</p>

            <p><strong>Problem Statement :</strong></p>

            <p>{selectedProposal.problem}</p>

            <div className="modal-buttons">

              <button className="approve">
                Approve
              </button>

              <button className="reject">
                Reject
              </button>

              <button className="changes">
                Request Changes
              </button>

            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedProposal(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Review;