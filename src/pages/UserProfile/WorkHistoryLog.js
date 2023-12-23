import React, { useState } from 'react';
import './WorkHistoryLog.scss';

function WorkHistoryLog() {
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', duration: 'Jan 2020 - Dec 2020', description: 'Description 1' },
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
