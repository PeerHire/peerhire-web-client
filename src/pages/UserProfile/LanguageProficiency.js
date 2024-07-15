import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './LanguageProficiency.scss';

function LanguageProficiency() {
    const [languages, setLanguages] = useState([
        { id: 1, language: 'English', proficiency: 'Fluent' },
        { id: 2, language: 'Spanish', proficiency: 'Intermediate' },
        { id: 3, language: 'French', proficiency: 'Beginner' },
    ]);

    const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Fluent'];

    const [showForm, setShowForm] = useState(false);
    const [newLanguage, setNewLanguage] = useState({
        language: '',
        proficiency: ''
    });

    const [editId, setEditId] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLanguage({ ...newLanguage, [name]: value });
    };

    const handleAddOrUpdateLanguage = () => {
        if (newLanguage.language && newLanguage.proficiency) {
            if (editId !== null) {
                setLanguages(languages.map(lang => 
                    lang.id === editId ? { ...newLanguage, id: editId } : lang
                ));
                setEditId(null);
            } else {
                setLanguages([...languages, { ...newLanguage, id: languages.length + 1 }]);
            }
            setNewLanguage({ language: '', proficiency: '' });
            setShowForm(false);
        }
    };

    const handleEdit = (lang) => {
        setNewLanguage(lang);
        setEditId(lang.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setLanguages(languages.filter(lang => lang.id !== id));
    };

    return (
        <div className="language-proficiency">
            <h2>Language Proficiency</h2>
            <ul className="language-list">
                {languages.map(lang => (
                    <li key={lang.id} className="language-entry">
                        <div className="language-content">
                            <span className="language-name">{lang.language}:</span>
                            <span className="proficiency-level">{lang.proficiency}</span>
                        </div>
                        <div className="language-actions">
                            <AiOutlineEdit className="icon edit-icon" onClick={() => handleEdit(lang)} />
                            <AiOutlineDelete className="icon delete-icon" onClick={() => handleDelete(lang.id)} />
                        </div>
                    </li>
                ))}
            </ul>
            <button className="add-language-btn" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Language'}
            </button>
            {showForm && (
                <div className="language-form">
                    <input
                        type="text"
                        name="language"
                        placeholder="Language"
                        value={newLanguage.language}
                        onChange={handleInputChange}
                    />
                    <select
                        name="proficiency"
                        value={newLanguage.proficiency}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Proficiency</option>
                        {proficiencyLevels.map(level => (
                            <option key={level} value={level}>{level}</option>
                        ))}
                    </select>
                    <button onClick={handleAddOrUpdateLanguage}>
                        {editId ? 'Update Language' : 'Add Language'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default LanguageProficiency;
