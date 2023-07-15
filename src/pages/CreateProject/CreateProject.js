import React, { useState } from "react";
import "./CreateProject.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import projectCreateImage from "..//..//assets/SVG/Typewriter-bro.svg"
import { FaCheck, FaSuitcase } from "react-icons/fa";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Fixed Price");
  const [maxBudget, setMaxBudget] = useState("");
  const [tags, setTags] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [availableSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "PHP",
    "Design",
    "Illustration",
    "Content Writing",
    // Add more available skills
  ]);
  const [category] = useState([
    "Accounting & Consulting",
    "Admin Support",
    "Customer Service",
    "Data Science & Analytics",
    "Design & Creative",
    "Engineering & Architecture",
    "IT & Networking",
    "Legal",
    "Sales & Marketing",
    "Web, Mobile & Software Dev",
    "Writing",
    // Add more available category
  ]);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleAddCategory = (category) => {
    setSelectedCategory(category);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddSkill = (skill) => {
    if (requiredSkills.length < 5) {
      if (!requiredSkills.includes(skill)) {
        setRequiredSkills([...requiredSkills, skill]);
        setSearchQuery("");
      }
      setErrors({ ...errors, requiredSkills: "" });
    } else {
      setErrors({
        ...errors,
        requiredSkills: "You can add up to 5 skills only.",
      });
    }
  };

  const handleRemoveSkill = (skill) => {
    const updatedSkills = requiredSkills.filter((s) => s !== skill);
    setRequiredSkills(updatedSkills);
  };

  const filteredSkills = availableSkills.filter((skill) =>
    skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (projectName.trim() === "") {
      errors.projectName = "Project name is required";
    }
    if (projectDescription.trim() === "") {
      errors.projectDescription = "Project description is required";
    }
    if (selectedCategory === "") {
      errors.selectedCategory = "Category is required";
    }
    if (requiredSkills.length === 0) {
      errors.requiredSkills = "Required skills are required";
    }
    if (
      paymentMethod === "Fixed Price" &&
      ( maxBudget === "")
    ) {
      errors.budget = "Please enter maximum budget";
    }

    return errors;
  };

  return (
    <div>
      <Header />
      <div className="project-creation-page">
        <div className="project-creation-heading">
          <h2>Create a Project</h2>
        </div>
        <div className="project-from-container">
          <div className="project-creation-form">
            <form onSubmit={handleSubmit}>
              <div className="project-details-heading">
                <FaSuitcase />
                <span>Project Details</span>
              </div>
              {/* -----------------------------------------------------------------------------
            --------------------------------Project Name-------------------------------------
            ----------------------------------------------------------------------------- */}
              <div className="form-group">
                <label htmlFor="projectName">
                  Choose a name for your project *
                </label>
                <input
                  type="text"
                  id="projectName"
                  value={projectName}
                  onChange={handleProjectNameChange}
                  required
                />
                {errors.projectName && (
                  <span className="error">{errors.projectName}</span>
                )}
              </div>
              {/* -----------------------------------------------------------------------------
            --------------------------------Project Descripion-------------------------------
            ----------------------------------------------------------------------------- */}
              <div className="form-group">
                <label htmlFor="projectDescription">
                  Tell us more about your project *
                </label>
                <p>
                  Start with a bit about yourself or your business, and include
                  an overview of what you need done.
                </p>
                <textarea
                  id="projectDescription"
                  value={projectDescription}
                  onChange={handleProjectDescriptionChange}
                  required
                ></textarea>
                {errors.projectDescription && (
                  <span className="error">{errors.projectDescription}</span>
                )}
              </div>
              {/* -----------------------------------------------------------------------------
            --------------------------------Choose Category----------------------------------
            ----------------------------------------------------------------------------- */}
              <div className="form-group">
                <label htmlFor="category">
                  Select Category which fit your project requirements *
                </label>
                <div className="category-container">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle dropdown-toggle-button"
                      type="button"
                      id="categoryDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {selectedCategory}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="categoryDropdown"
                    >
                      {category.map((category) => (
                        <li
                          key={category}
                          onClick={() => handleAddCategory(category)}
                          className={
                            selectedCategory === category
                              ? "recuired-skill-selected"
                              : ""
                          }
                        >
                          {category}
                          {selectedCategory === category && <FaCheck />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {errors.selectedCategory && (
                  <span className="error">{errors.selectedCategory}</span>
                )}
              </div>
              {/* -----------------------------------------------------------------------------
            --------------------------------Choose skills------------------------------------
            ----------------------------------------------------------------------------- */}
              <div className="form-group">
                <label htmlFor="skills">What skills are required? *</label>
                <p>
                  Enter up to 5 skills that best describe your project.
                  Freelancers will use these skills to find projects they are
                  most interested and experienced in.
                </p>

                <div className="skills-container">
                  <div className="selected-skills">
                    {requiredSkills.map((skill) => (
                      <div className="selected-skill" key={skill}>
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="dropdown">
                    <button
                      className="dropdown-toggle dropdown-toggle-button"
                      type="button"
                      id="skillsDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Skills
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="skillsDropdown"
                    >
                      <div className="create-skill-search-bar">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          placeholder="Search skills..."
                        />
                      </div>
                      {filteredSkills.map((skill, index) => (
                        <li
                          key={index}
                          onClick={() => handleAddSkill(skill)}
                          className={
                            requiredSkills.includes(skill)
                              ? "recuired-skill-selected"
                              : ""
                          }
                        >
                          {skill}
                          {requiredSkills.includes(skill) && <FaCheck />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {errors.requiredSkills && (
                  <span className="error">{errors.requiredSkills}</span>
                )}
              </div>
              {/* -----------------------------------------------------------------------------
              --------------------------------Payment Method-----------------------------------
              ----------------------------------------------------------------------------- */}
              <div className="form-group payment-method">
                <label>Payment Method</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="fixedPrice"
                      value="Fixed Price"
                      checked={paymentMethod === "Fixed Price"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="fixedPrice">Fixed Price</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="hourlyPrice"
                      value="Hourly Price"
                      checked={paymentMethod === "Hourly Price"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="hourlyPrice">Hourly Price</label>
                  </div>
                </div>
              </div>
              {paymentMethod === "Fixed Price" && (
                <div className="form-group">
                  <label>Estimated Budget (INR)</label>
                  <div className="budget-range">
                    <span>₹</span>                  
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxBudget}
                      onChange={handleMaxBudgetChange}
                    />
                  </div>
                  {errors.budget && (
                    <span className="error">{errors.budget}</span>
                  )}
                </div>
              )}

              {paymentMethod === "Hourly Price" && (
                <div className="form-group">
                  <label>Estimated Budget (INR)</label>
                  <div className="budget-range">
                    <span>₹</span>                  
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxBudget}
                      onChange={handleMaxBudgetChange}
                    />
                    <span>/Hrs</span>  
                  </div>
                  {errors.budget && (
                    <span className="error">{errors.budget}</span>
                  )}
                </div>
              )}

              {/* -----------------------------------------------------------------------------
              --------------------------------Project Tags-------------------------------------
              ----------------------------------------------------------------------------- */}
              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  value={tags}
                  onChange={handleTagsChange}
                />
                <p>Enter the tags separated by commas.</p>
              </div>
              {/* -----------------------------------------------------------------------------
              --------------------------------Project Submit Button----------------------------
              ----------------------------------------------------------------------------- */}
              <button type="submit">Create Project</button>
            </form>
          </div>
          {/* -----------------------------------------------------------------------------
              --------------------------------Project Tips-------------------------------------
              ----------------------------------------------------------------------------- */}
          <div className="post-project-tips-container">
            <div className="post-project-tips-section">
              <h3 className="post-project-tips-title">Tips!</h3>
              <div className="post-project-tips-info">
                <div>
                  <span>
                    <FaCheck />
                  </span>
                  <span>Enter a brief description of the company and job.</span>
                </div>
                <div>
                  <span>
                    <FaCheck />
                  </span>
                  <span>Add your company logo.</span>
                </div>
                <div>
                  <span>
                    <FaCheck />
                  </span>
                  <span>
                    Choose the correct category and sub-category of the job.
                  </span>
                </div>
                <div>
                  <span>
                    <FaCheck />
                  </span>
                  <span>Check again before submit the job.</span>
                </div>
              </div>
            </div>
            <div>
              <img src={projectCreateImage} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProject;
