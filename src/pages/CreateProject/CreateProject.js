import React, { useState } from "react";
import "./CreateProject.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaSuitcase } from "react-icons/fa";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Fixed Price");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [tags, setTags] = useState("");

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleProjectDescriptionChange = (e) => {
    setProjectDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setRequiredSkills(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleMinBudgetChange = (e) => {
    setMinBudget(e.target.value);
  };

  const handleMaxBudgetChange = (e) => {
    setMaxBudget(e.target.value);
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <Header />
      <div className="project-creation-page">
        <div className="project-creation-heading">
          <h2>Create a Project</h2>
        </div>
        <div className="project-creation-form">
          <form onSubmit={handleSubmit}>
            <div className="project-details-heading">
              <FaSuitcase />
              <span>Project Details</span>
            </div>
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
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">
                Tell us more about your project *
              </label>
              <p>
                Start with a bit about yourself or your business, and include an
                overview of what you need done.
              </p>
              <textarea
                id="projectDescription"
                value={projectDescription}
                onChange={handleProjectDescriptionChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">
                Select Category which fit your project requirements *
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Accounting & Consulting</option>
                <option value="">Admin Support</option>
                <option value="">Customer Service</option>
                <option value="">Data Science & Analytics</option>
                <option value="">Design & Creative</option>
                <option value="">Engineering & Architecture</option>
                <option value="">IT & Networking</option>
                <option value="">Legal</option>
                <option value="">Sales & Marketing</option>
                <option value="">Translation</option>
                <option value="">Web, Mobile & Software Dev</option>
                <option value="">Writing</option>
                {/* Add category options here */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="skills">What skills are required? *</label>
              <p>
                Enter up to 5 skills that best describe your project.
                Freelancers will use these skills to find projects they are most
                interested and experienced in.
              </p>
              <input
                type="text"
                id="skills"
                value={requiredSkills}
                onChange={handleSkillsChange}
                required
              />
            </div>
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
                <label>Estimated Budget (USD)</label>
                <div className="budget-range">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minBudget}
                    onChange={handleMinBudgetChange}
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxBudget}
                    onChange={handleMaxBudgetChange}
                  />
                </div>
              </div>
            )}
            <div className="form-group">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={handleTagsChange}
              />
            </div>
            <button type="submit">Create Project</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProject;
