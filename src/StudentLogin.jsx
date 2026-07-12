import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StudentLogin.css";

function StudentLogin() {

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(login);

    try {
      const response = await fetch("http://localhost:8081/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        alert("Login Successful!");

        navigate("/student-dashboard");
      } else {
        alert("Invalid Name or Password!");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Student Login</h2>

        <p className="subtitle">
          Login to access your Project Tracking Portal
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={login.fullName}
            onChange={handleChange}
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={login.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">
          Don't have an account?
          <span onClick={() => navigate("/student-register")}>
            {" "}Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default StudentLogin;