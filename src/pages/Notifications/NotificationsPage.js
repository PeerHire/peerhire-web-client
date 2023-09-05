import React from 'react';
import './NotificationsPage.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const NotificationsPage = () => {
  const notifications = [
    {
      icon: '🎉',
      text: 'Congratulations! You have a new follower.',
      timestamp: new Date("2023-07-15T10:30:00"),
    },
    {
      icon: '📢',
      text: 'You received a message from a friend.',
      timestamp: new Date("2023-07-14T14:15:00"),
    },
    {
      icon: '👏',
      text: 'Your post reached 1,000 likes!',
      timestamp: new Date("2023-07-13T18:20:00"),
    },
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
      <div className="notifications-container">
        <h2>Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <div className="notification-icon">{notification.icon}</div>
              <div className="notification-content">
                <div className="notification-text">{notification.text}</div>
                <div className="notification-timestamp">
                {formatTimeAgo(notification.timestamp)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
      <Footer/>
    </>
    
  );
};

export default NotificationsPage;

