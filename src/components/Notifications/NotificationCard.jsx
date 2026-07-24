import {
  FaFileAlt,
  FaCalendarAlt,
  FaFolderOpen,
  FaAward,
  FaBullhorn,
  FaGraduationCap,
} from "react-icons/fa";

function NotificationCard({
  type,
  title,
  message,
  time,
}) {

  const getIcon = () => {

    switch (type) {

      case "proposal":
        return <FaFileAlt className="notification-icon proposal" />;

      case "weekly":
        return <FaCalendarAlt className="notification-icon weekly" />;

      case "submission":
        return <FaFolderOpen className="notification-icon submission" />;

      case "marks":
        return <FaAward className="notification-icon marks" />;

      case "viva":
        return <FaGraduationCap className="notification-icon viva" />;

      default:
        return <FaBullhorn className="notification-icon announcement" />;
    }
  };

  return (

    <div className="notification-card">

      <div className="notification-left">

        {getIcon()}

      </div>

      <div className="notification-right">

        <h3>{title}</h3>

        <p>{message}</p>

        <span>{time}</span>

      </div>

    </div>

  );
}

export default NotificationCard;