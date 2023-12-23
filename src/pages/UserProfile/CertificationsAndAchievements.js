import React, { useState } from 'react';
import './CertificationsAndAchievements.scss';

function CertificationsAndAchievements() {
    const [certifications, setCertifications] = useState([
        { id: 1, title: 'Certification 1', organization: 'Organization 1', year: 2020 },
        // ... other certifications
    ]);

    // Functionality for adding new certifications could be implemented here

    return (
        <div className="certifications-achievements">
            <h2>Certifications and Achievements</h2>
            <div className="certifications-list">
                {certifications.map(cert => (
                    <div key={cert.id} className="certification-entry">
                        <div className="cert-title">{cert.title}</div>
                        <div className="cert-details">
                            <span>{cert.organization}</span> - <span>{cert.year}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Add functionality to add new certifications */}
        </div>
    );
}

export default CertificationsAndAchievements;
