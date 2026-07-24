import NotificationCard from "./NotificationCard";

function NotificationList() {
  return (
    <>

      <NotificationCard
        type="proposal"
        title="Proposal Approved"
        message="Your project proposal has been approved by your faculty guide."
        time="Today • 10:30 AM"
      />

      <NotificationCard
        type="weekly"
        title="Weekly Progress Reviewed"
        message="Week 4 progress has been reviewed. Check faculty feedback."
        time="Yesterday • 2:15 PM"
      />

      <NotificationCard
        type="submission"
        title="Final Project Submitted"
        message="Your final project documents have been submitted successfully."
        time="22 July 2026"
      />

      <NotificationCard
        type="viva"
        title="Viva Examination Scheduled"
        message="Date: 30 July 2026 | Time: 11:00 AM | Venue: Seminar Hall B"
        time="21 July 2026"
      />

      <NotificationCard
        type="marks"
        title="Marks Published"
        message="Your final project marks are now available."
        time="20 July 2026"
      />

      <NotificationCard
        type="announcement"
        title="Department Announcement"
        message="Final submission deadline has been extended to 31 July 2026."
        time="18 July 2026"
      />

    </>
  );
}

export default NotificationList;