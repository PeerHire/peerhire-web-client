import React, { useState } from 'react';
import './EducationalBackground.scss';

function EducationalBackground() {
    const [education, setEducation] = useState([
        { id: 1, institution: '', degree: '', year: '' },
        // Initialize with actual data
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index] = { ...newEducation[index], [name]: value };
        setEducation(newEducation);
    };

    return (
        <div className="educational-background">
            <h2>Educational Background</h2>
            {education.map((edu, index) => (
                <div key={edu.id} className="education-entry">
                    <input
                        type="text"
                        name="institution"
                        value={edu.institution}
                        onChange={(e) => handleChange(index, e)}
                        placeholder="Institution"
                    />
                    {/* Repeat for other fields like degree, year */}
                </div>
            ))}
            {/* Add button to add more education entries */}
        </div>
    );
}

export default EducationalBackground;
