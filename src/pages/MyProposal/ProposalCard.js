import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  MdLocationOn,
  MdOutlineAccessTime,
  MdOutlineGavel,
} from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import "./MyProposalsPage.scss";

const MAX_DESCRIPTION_LENGTH = 1024;

const ProposalCard = ({ proposal }) => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleProposalsClick = () => {
    // Handle job card click event, navigate to the job details page
    navigate("/bidding-page");
    // You can use the 'react-router-dom' library to handle navigation
  };

  return (
    <div className="proposal-card">
      <div className="proposal-title-container">
        <h3 onClick={handleProposalsClick}>{proposal.title}</h3>
        <span>
          Status: <span className={proposal.status}>{proposal.status}</span>
        </span>
      </div>
      <div className="info">
        <span>
          <MdOutlineGavel /> {proposal.bids} Bids
        </span>
        <span>
          <GiMoneyStack />
          {proposal.price} ₹
        </span>
        <span>
          <MdOutlineAccessTime />
          {proposal.postedTime}
        </span>
      </div>

      <div className="proposal-description">
        <p className={showFullDescription ? "expanded" : ""}>
          {proposal.description}
        </p>
        {proposal.description.length > MAX_DESCRIPTION_LENGTH && (
          <button
            className="toggle-description-btn"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Less" : "More"}
          </button>
        )}
      </div>

      <div className="tags">
        {proposal.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="client-info">
        <span>
          <CgProfile /> {proposal.client.name} ({proposal.client.rollNumber})
        </span>
        <span>
          <MdLocationOn /> {proposal.client.college}
        </span>
      </div>
    </div>
  );
};

export default ProposalCard;
