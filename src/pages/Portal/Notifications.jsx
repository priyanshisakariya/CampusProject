import NotificationList from "../../components/Notifications/NotificationList";
import EmptyNotification from "../../components/Notifications/EmptyNotification";

import "./Notifications.css";

function Notifications() {

  // Later this will come from your backend
  const hasNotifications = true;

  return (
    <div className="notifications-container">

      <h1 className="page-title">
        Notifications
      </h1>

      <p className="page-subtitle">
        Stay updated with project activities, viva schedules,
        marks, and department announcements.
      </p>

      {hasNotifications ? (
        <NotificationList />
      ) : (
        <EmptyNotification />
      )}

    </div>
  );
}

export default Notifications;