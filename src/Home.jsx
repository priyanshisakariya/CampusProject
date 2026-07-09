import Header from "./Header";
import "./Home.css";

function Home() {
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

          <button>Get Started</button>

        </div>

        <div className="hero-right">

          {/* Image will come here later */}

        </div>

      </section>
    </>
  );
}

export default Home;