import { useState } from "react";
import "./StudentLogin.css";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.jpg";
import { FcGoogle } from "react-icons/fc";

function StudentLogin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
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

        localStorage.setItem("student", JSON.stringify(data));

        alert("Login Successful!");
        navigate("/student-portal");
      } else {
        const error = await response.text();
        console.log("Backend Error:", error);
        alert(error);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8081/oauth2/authorization/google";
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="login-card">
        <h2>Welcome Back!</h2>

        <p className="subtitle">Login to access your Project Tracking Portal</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={login.email}
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

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember Me
            </label>

            <span className="forgot-password">Forgot Password?</span>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {/* Divider */}

        <div className="divider">
          <span>OR</span>
        </div>

        {/* Google Button */}

        <button className="google-btn" onClick={handleGoogleLogin}>
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="register-link">
          Don't have an account?
          <span onClick={() => navigate("/register")}> Register</span>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
