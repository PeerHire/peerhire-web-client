// EducationalBackground.js
import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'; // Importing edit and delete icons
import './EducationalBackground.scss';

function EducationalBackground() {
    const [showForm, setShowForm] = useState(false);
    const [education, setEducation] = useState([
        { id: 1, institution: 'Harvard University', degree: 'BSc Computer Science', startDate: '2006-09-01', endDate: '2010-06-01' },
        { id: 2, institution: 'MIT', degree: 'MSc Artificial Intelligence', startDate: '2010-09-01', endDate: '2012-06-01' },
    ]);
    const [newEducation, setNewEducation] = useState({ institution: '', degree: '', startDate: '', endDate: '' });
    const [editId, setEditId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEducation({ ...newEducation, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId !== null) {
            const updatedEducation = education.map((edu) =>
                edu.id === editId ? { ...edu, ...newEducation } : edu
            );
            setEducation(updatedEducation);
            setEditId(null);
        } else {
            setEducation([...education, { ...newEducation, id: education.length + 1 }]);
        }
        setNewEducation({ institution: '', degree: '', startDate: '', endDate: '' });
        setShowForm(false);
    };

    const handleEdit = (id) => {
        const selectedEducation = education.find((edu) => edu.id === id);
        setNewEducation(selectedEducation);
        setEditId(id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        const updatedEducation = education.filter((edu) => edu.id !== id);
        setEducation(updatedEducation);
    };

    return (
        <div className="educational-background">
            <h2>Educational Background</h2>
            <div className="education-list">
                {education.map((edu) => (
                    <div key={edu.id} className="education-item">
                        <div className="edit-delete-icons">
                            <AiOutlineEdit className="edit-icon" onClick={() => handleEdit(edu.id)} />
                            <AiOutlineDelete className="delete-icon" onClick={() => handleDelete(edu.id)} />
                        </div>
                        <h3>{edu.institution}</h3>
                        <p>{edu.degree}</p>
                        <p>{edu.startDate} - {edu.endDate}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => setShowForm(true)} className="add-button">Add Education</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="education-form">
                    <div className="input-group">
                        <label htmlFor="institution">Institution</label>
                        <input
                            type="text"
                            id="institution"
                            name="institution"
                            value={newEducation.institution}
                            onChange={handleInputChange}
                            placeholder="Enter institution"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
                            value={newEducation.degree}
                            onChange={handleInputChange}
                            placeholder="Enter degree"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={newEducation.startDate}
                            onChange={handleInputChange}
                            placeholder="Start Date"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={newEducation.endDate}
                            onChange={handleInputChange}
                            placeholder="End Date"
                            required
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="submit-button">Save</button>
                        <button type="button" onClick={() => setShowForm(false)} className="cancel-button">Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default EducationalBackground;
