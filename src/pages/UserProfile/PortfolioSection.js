import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import "./PortfolioSection.scss";
import demoImage from "../../assets/image/portfolio-sample.jpg";

function PortfolioSection() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce website built with React and Node.js.",
      imageUrl: demoImage,
      repoLink: "https://github.com/username/ecommerce-website",
      projectLink: "https://ecommerce-website.com",
      hostingLink: "https://ecommerce-website-hosting.com",
    },
    {
      id: 2,
      title: "Social Media App",
      description:
        "A social media application with real-time chat functionality.",
      imageUrl: demoImage,
      repoLink: "https://github.com/username/social-media-app",
      projectLink: "https://social-media-app.com",
      hostingLink: "https://social-media-app-hosting.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and blogs.",
      imageUrl: demoImage,
      repoLink: "https://github.com/username/portfolio-website",
      projectLink: "https://portfolio-website.com",
      hostingLink: "https://portfolio-website-hosting.com",
    },
    // ... other projects
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    repoLink: "",
    projectLink: "",
    hostingLink: "",
    linkType: "repoLink",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProject({ ...newProject, imageUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAddProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    setNewProject({
      title: "",
      description: "",
      imageUrl: "",
      repoLink: "",
      projectLink: "",
      hostingLink: "",
      linkType: "repoLink",
    });
    setShowModal(false);
  };

  const handleEditProject = (project) => {
    setNewProject(project);
    setCurrentProjectId(project.id);
    setEditMode(true);
    setShowModal(true);
  };

  const handleUpdateProject = () => {
    setProjects(
      projects.map((project) =>
        project.id === currentProjectId ? { ...newProject, id: currentProjectId } : project
      )
    );
    setNewProject({
      title: "",
      description: "",
      imageUrl: "",
      repoLink: "",
      projectLink: "",
      hostingLink: "",
      linkType: "repoLink",
    });
    setShowModal(false);
    setEditMode(false);
    setCurrentProjectId(null);
  };

  const handleDeleteProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <div className="portfolio-section">
      <div className="portfolio-header">
        <h2>Portfolio</h2>
        <button className="add-project-btn" onClick={() => setShowModal(true)}>
          Add Project
        </button>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="links">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                )}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project
                  </a>
                )}
                {project.hostingLink && (
                  <a
                    href={project.hostingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosting
                  </a>
                )}
              </div>
            </div>
            <div className="project-card-actions">
              <AiOutlineEdit
                className="edit-icon"
                onClick={() => handleEditProject(project)}
              />
              <AiOutlineDelete
                className="delete-icon"
                onClick={() => handleDeleteProject(project.id)}
              />
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editMode ? "Edit Project" : "Add New Project"}</h3>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProject.title}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newProject.description}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
            />
            <select
              name="linkType"
              value={newProject.linkType}
              onChange={handleInputChange}
            >
              <option value="repoLink">Repository Link</option>
              <option value="projectLink">Project Link</option>
              <option value="hostingLink">Hosting Link</option>
            </select>
            <input
              type="text"
              name={newProject.linkType}
              placeholder="Link"
              value={newProject[newProject.linkType]}
              onChange={handleInputChange}
            />
            <div className="modal-buttons">
              <button onClick={editMode ? handleUpdateProject : handleAddProject}>
                {editMode ? "Update Project" : "Add Project"}
              </button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioSection;
