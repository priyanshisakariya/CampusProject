import { useState, useEffect } from "react";
import "./WeeklyProgress.css";

function WeeklyProgress() {

  const [form, setForm] = useState({
    studentId: "",
    week: "",
    title: "",
    completed: "",
    status: "",
    percentage: "",
    challenges: "",
    nextPlan: "",
    file: null,
  });


  // Get logged-in student from localStorage
  useEffect(() => {

    const student = JSON.parse(
      localStorage.getItem("student")
    );

    if (student) {

      setForm((prev) => ({
        ...prev,

        studentId:
          student.id || student.Id || "",

      }));

    }

  }, []);


  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (files) {

      setForm({
        ...form,
        file: files[0],
      });

    } else {

      setForm({
        ...form,
        [name]: value,
      });

    }
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("========== WEEKLY PROGRESS START ==========");

    console.log("Student ID:", form.studentId);

    console.log("Form Data:", form);


    // Student ID check
    if (!form.studentId) {

      alert(
        "Student ID not found. Please login again."
      );

      return;
    }


    // Data that will be sent to backend

    const progressData = {

      studentId: Number(form.studentId),

      week: form.week,

      projectTitle:
        "Student Project Tracking System",

      progressTitle: form.title,

      workCompleted: form.completed,

      status: form.status,

      percentage: Number(form.percentage),

      challenges: form.challenges,

      nextPlan: form.nextPlan,

      fileName:
        form.file
          ? form.file.name
          : "",
    };


    console.log(
      "========== SENDING TO BACKEND =========="
    );

    console.log(
      JSON.stringify(progressData, null, 2)
    );


    try {

      const response = await fetch(
        "http://localhost:8081/weekly-progress/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(progressData),
        }
      );


      const result = await response.json();


      console.log(
        "Backend Response:",
        result
      );


      // Backend error
      if (!response.ok) {

        console.error(
          "Backend Error:",
          result
        );

        alert(
          result.message ||
          "Weekly progress submission failed!"
        );

        return;
      }


      // Success
      alert(
        "Weekly Progress Submitted Successfully!"
      );


      // Reset form

      setForm({

        studentId:
          form.studentId,

        week: "",

        title: "",

        completed: "",

        status: "",

        percentage: "",

        challenges: "",

        nextPlan: "",

        file: null,

      });


      // Reset file input
      e.target.reset();


    } catch (error) {

      console.error(
        "Network Error:",
        error
      );

      alert(
        "Cannot connect to backend server."
      );

    }

  };


  return (

    <div className="weekly-container">

      <div className="weekly-card">

        <h1>
          Weekly Progress Report
        </h1>


        <form onSubmit={handleSubmit}>


          {/* Week + Project */}

          <div className="grid">

            <div>

              <label>
                Week
              </label>

              <select
                name="week"
                value={form.week}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Week
                </option>

                <option>
                  Week 1
                </option>

                <option>
                  Week 2
                </option>

                <option>
                  Week 3
                </option>

                <option>
                  Week 4
                </option>

                <option>
                  Week 5
                </option>

                <option>
                  Week 6
                </option>

              </select>

            </div>


            <div>

              <label>
                Project Title
              </label>

              <input
                type="text"
                value="Student Project Tracking System"
                readOnly
              />

            </div>

          </div>


          {/* Progress Title */}

          <label>
            Progress Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example : Login Module Completed"
            required
          />


          {/* Work Completed */}

          <label>
            Work Completed
          </label>

          <textarea
            name="completed"
            value={form.completed}
            onChange={handleChange}
            placeholder="Describe work completed..."
            required
          />


          {/* Status + Percentage */}

          <div className="grid">

            <div>

              <label>
                Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select Status
                </option>

                <option>
                  Completed
                </option>

                <option>
                  In Progress
                </option>

                <option>
                  Pending
                </option>

              </select>

            </div>


            <div>

              <label>
                Completion (%)
              </label>

              <input
                type="number"
                min="0"
                max="100"
                name="percentage"
                value={form.percentage}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Challenges */}

          <label>
            Challenges Faced
          </label>

          <textarea
            name="challenges"
            value={form.challenges}
            onChange={handleChange}
            placeholder="Mention any issues..."
          />


          {/* Next Plan */}

          <label>
            Next Plan
          </label>

          <textarea
            name="nextPlan"
            value={form.nextPlan}
            onChange={handleChange}
            placeholder="What will you work on next?"
          />


          {/* File */}

          <label>
            Upload Screenshot / Document
          </label>

          <input
            type="file"
            name="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleChange}
          />


          {/* Submit */}

          <button type="submit">
            Submit Weekly Progress
          </button>

        </form>

      </div>

    </div>

  );

}

export default WeeklyProgress;