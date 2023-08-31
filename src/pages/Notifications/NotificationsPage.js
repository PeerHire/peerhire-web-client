import React from "react";
import "./NotificationsPage.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      text: "New message from John Doe",
      timestamp: new Date("2023-07-15T10:30:00"),
    },
    {
      id: 2,
      text: "Your bid on 'Project X' has been accepted!",
      timestamp: new Date("2023-07-14T14:15:00"),
    },
    {
      id: 3,
      text: "You have a new project proposal from Jane Smith",
      timestamp: new Date("2023-07-13T18:20:00"),
    },
    // Add more notifications...
  ];

  function formatTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 1) {
      // const seconds = Math.floor(diff / 1000);
      // return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
      return "now";
    }

    if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  return (
    <>
    <Header/>
      <div className="notifications-page">
        <h2>Notifications</h2>
        {notifications.length === 0 ? (
          <p>You don't have any notifications</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((notification) => (
              <li key={notification.id} className="notification-item">
                <div className="notification-icon">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="notification-content">
                  <div className="notification-text">{notification.text}</div>
                  <div className="notification-timestamp">
                    {formatTimeAgo(notification.timestamp)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default NotificationsPage;
