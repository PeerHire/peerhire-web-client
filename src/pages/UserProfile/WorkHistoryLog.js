import React, { useState } from 'react';
import './WorkHistoryLog.scss';

function WorkHistoryLog() {
    const [projects, setProjects] = useState([
        { id: 1, title: 'E-commerce Website', duration: 'Jan 2020 - Dec 2020', description: 'Developed a full-featured e-commerce website using React and Node.js, integrating secure payment gateways and a user-friendly interface.' },
        { id: 2, title: 'Social Media App', duration: 'Feb 2021 - Nov 2021', description: 'Built a social media application with real-time chat, notifications, and a dynamic news feed using MERN stack.' },
        { id: 3, title: 'Portfolio Website', duration: 'Mar 2022 - Present', description: 'Created a personal portfolio website showcasing my projects and blogs, utilizing modern web technologies like React and CSS Grid.' },
        // ... other projects
    ]);

    return (
        <div className="work-history-log">
            <h2>Work History</h2>
            <div className="project-list">
                {projects.map(project => (
                    <div key={project.id} className="project-entry">
                        <div className="project-title">{project.title}</div>
                        <div className="project-duration">{project.duration}</div>
                        <div className="project-description">{project.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkHistoryLog;
