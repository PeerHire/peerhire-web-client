import React, { useState } from 'react';
import './LanguageProficiency.scss';

function LanguageProficiency() {
    const [languages, setLanguages] = useState([
        { id: 1, language: 'English', proficiency: 'Fluent' },
        // ... other languages
    ]);

    // Functionality to add or edit languages could be added here

    return (
        <div className="language-proficiency">
            <h2>Language Proficiency</h2>
            <ul className="language-list">
                {languages.map(lang => (
                    <li key={lang.id} className="language-entry">
                        <span className="language-name">{lang.language}:</span>
                        <span className="proficiency-level">{lang.proficiency}</span>
                    </li>
                ))}
            </ul>
            {/* Add functionality to add or edit languages */}
        </div>
    );
}

export default LanguageProficiency;
