import React, { useState } from "react";
import "./FreelancerSelection.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaRegHeart,
  FaUserCog,
} from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import ChatPanel from "../Messages/ChatPanel";

const FreelancerSelection = () => {
  const navigate = useNavigate();

  const [showChatPanel, setShowChatPanel] = useState(false);

  const handleOpenChatPanel = () => {
    setShowChatPanel(true);
  };

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
      {
        id: 1,
        freelancer_name: "John Doe",
        bid: "350",
        deliveryTime: "7 days",
        coverLetter: `Here are the requirements (explanation video):

        https://watch.screencastify.com/v/qkitzbxSVNScTl4xCtXF 
 
        Write a pine script 
 
        There are sets of alerts as below Alert 1 buy, alert 1 sell, alert 2 buy, alert 2 sell, alert 3 buy, alert 3 sell,
 
        once any alert from set one is triggered, pause that set and activate the next set 
 
        only issue I am facing is that, it should stop trading for the day if there signal close (on the next signal) and there is profit in the account for the day. it should stop trading. and not activate the next alerts for the day.`,
        attachments: ["resume.pdf", "portfolio.pdf"],
        rating: 4.5,
        onlineStatus : "online",
      },
      {
        id: 2,
        freelancer_name: "Jane Smith",
        bid: "456",
        deliveryTime: "6 days",
        coverLetter: "Passionate graphic designer with...",
        attachments: ["portfolio.pdf"],
        rating: 3.6,
        onlineStatus : "offline",
      },
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

  const renderDescription = (description) => {
    const descriptionWithLinks = description.replace(
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
        <h1>Freelancer Selection</h1>
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

            {renderDescription(projectDetails.description)}

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
              <h3>
                Freelancers Bidding ({projectDetails.freelancersBidding.length})
              </h3>
              <div className="freelancers-list">
                {projectDetails.freelancersBidding.map((freelancer) => (
                  <div className="freelancer-card" key={freelancer.id}>
                    <div className="freelancer-info">
                      <div className="freelancer-header">
                        <h2>{freelancer.freelancer_name}</h2>
                        <div className="rating">
                          {/* Display rating with decimal numbers and a half-star */}
                          <span className="rating_txt">
                            {freelancer.rating}/5
                          </span>
                          <span>
                            {Array.from({ length: 5 }, (_, index) => {
                              const starRating = index + 1;
                              const isActive =
                                starRating <= Math.floor(freelancer.rating);
                              const isHalfStar =
                                starRating === Math.ceil(freelancer.rating);

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
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="proposal-documents">
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <span className="">Proposal Documents</span>
                          </AccordionSummary>
                          <AccordionDetails>
                            {/* <p className="cover-letter">
                              {freelancer.coverLetter}
                            </p> */}
                            {renderDescription(freelancer.coverLetter)}
                            <div className="attachments">
                              Attachments:
                              {freelancer.attachments.map(
                                (attachment, index) => (
                                  <a
                                    href={attachment}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {attachment}
                                  </a>
                                )
                              )}
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div className="accept-chat-button">
                        <button className="accept-btn">
                          <FaUserCog /> Accept Offer
                        </button>
                        <button
                          className="chat-btn"
                          onClick={handleOpenChatPanel}
                        >
                          <BsFillChatLeftTextFill /> Chat Now
                        </button>
                        {showChatPanel && <ChatPanel freelancer={freelancer}  setShowChatPanel={setShowChatPanel} showChatPanel={showChatPanel}/>}
                      </div>
                    </div>
                    <div className="proposed-price-duration">
                      <p className="proposed-price">{freelancer.bid} ₹</p>
                      <p className="duration">in {freelancer.deliveryTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="project-Student-info">
            <div className="project-status">
              <h3>Status</h3>
              <p
                className={`status-${projectDetails.projectSummary.status.toLowerCase()}`}
              >
                {projectDetails.projectSummary.status}
              </p>
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

export default FreelancerSelection;
