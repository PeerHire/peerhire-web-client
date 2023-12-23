import React, { useState } from 'react';
import './PortfolioSection.scss';

function PortfolioSection() {
    const [projects, setProjects] = useState([
        { id: 1, title: 'Project 1', description: 'Description 1', imageUrl: 'url-to-image-1' },
        // ... other projects
    ]);

    // Functions to handle project addition and editing could be added here

    return (
        <div className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img src={project.imageUrl} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {/* Buttons for edit and delete */}
                        </div>
                    </div>
                ))}
            </div>
            {/* Add functionality to add new projects */}
        </div>
    );
}

export default PortfolioSection;
