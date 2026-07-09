import Header from "./Header";
import Footer from "./Footer";
import "./Services.css";
import { FaFileUpload, FaUserGraduate, FaChartLine } from "react-icons/fa";

function Services() {
  return (
    <>
      <Header />

      <section className="services">

        <div className="services-container">

          <h1>Our Services</h1>

          <p className="services-intro">
            CampusProject provides a complete platform for managing student
            academic projects from proposal submission to final evaluation.
          </p>

          <div className="service-cards">

            <div className="service-card">
              <FaFileUpload />
              <h2>📄 Project Proposal Submission</h2>
              <p>
                Students can submit project titles, domains, technology stack,
                descriptions, and proposal documents online.
              </p>
            </div>

            <div className="service-card">
              <FaUserGraduate />
              <h2>👨‍🏫 Faculty Review</h2>
              <p>
                Faculty members review proposals, approve or reject submissions,
                and provide comments for improvements.
              </p>
            </div>

            <div className="service-card">
              <FaChartLine />   
              <h2>📈 Weekly Progress Tracking</h2>
              <p>
                Students submit weekly progress updates while faculty monitor
                development and provide regular feedback.
              </p>
            </div>

            <div className="service-card">
              <FaFileUpload />  
              <h2>📂 Final Project Submission</h2>
              <p>
                Upload final project reports and submit source code links for
                evaluation.
              </p>
            </div>

            <div className="service-card">
              <h2>📊 Project Evaluation</h2>
              <p>
                Students can view project marks, feedback, approval status,
                and evaluation reports.
              </p>
            </div>

            <div className="service-card">
              <h2>🔔 Notifications & Reports</h2>
              <p>
                Receive important announcements, exam reminders, project
                deadlines, and generate project status reports.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Services;