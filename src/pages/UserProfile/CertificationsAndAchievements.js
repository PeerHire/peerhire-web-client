import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './CertificationsAndAchievements.scss';

function CertificationsAndAchievements() {
    const [certifications, setCertifications] = useState([
        { id: 1, title: 'React Developer Certification', organization: 'Coursera', year: 2020 },
        { id: 2, title: 'Full Stack Web Developer', organization: 'Udemy', year: 2021 },
        { id: 3, title: 'AWS Certified Solutions Architect', organization: 'Amazon', year: 2022 },
    ]);

    const [newCert, setNewCert] = useState({
        title: '',
        organization: '',
        year: '',
    });

    const [editId, setEditId] = useState(null);
    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCert({ ...newCert, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.title = newCert.title ? "" : "Title is required.";
        tempErrors.organization = newCert.organization ? "" : "Organization is required.";
        tempErrors.year = newCert.year && /^[0-9]{4}$/.test(newCert.year) ? "" : "Valid year is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleAddOrUpdateCertification = () => {
        if (validate()) {
            if (editId !== null) {
                setCertifications(certifications.map(cert => 
                    cert.id === editId ? { ...newCert, id: editId } : cert
                ));
                setEditId(null);
            } else {
                setCertifications([...certifications, { ...newCert, id: certifications.length + 1 }]);
            }
            setNewCert({ title: '', organization: '', year: '' });
            setShowForm(false);
        }
    };

    const handleEdit = (cert) => {
        setNewCert(cert);
        setEditId(cert.id);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setCertifications(certifications.filter(cert => cert.id !== id));
    };

    return (
        <div className="certifications-achievements">
            <div className="header">
                <h2>Certifications and Achievements</h2>
                <button className="add-btn" onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add New'}
                </button>
            </div>
            <div className="certifications-list">
                {certifications.map(cert => (
                    <div key={cert.id} className="certification-entry">
                        <div className="cert-content">
                            <div className="cert-title">{cert.title}</div>
                            <div className="cert-details">
                                <span>{cert.organization}</span> - <span>{cert.year}</span>
                            </div>
                        </div>
                        <div className="cert-actions">
                            <AiOutlineEdit className="icon edit-icon" onClick={() => handleEdit(cert)} />
                            <AiOutlineDelete className="icon delete-icon" onClick={() => handleDelete(cert.id)} />
                        </div>
                    </div>
                ))}
            </div>
            {showForm && (
                <div className="certification-form">
                    <h3>{editId ? 'Edit Certification' : 'Add New Certification'}</h3>
                    <input
                        type="text"
                        name="title"
                        placeholder="Certification Title"
                        value={newCert.title}
                        onChange={handleInputChange}
                        className={errors.title ? 'error' : ''}
                    />
                    {errors.title && <span className="error-text">{errors.title}</span>}
                    <input
                        type="text"
                        name="organization"
                        placeholder="Organization"
                        value={newCert.organization}
                        onChange={handleInputChange}
                        className={errors.organization ? 'error' : ''}
                    />
                    {errors.organization && <span className="error-text">{errors.organization}</span>}
                    <input
                        type="number"
                        name="year"
                        placeholder="Year"
                        value={newCert.year}
                        onChange={handleInputChange}
                        className={errors.year ? 'error' : ''}
                    />
                    {errors.year && <span className="error-text">{errors.year}</span>}
                    <div className="form-buttons">
                        <button onClick={handleAddOrUpdateCertification}>
                            {editId ? 'Update Certification' : 'Add Certification'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CertificationsAndAchievements;
