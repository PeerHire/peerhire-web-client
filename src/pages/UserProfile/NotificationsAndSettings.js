import React, { useState } from 'react';
import './NotificationsAndSettings.scss';

function NotificationsAndSettings() {
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const toggleEmailNotifications = () => {
        setEmailNotifications(!emailNotifications);
    };

    const toggleSmsNotifications = () => {
        setSmsNotifications(!smsNotifications);
    };

    const paymentHistory = [
        {
            id: 1,
            project: 'Website Development',
            milestone: 'Initial Payment',
            amount: '$500',
            date: '2023-01-15'
        },
        {
            id: 2,
            project: 'Mobile App Development',
            milestone: 'Milestone 1',
            amount: '$1000',
            date: '2023-02-20'
        },
        {
            id: 3,
            project: 'Website Development',
            milestone: 'Final Payment',
            amount: '$1500',
            date: '2023-03-10'
        },
        // Add more payment records as needed
    ];

    return (
        <div className="notifications-settings">
            <h2>Notifications and Settings</h2>
            <div className="settings-section">
                <h3>Notification Preferences</h3>
                <div className="notification-setting">
                    <label>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={toggleEmailNotifications}
                        />
                        Email Notifications
                    </label>
                </div>
                <div className="notification-setting">
                    <label>
                        <input
                            type="checkbox"
                            checked={smsNotifications}
                            onChange={toggleSmsNotifications}
                        />
                        SMS Notifications
                    </label>
                </div>
            </div>
            <div className="settings-section">
                <h3>Payment History</h3>
                <div className="payment-history">
                    {paymentHistory.length > 0 ? (
                        <ul>
                            {paymentHistory.map(payment => (
                                <li key={payment.id} className="payment-entry">
                                    <div className="payment-details">
                                        <span className="project-name">{payment.project}</span>
                                        <span className="milestone-name">{payment.milestone}</span>
                                    </div>
                                    <div className="payment-info">
                                        <span className="payment-amount">{payment.amount}</span>
                                        <span className="payment-date">{payment.date}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No payment history available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NotificationsAndSettings;
