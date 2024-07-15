import React, { useState } from 'react';
import './AvailabilityStatus.scss';

function AvailabilityStatus() {
    const [isAvailable, setIsAvailable] = useState(false);

    const toggleAvailability = () => {
        setIsAvailable(!isAvailable);
    };

    return (
        <div className="availability-status">
            <h2>Availability Status</h2>
            <div className="status-control">
                <label className="switch">
                    <input type="checkbox" checked={isAvailable} onChange={toggleAvailability} />
                    <span className="slider"></span>
                </label>
                <span className={`status-text ${isAvailable ? 'available' : 'not-available'}`}>
                    {isAvailable ? 'Available' : 'Not Available'}
                </span>
            </div>
        </div>
    );
}

export default AvailabilityStatus;
