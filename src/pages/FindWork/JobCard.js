import React, { useState } from "react";
import "./FindWork.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineAccessTime,
  MdOutlineGavel,
} from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const MAX_DESCRIPTION_LENGTH = 1024;

const JobCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleJobClick = () => {
    // Handle job card click event, navigate to the job details page
    // You can use the 'react-router-dom' library to handle navigation
  };

  return (
    <div className="job-card" onClick={handleJobClick}>
      <div className="job-title-container">
        <h3>{job.title}</h3>
        <div className="save-jobs-button">
          <FaRegHeart className="save-jobs-icon" />
        </div>
      </div>
      <div className="info">
        <span>
          <MdOutlineGavel /> {job.bids} Bids
        </span>
        <span>
          <GiMoneyStack />
          {job.price} ₹
        </span>
        <span>
          <MdOutlineAccessTime />
          {job.postedTime}
        </span>
      </div>

      <div className="job-description">
        <p className={showFullDescription ? "expanded" : ""}>
          {job.description}
        </p>
        {job.description.length > MAX_DESCRIPTION_LENGTH && (
          <button
            className="toggle-description-btn"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Less" : "More"}
          </button>
        )}
      </div>

      <div className="tags">
        {job.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="client-info">
        <span>
          <CgProfile /> {job.client.name} ({job.client.rollNumber})
        </span>
        <span>
          <MdLocationOn /> {job.client.college}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
