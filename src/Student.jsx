
import "./Student.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Student() {
  const navigate = useNavigate();
  return (
    <>
     <Header/>
    <div className="home">
      <div className="home-container">
       
        <h1>Student Project Tracking Tool</h1>

        <h2>One Platform for Students, Faculty, and Administrators</h2>

        <p className="description">
          Manage the complete student project lifecycle in one place.
          Submit project proposals, track weekly progress, receive faculty
          feedback, view project evaluation marks, generate reports, and
          stay informed with important notifications.
        </p>

        <div className="portal-buttons">

     <button  className="register-btn"  onClick={() => navigate("/register")}> 🎓 Student Portal</button>
    

          <button>
            👩‍🏫 Faculty Portal
          </button>

          <button>
            🛡️ Admin Portal
          </button>

        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Student;