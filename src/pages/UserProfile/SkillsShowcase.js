import React, { useState } from 'react';
import {  AiOutlineDelete } from 'react-icons/ai';
import './SkillsShowcase.scss';

function SkillsShowcase() {
    const [skills, setSkills] = useState([
        { id: 1, name: 'JavaScript', level: 'Intermediate' },
        { id: 2, name: 'React', level: 'Advanced' },
        { id: 3, name: 'Node.js', level: 'Intermediate' },
        { id: 4, name: 'HTML', level: 'Beginner' },
        { id: 5, name: 'CSS', level: 'Intermediate' },
    ]);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillLevel, setNewSkillLevel] = useState('Beginner');
    const [error, setError] = useState('');

    const handleChange = (index, e) => {
        const updatedSkills = [...skills];
        updatedSkills[index] = { ...updatedSkills[index], level: e.target.value };
        setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        if (newSkillName.trim() === '') {
            setError('Skill name cannot be empty');
            return;
        }
        setError('');
        const newSkill = { id: skills.length + 1, name: newSkillName, level: newSkillLevel };
        setSkills([...skills, newSkill]);
        setNewSkillName('');
        setNewSkillLevel('Beginner');
    };

    const handleRemoveSkill = (id) => {
        const filteredSkills = skills.filter((skill) => skill.id !== id);
        setSkills(filteredSkills);
    };

    return (
        <div className="skills-showcase">
            <h2>Skills Showcase</h2>
            {skills.map((skill, index) => (
                <div key={skill.id} className="skill">
                    <div className="skill-info">
                        <label>{skill.name}</label>
                        <select
                            value={skill.level}
                            onChange={(e) => handleChange(index, e)}
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="actions">
                        {skills.length > 1 && (
                            <AiOutlineDelete
                                className="remove-icon"
                                onClick={() => handleRemoveSkill(skill.id)}
                            />
                        )}
                    </div>
                </div>
            ))}
            <div className="add-skill">
                <input
                    type="text"
                    placeholder="Enter skill name"
                    value={newSkillName}
                    onChange={(e) => setNewSkillName(e.target.value)}
                />
                <select
                    value={newSkillLevel}
                    onChange={(e) => setNewSkillLevel(e.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <button onClick={handleAddSkill} className="add-button">Add Skill</button>
            </div>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default SkillsShowcase;
