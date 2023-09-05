// MyProposalsPage.js

import React from "react";
import "./MyProposalsPage.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProposalCard from "./ProposalCard";
import ProposalImage from "..//../assets/SVG/Proposal.svg";

function MyProposalsPage() {
  const proposals = [
    {
      id: 1,
      title: "Front-end Developer",
      bids: 5,
      price: "100",
      postedTime: "2 hours ago",
      status: "Pending",
      bidAmount: 500,
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
      status: "Accepted",
      bidAmount: 500,
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
      status: "Rejected",
      bidAmount: 500,
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
      status: "Accepted",
      bidAmount: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["React", "JavaScript", "HTML", "CSS"],
      client: {
        name: "Sumit Nirmal",
        rollNumber: "20CE10075",
        college: "Indian Institute of Technolgy, Kharagpur, India",
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="my-proposals-page">
        <h1>My Proposals</h1>
        <div className="proposals-container">
          <div className="proposals-list">
            {proposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
          <div className="proposal-img">
            <img src={ProposalImage} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyProposalsPage;
