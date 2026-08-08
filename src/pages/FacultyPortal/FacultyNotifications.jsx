import { useState } from "react";
import "./FacultyNotifications.css";

function FacultyNotifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Project Proposal Deadline",
      message: "Please review all pending project proposals before 20 August.",
      date: "18 Aug 2026",
      read: false,
    },
    {
      id: 2,
      title: "Weekly Review Reminder",
      message: "Students have submitted their Week 5 progress reports.",
      date: "17 Aug 2026",
      read: false,
    },
    {
      id: 3,
      title: "Internal Evaluation",
      message: "Internal evaluation marks must be submitted before 30 August.",
      date: "15 Aug 2026",
      read: true,
    },
    {
      id: 4,
      title: "Faculty Meeting",
      message: "Faculty meeting scheduled on Friday at 11:00 AM.",
      date: "14 Aug 2026",
      read: true,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const filteredNotifications = notifications.filter((item) => {

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      (filter === "Unread" && !item.read) ||
      (filter === "Read" && item.read);

    return matchesSearch && matchesFilter;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notification-page">

      <div className="notification-header">
        <h1>Notifications</h1>
        <p>View important announcements and reminders.</p>
      </div>

      <div className="summary-cards">

        <div className="summary-card">
          <h3>Total</h3>
          <span>{notifications.length}</span>
        </div>

        <div className="summary-card unread">
          <h3>Unread</h3>
          <span>{unreadCount}</span>
        </div>

      </div>

      <div className="notification-toolbar">

        <input
          type="text"
          placeholder="Search notifications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Unread</option>
          <option>Read</option>
        </select>

      </div>

      <div className="notification-list">

        {filteredNotifications.map((item) => (

          <div
            key={item.id}
            className={`notification-card ${item.read ? "" : "new-notification"}`}
          >

            <div className="notification-top">

              <div>

                <h3>{item.title}</h3>

                <small>{item.date}</small>

              </div>

              {!item.read && (
                <span className="badge">
                  New
                </span>
              )}

            </div>

            <p>{item.message}</p>

            {!item.read && (
              <button
                className="read-btn"
                onClick={() => markAsRead(item.id)}
              >
                Mark as Read
              </button>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default FacultyNotifications;