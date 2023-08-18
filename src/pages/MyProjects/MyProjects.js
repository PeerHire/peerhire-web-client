import React, { useState } from "react";
import "./MyProjects.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {
  FaFilter,
  FaSearch,
  FaUserCog,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const [timeAgo, setTimeAgo] = useState("");

  const formatTimeAgo = (timestamp) => {
    const now = Date.now();
    const postedTime = new Date(timestamp).getTime();
    const diff = now - postedTime;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const seconds = Math.floor(diff / 1000);
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  };

  useEffect(() => {
    setTimeAgo(formatTimeAgo(project.postingTime));
  }, [project.postingTime]);

  return (
    <div className="project-card">
      <div className="project-heading">
        <h2 onClick={()=>navigate("/freelancer-selection")} className="project">{project.name}</h2>
        <p className={`status-${project.status.toLowerCase()}`}>
          {project.status}
        </p>
      </div>
      <p className="bid-time">
        <BiTimeFive />
        {timeAgo}
      </p>
      <div className="bids">
        <div>
          <span>{project.totalBids}</span>
          <span className="txt">Bids</span>
        </div>
        <div>
          <span>{project.averageBidPrice} ₹</span>
          <span className="txt">Avg. Bid</span>
        </div>
        <div>
          <span>{project.fixedPrice} ₹</span>
          <span className="txt">Fixed Price</span>
        </div>
      </div>
      <div className="manage-project-button">
        <button onClick={()=>navigate("/freelancer-selection")} className="manage-bidder-btn">
          <FaUserCog /> Manage Bidders
        </button>
        <button className="close-project-btn">
          <FaTimes /> Close Project
        </button>
      </div>
    </div>
  );
};

const MyProjects = () => {
  // Placeholder data for projects
  const projects = [
    {
      id: 1,
      name: "Project Management with Finance",
      status: "Under Development",
      postingTime: "2023-07-10",
      totalBids: 5,
      averageBidPrice: "200",
      fixedPrice: "1000",
    },
    {
      id: 2,
      name: "Project Management with Finance",
      status: "Completed",
      postingTime: "2023-07-08",
      totalBids: 10,
      averageBidPrice: "300",
      fixedPrice: "1500",
    },
    {
        id: 3,
        name: "Project Management with Finance",
        status: "Open",
        postingTime: "2023-07-08",
        totalBids: 10,
        averageBidPrice: "300",
        fixedPrice: "1500",
      },
      {
        id: 4,
        name: "Project Management with Finance",
        status: "Completed",
        postingTime: "2023-07-08",
        totalBids: 10,
        averageBidPrice: "300",
        fixedPrice: "1500",
      },
      {
        id: 5,
        name: "Project Management with Finance",
        status: "Open",
        postingTime: "2023-07-08",
        totalBids: 10,
        averageBidPrice: "300",
        fixedPrice: "1500",
      },
    // Add more project data as needed
  ];

  // State for the selected status filter
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Filter projects based on the selected status
  const filteredProjects =
    selectedStatus === "All"
      ? projects
      : projects.filter((project) => project.status === selectedStatus);

  const noProjects = filteredProjects.length === 0;

  return (
    <>
      <Header />
      <div className="my-projects-page">
        <div className="heading-container">
          <span className="my-projects-heading">My Projects</span>
          <div className="filters">
            <div className="search-box">
              <input type="text" placeholder="Search Project..." />
              <FaSearch className="search-icon" />
            </div>
            <div className="status-filter">
              {/* <FaFilter className="filter-icon" /> */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option className="option" value="All">
                  Status
                </option>
                <option data-padding="10" className="option" value="Open">
                  Open
                </option>
                <option className="option" value="Under Development">
                  Under Development
                </option>
                <option className="option" value="Completed">
                  Completed
                </option>
                <option className="option" value="Final Review Pending">
                  Final Review Pending
                </option>
                <option className="option" value="Closed">
                  Closed
                </option>
                <option className="option" value="Incomplete">
                  Incomplete
                </option>
              </select>
              <FaChevronDown className="down-icon" />
            </div>
          </div>
        </div>
        {noProjects ? (
          <div className="no-projects-section">
            <h3>No projects found with the selected status.</h3>
          </div>
        ) : (
          <div className="project-list">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyProjects;
