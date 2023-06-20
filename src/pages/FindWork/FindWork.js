import React, { useState } from "react";
import JobCard from "./JobCard";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./FindWork.scss";
import { FaPen, FaSearch } from "react-icons/fa";
import ProfilePicture from "..//../assets/image/sumit.jpeg";

const jobs = [
  {
    id: 1,
    title: "Front-end Developer",
    bids: 5,
    price: "100",
    postedTime: "2 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    client: {
      name: "Sumit Nirmal",
      rollNumber: "20CE10075",
      college: "Indian Institute of Technolgy, Kharagpur, India",
    },
  },
  {
    id: 2,
    title: "Front-end Developer",
    bids: 5,
    price: "100",
    postedTime: "2 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    client: {
      name: "Sumit Nirmal",
      rollNumber: "20CE10075",
      college: "Indian Institute of Technolgy, Kharagpur, India",
    },
  },
  {
    id: 3,
    title: "Front-end Developer",
    bids: 5,
    price: "100",
    postedTime: "2 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    client: {
      name: "Sumit Nirmal",
      rollNumber: "20CE10075",
      college: "Indian Institute of Technolgy, Kharagpur, India",
    },
  },
  {
    id: 4,
    title: "Front-end Developer",
    bids: 5,
    price: "100",
    postedTime: "2 hours ago",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    client: {
      name: "Sumit Nirmal",
      rollNumber: "20CE10075",
      college: "Indian Institute of Technolgy, Kharagpur, India",
    },
  },
];

const savedJobs = [
  {
    id: 1,
    title: "Front-end Developer",
    bids: 5,
    price: "100",
    postedTime: "2 hours ago",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    client: {
      name: "Sumit Nirmal",
      rollNumber: "20CE10075",
      college: "Indian Institute of Technolgy, Kharagpur, India",
    },
  },
];

const FindWork = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Replace the dummy data with your actual data
  const name = "Sumit Nirmal";
  const title = "MERN Full Stack Developer";
  const rollNumber = "20CE10075";
  const profileCompletePercentage = 75;
  const profileVisibility = "Public";
  const categories = [
    "Ecommerce Development",
    "Web & Mobile Design",
    "Blockchain, NFT & Cryptocurrency",
    "Mobile Development",
    "Web Development",
  ];

  const [activeTab, setActiveTab] = useState("best-matches");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="find-work-container">
        <div className="find-work-page">
          <div className="job-search-bar">
            <input
              type="text"
              placeholder="Search for jobs"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="job-cards">
            <div className="job-cards-container-header">
              <h3>Jobs you might like</h3>
            </div>
            <div className="job-cards-tab-button">
              <button
                className={
                  activeTab === "best-matches" ? "job-cards-tab-active" : ""
                }
                onClick={() => handleTabChange("best-matches")}
              >
                Best Matches
              </button>
              <button
                className={
                  activeTab === "most-recent" ? "job-cards-tab-active" : ""
                }
                onClick={() => handleTabChange("most-recent")}
              >
                Most Recent
              </button>
              <button
                className={
                  activeTab === "saved-jobs" ? "job-cards-tab-active" : ""
                }
                onClick={() => handleTabChange("saved-jobs")}
              >
                Saved Jobs
              </button>
            </div>

            {activeTab === "best-matches" && (
              <>
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
                <div className="load-more-job">
                  <button>Load More Jobs</button>
                </div>
              </>
            )}
            {activeTab === "most-recent" && (
              <>
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
                <div className="load-more-job">
                  <button>Load More Jobs</button>
                </div>
              </>
            )}
            {activeTab === "saved-jobs" &&
              savedJobs.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
        <div className="right-section">
          <div className="profile">
            <img
              src={ProfilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <div className="profile-details">
              <p className="name">
                {name} ({rollNumber})
              </p>
              <span className="title">{title}</span>
            </div>
          </div>
          <div className="progress-bar-container">
            <span>Profile Completeness: {profileCompletePercentage}%</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${profileCompletePercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="profile-visibility-container">
            <div>
              <span className="profile-visibility">Profile Visibility:</span>
              <span className="status">{profileVisibility}</span>
            </div>
            <button>
              <FaPen />
            </button>
          </div>
          <div className="my-categories">
            <div>
              <h3>My Categories</h3>
              <button>
                <FaPen />
              </button>
            </div>
            <ul>
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindWork;