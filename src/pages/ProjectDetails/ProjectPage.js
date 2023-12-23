import React, { useState } from "react";
import "./ProjectPage.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BlankProfileImage from "..//..//assets/SVG/blank-profile-picture-973460.svg";
import ProfileImage from "..//..//assets/image/sumit.jpeg";
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const ProjectPage = () => {
  const navigate = useNavigate();
  // Mock data for demonstration
  const projectDetails = {
    student: {
      name: "Sumit Nirmal",
      college: "Indian Institute of Technology, Kharagpur",
      profilePhoto: "student-profile.jpg",
      rollnumber: "20CE10075",
      verified: true,
      rating: 4.5,
      accountReview: 51,
    },

    projectName: "Project Management with Finance",
    budget: "1500",
    description: `Here are the requirements (explanation video):

       https://watch.screencastify.com/v/qkitzbxSVNScTl4xCtXF 

       Write a pine script 

       There are sets of alerts as below Alert 1 buy, alert 1 sell, alert 2 buy, alert 2 sell, alert 3 buy, alert 3 sell,

       once any alert from set one is triggered, pause that set and activate the next set 

       only issue I am facing is that, it should stop trading for the day if there signal close (on the next signal) and there is profit in the account for the day. it should stop trading. and not activate the next alerts for the day.`,
    skills: ["Accounting", "Consulting", "Excel", "Legal", "Legal Writing"],
    freelancersBidding: [
      { name: "tester", bid: "$50", deliveryTime: "7 days" },
      { name: "khziar", bid: "$56", deliveryTime: "6 days" },
      // Other freelancers bidding...
    ],
    projectSummary: {
      status: "Open",
      category: "Business, Accounting & Legal",
      projectType: "Fixed Price",
      datePosted: "11 months ago",
      projectID: 23,
      projectViews: "8.1K",
      // Rest of the data...
    },
  };

  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const projectLink = `https://peerhire.online/project/${projectDetails.projectSummary.projectID}`;
  const renderDescription = () => {
    const descriptionWithLinks = projectDetails.description.replace(
      /(http[s]?:\/\/[^\s]+)/g,
      "<a href='$1' target='_blank'>$1</a>"
    );
    const renderedDescription = parse(descriptionWithLinks);
    return (
      <div className="description">
        <p>{renderedDescription}</p>
      </div>
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(projectLink)
      .then(() => {
        setIsLinkCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy project link:", error);
      });
  };
  const handleLinkClick = () => {
    handleCopyLink();
    // Additional logic for handling the link click, if needed
  };
  return (
    <>
      <Header />
      <div className="project-page">
        <h1>Project Details</h1>
        <div className="project-container">
          <div className="project-details-info">
            <div className="project-name-container">
              <h1 className="project-name">{projectDetails.projectName}</h1>
              <span className="project-category">
                {projectDetails.projectSummary.category}
              </span>
              <span className="project-post-time">
                Posted {projectDetails.projectSummary.datePosted}
              </span>
            </div>

            {renderDescription()}

            <div className="budget">
              <ImPriceTag />
              <div>
                <span className="price">₹{projectDetails.budget}</span>
                <span>Fixed-price</span>
              </div>
            </div>

            <div className="skills">
              <h3>Skills and Expertise</h3>
              <ul>
                {projectDetails.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="activity">
              <h3>Activity on this job</h3>
              <span>
                Bids:{" "}
                <span className="no-of-bids">
                  {projectDetails.freelancersBidding.length}
                </span>
              </span>
            </div>
          </div>
          <div className="project-Student-info">
            <div className="apply-save-project">
              <button className="apply" onClick={()=>navigate("/bidding-page")}>Apply Now</button>
              <button className="save">
                <FaRegHeart /> Save Project
              </button>
            </div>
            <div className="student-profile">
              <h3>About the client</h3>
              <div>
                {/* <div className="profile-photo">
                  <img src={ProfileImage} alt="Student Profile" />
                </div> */}
                <div className="student-info">
                  <h2 onClick={()=>navigate("/user-profile")}>
                    {projectDetails.student.name} (
                    {projectDetails.student.rollnumber})
                  </h2>
                  <div className="rating">
                    {/* Display rating with decimal numbers and a half-star */}
                    <span>
                      {Array.from({ length: 5 }, (_, index) => {
                        const starRating = index + 1;
                        const isActive =
                          starRating <=
                          Math.floor(projectDetails.student.rating);
                        const isHalfStar =
                          starRating ===
                          Math.ceil(projectDetails.student.rating);

                        return (
                          <span
                            key={index}
                            className={`star${isActive ? " active" : ""}`}
                          >
                            {isActive ? (
                              <FaStar />
                            ) : isHalfStar ? (
                              <FaStarHalfAlt />
                            ) : (
                              <FaRegStar />
                            )}
                          </span>
                        );
                      })}{" "}
                      {projectDetails.student.rating} of{" "}
                      {projectDetails.student.accountReview} reviews
                    </span>
                  </div>
                  <p>{projectDetails.student.college}</p>
                  {projectDetails.student.verified && (
                    <span className="verified">Verified Account</span>
                  )}
                </div>
              </div>
            </div>

            <div className="project-link-container">
              <h3>Project Link</h3>
              <div className="project-link">
                <div className="link" onClick={handleLinkClick}>
                  {projectLink}
                </div>
                <button
                  className="copy-link-button"
                  onClick={handleCopyLink}
                  disabled={isLinkCopied}
                >
                  {isLinkCopied ? "Link Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
