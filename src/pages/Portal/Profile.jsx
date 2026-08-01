import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNo: user?.mobileNo || "",

    address: user?.studentProfile?.address || "",
    dateOfBirth: user?.studentProfile?.dateOfBirth || "",
    skills: user?.studentProfile?.skills || "",
    linkedInUrl: user?.studentProfile?.linkedInUrl || "",
  });

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setEditData({
      fullName: user?.fullName || "",
      email: user?.email || "",
      mobileNo: user?.mobileNo || "",

      address: user?.studentProfile?.address || "",
      dateOfBirth: user?.studentProfile?.dateOfBirth || "",
      skills: user?.studentProfile?.skills || "",
      linkedInUrl: user?.studentProfile?.linkedInUrl || "",
    });

    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      const requestData = {
        fullName: editData.fullName,
        email: editData.email,
        mobileNo: editData.mobileNo,

        enrollmentNo: user.enrollmentNo,
        department: user.department,
        sem: user.sem,
        password: user.password,

        studentProfile: {
          address: editData.address,
          dateOfBirth: editData.dateOfBirth,
          skills: editData.skills,
          linkedInUrl: editData.linkedInUrl,
        },
      };

      const response = await fetch(
        `http://localhost:8081/student/update/${user.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(requestData),
        },
      );

      if (response.ok) {
        const updatedUser = await response.json();

        localStorage.setItem("user", JSON.stringify(updatedUser));

        setUser(updatedUser);

        alert("Profile Updated Successfully!");

        setIsEditing(false);
      } else {
        alert("Failed to update profile!");
      }
    } catch (error) {
      console.error(error);

      alert("Server Error!");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-image">
            <span>{user?.fullName?.charAt(0)}</span>
          </div>

          {isEditing ? (
            <input
              className="edit-input"
              type="text"
              name="fullName"
              value={editData.fullName}
              onChange={handleChange}
            />
          ) : (
            <h2>{user?.fullName}</h2>
          )}

          <p>Master of Computer Applications</p>
        </div>

        <div className="profile-details">
          <div className="detail-box">
            <h4>Email</h4>

            {isEditing ? (
              <input
                className="edit-input"
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />
            ) : (
              <p>{user?.email}</p>
            )}
          </div>

          <div className="detail-box">
            <h4>Phone</h4>

            {isEditing ? (
              <input
                className="edit-input"
                type="text"
                name="mobileNo"
                value={editData.mobileNo}
                onChange={handleChange}
              />
            ) : (
              <p>{user?.mobileNo}</p>
            )}
          </div>

          <div className="detail-box">
            <h4>Enrollment No</h4>

            <p>{user?.enrollmentNo}</p>
          </div>

          <div className="detail-box">
            <h4>Department</h4>

            <p>{user?.department}</p>
          </div>

          <div className="detail-box">
            <h4>Semester</h4>

            <p>{user?.sem}</p>
          </div>

          <div className="detail-box">
            <h4>Address</h4>

            {isEditing ? (
              <textarea
                className="edit-input"
                name="address"
                value={editData.address}
                onChange={handleChange}
                rows="3"
              />
            ) : (
              <p>{user?.studentProfile?.address || "Not Added"}</p>
            )}
          </div>

          <div className="detail-box">
            <h4>Date of Birth</h4>

            {isEditing ? (
              <input
                className="edit-input"
                type="date"
                name="dateOfBirth"
                value={editData.dateOfBirth}
                onChange={handleChange}
              />
            ) : (
              <p>{user?.studentProfile?.dateOfBirth || "Not Added"}</p>
            )}
          </div>

          <div className="detail-box">
            <h4>Skills</h4>

            {isEditing ? (
              <input
                className="edit-input"
                type="text"
                name="skills"
                placeholder="Java, React, Spring Boot"
                value={editData.skills}
                onChange={handleChange}
              />
            ) : (
              <p>{user?.studentProfile?.skills || "Not Added"}</p>
            )}
          </div>

          <div className="detail-box">
            <h4>LinkedIn</h4>

            {isEditing ? (
              <input
                className="edit-input"
                type="url"
                name="linkedInUrl"
                placeholder="https://linkedin.com/in/username"
                value={editData.linkedInUrl}
                onChange={handleChange}
              />
            ) : user?.studentProfile?.linkedInUrl ? (
              <a
                href={user.studentProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.studentProfile.linkedInUrl}
              </a>
            ) : (
              <p>Not Added</p>
            )}
          </div>

          <div className="detail-box">
            <h4>Project Status</h4>

            <p>Active</p>
          </div>
        </div>

        {!isEditing ? (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        ) : (
          <div className="profile-buttons">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>

            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
