import { useState } from "react";
import "./StudentRegister.css";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    fullName: "",
    password: "",
    email: "",
    mobileNo: "",
    department: "",
    sem: "",
    enrollmentNo: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(student);

    try {
      const response = await fetch(
        "http://localhost:8081/student/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        alert("Registration Successful!");

        navigate("/student-login");
      } else {
        alert("Registration Failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error!");
    }
  };

  return (
    <div className="register-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={student.fullName}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={student.password}
          onChange={handleChange}
          required
        />

        <label>Email ID</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email ID"
          value={student.email}
          onChange={handleChange}
          required
        />

        <label>Mobile Number</label>
        <input
          type="text"
          name="mobileNo"
          placeholder="Enter Mobile Number"
          value={student.mobileNo}
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <select
          name="department"
          value={student.department}
          onChange={handleChange}
          required
        >
          <option value="">Select Department</option>
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
          <option value="Computer Science">Computer Science</option>
          <option value="IT">IT</option>
        </select>

        <label>Semester</label>
        <select
          name="sem"
          value={student.sem}
          onChange={handleChange}
          required
        >
          <option value="">Select Semester</option>
          <option value="Sem 1">Sem 1</option>
          <option value="Sem 2">Sem 2</option>
          <option value="Sem 3">Sem 3</option>
          <option value="Sem 4">Sem 4</option>
        </select>

        <label>Enrollment Number</label>
        <input
          type="text"
          name="enrollmentNo"
          placeholder="Enter Enrollment Number"
          value={student.enrollmentNo}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>

        <p className="login-link">
          Already Have an Account?
          <span onClick={() => navigate("/student-login")}>
            {" "}Login
          </span>
        </p>

      </form>

    </div>
  );
}

export default StudentRegister;