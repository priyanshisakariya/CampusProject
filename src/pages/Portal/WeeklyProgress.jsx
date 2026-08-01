import { useState } from "react";
import "./WeeklyProgress.css";

function WeeklyProgress() {
  const [form, setForm] = useState({
    week: "",
    title: "",
    completed: "",
    status: "",
    percentage: "",
    challenges: "",
    nextPlan: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Weekly Progress Submitted Successfully!");

    setForm({
      week: "",
      title: "",
      completed: "",
      status: "",
      percentage: "",
      challenges: "",
      file: null,
    });
  };

  return (
    <div className="weekly-container">

      <div className="weekly-card">

        <h1>Weekly Progress Report</h1>

        <form onSubmit={handleSubmit}>

          <div className="grid">

            <div>
              <label>Week</label>
              <select
                name="week"
                value={form.week}
                onChange={handleChange}
                required
              >
                <option value="">Select Week</option>
                <option>Week 1</option>
                <option>Week 2</option>
                <option>Week 3</option>
                <option>Week 4</option>
                <option>Week 5</option>
                <option>Week 6</option>
                <option>Week 7</option>
                <option>Week 8</option>
                <option>Week 9</option>
                <option>Week 10</option>
                <option>Week 11</option>
                <option>Week 12</option>
              </select>
            </div>

            <div>
              <label>Project Title</label>
              <input
                type="text"
                value="Student Project Tracking System"
                readOnly
              />
            </div>

          </div>

          <label>Progress Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example : Login Module Completed"
            required
          />

          <label>Work Completed</label>

          <textarea
            name="completed"
            value={form.completed}
            onChange={handleChange}
            placeholder="Describe work completed..."
            required
          />

          <div className="grid">

            <div>

              <label>Status</label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option>Completed</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select>

            </div>

            <div>

              <label>Completion (%)</label>

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

          <label>Challenges Faced</label>

          <textarea
            name="challenges"
            value={form.challenges}
            onChange={handleChange}
            placeholder="Mention any issues..."
          />

      

          <label>Upload Screenshot / Document</label>

          <input
            type="file"
            onChange={handleChange}
          />

          <button type="submit">
            Submit Weekly Progress
          </button>

        </form>

      </div>

    </div>
  );
}

export default WeeklyProgress;