import { useState } from "react";
import "./Profile.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [isEditing, setIsEditing] = useState(false);

  const [editData, setEditData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNo: user?.mobileNo || "",
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
    });

    setIsEditing(false);
  };

  const handleSave = async () => {
  try {
    const response = await fetch(
      `http://localhost:8081/student/update/${user.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      }
    );

    if (response.ok) {
      const updatedUser = await response.json();

      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("Profile Updated Successfully!");

      setIsEditing(false);

      window.location.reload();
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
            <h4>Project Status</h4>
            <p>Active</p>
          </div>

        </div>

        {!isEditing ? (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <div className="profile-buttons">

            <button className="save-btn"  onClick={handleSave}>
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Profile;