import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NotificationPanel.scss"; // Import your SCSS file for styling

function NotificationPanel() {
  const notifications = [
    {
      id: 1,
      text: "New message from John Doe",
      timestamp: new Date("2023-07-15T10:30:00"),
    },
    {
      id: 2,
      text: "Your bid on 'Project Management with Finance' has been accepted!",
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
    <div className="notification-panel">
        <div className="notification-list">
          {notifications.length === 0 ? (
            <p>You don't have any notifications</p>
          ) : (
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-panel-item">
                  <span className="notification-message">
                    {notification.text}
                  </span>
                  <span className="notification-time">
                    {formatTimeAgo(notification.timestamp)}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <Link to="/notifications" className="see-all-link">
            See All Notifications
          </Link>
        </div>
    </div>
  );
}

export default NotificationPanel;
