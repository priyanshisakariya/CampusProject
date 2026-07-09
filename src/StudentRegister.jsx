import { useState } from "react";
import "./StudentRegister.css";
import { useNavigate } from "react-router-dom";
function StudentRegister() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    username: "",
    password: "",
    emailid: "",
    mobileno: "",
    department: "",
    sem: "",
    enrollmentno: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);

    // You can connect Spring Boot API here
    // fetch("http://localhost:8080/student/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(student)
    // })
  };


  return (
    <div className="register-container">

      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={student.username}
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
          name="Email ID"
          placeholder="Enter Email ID"
          value={student.emailid}
          onChange={handleChange}
          required
        />


        <label>Mobile No</label>
        <input
          type="text"
          name="Mobile No"
          placeholder="Enter Mobile Number"
          value={student.mobileno}
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


        <label>Enrollment No</label>
        <input
          type="text"
          name="Enrollment No"
          placeholder="Enter Enrollment Number"
          value={student.EnrollmentNo}
          onChange={handleChange}
          required
        />


        <button type="submit">
          Register
        </button>
        <p className="login-link"> Already Have an Account? 
            <span onClick={() => navigate("/student")}>Login</span>
</p>
      </form>

    </div>
  );
}

export default StudentRegister;