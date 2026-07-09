import Header from "./Header";
import "./Home.css";
import heroImage from "./assets/h1.png"; // Change path if needed
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1>One Platform for Students, Faculty, and Administrators</h1>

          <p>
            CampusProject is a centralized platform for managing the complete
            student project lifecycle. Students can submit project proposals,
            track weekly progress, upload final reports, receive faculty
            feedback, view project evaluation marks, generate reports, and
            stay informed with important notifications.
          </p>

           <button className="login-btn" onClick={() => navigate("/student")}>
            Get Started
        </button>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="Campus Project" className="hero-image" />
        </div>
      </section>
    </>
  );
}

export default Home;