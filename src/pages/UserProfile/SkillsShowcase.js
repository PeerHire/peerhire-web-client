import React, { useState } from 'react';
import './SkillsShowcase.scss';

function SkillsShowcase() {
    const [skills, setSkills] = useState([
        { id: 1, name: 'JavaScript', level: 80 }, // Level as percentage for graphical representation
        // ... other skills
    ]);

    const handleChange = (index, e) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = { ...updatedSkills[index], level: e.target.value };
        setSkills(updatedSkills);
    };

    return (
        <div className="skills-showcase">
            <h2>Skills Showcase</h2>
            {skills.map((skill, index) => (
                <div key={skill.id} className="skill">
                    <label>{skill.name}</label>
                    <input
                        type="range"
                        value={skill.level}
                        onChange={(e) => handleChange(index, e)}
                    />
                </div>
            ))}
            {/* Add functionality to add or remove skills */}
        </div>
    );
}

export default SkillsShowcase;
