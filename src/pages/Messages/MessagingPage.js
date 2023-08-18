import React, { useState } from "react";
import "./MessagingPage.scss"; // Import your SCSS file for styling
import { FaChevronDown, FaPaperclip, FaTimes } from "react-icons/fa";
import defaultImage from "..//../assets/image/sumit.jpeg";
import defaultImage1 from "..//../assets/image/pubali.jpeg";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function MessagingPage() {

  const [searchQuery, setSearchQuery] = useState("");
  const [freelancers, setFreelancers] = useState([
    {
      id: 1,
      freelancer_name: "Sumit Nirmal",
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
      onlineStatus: "online",
      profileImage: defaultImage,
      messages: [
        {
          text: "Hello, I'm interested in your project.",
          sender: "freelancer",
          timestamp: new Date(),
          attachment: null,
        },
        {
          text: "Sure! Can you please provide more details?",
          sender: "user",
          timestamp: new Date(),
          attachment: null,
        },
      ],
    },
    {
      id: 2,
      freelancer_name: "Pubali Pal",
      bid: "456",
      deliveryTime: "6 days",
      coverLetter: "Passionate graphic designer with...",
      attachments: ["portfolio.pdf"],
      rating: 3.6,
      onlineStatus: "offline",
      profileImage: defaultImage1,
      messages: [
        {
          text: "Hi",
          sender: "freelancer",
          timestamp: new Date(),
          attachment: null,
        },
        {
          text: "Hello", 
          sender: "user",
          timestamp: new Date(),
          attachment: null,
        },
      ],
    },
    // Other freelancers bidding...
  ]);
  const [selectedFreelancer, setSelectedFreelancer] = useState(freelancers[0]);
  const [filteredFreelancers, setFilteredFreelancers] = useState(freelancers);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredFreelancers(freelancers);
    } else {
      const filtered = freelancers.filter(
        (freelancer) =>
          freelancer.freelancer_name &&
          freelancer.freelancer_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFreelancers(filtered);
    }
  };

  const [newMessage, setNewMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [showAttachmentBox, setShowAttachmentBox] = useState(false);

  const handleMessageSend = (freelancerId) => {
    if (newMessage.trim() === "" && !attachment) return;

    const message = {
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
      attachment: attachment,
    };

    const updatedFreelancers = freelancers.map((freelancer) => {
      if (freelancer.id === freelancerId) {
        return {
          ...freelancer,
          messages: [...freelancer.messages, message],
        };
      }
      return freelancer;
    });

    setFreelancers(updatedFreelancers);
    setNewMessage("");
    setAttachment(null);
    setShowAttachmentBox(false);
  };

  const formatTime = (timestamp) => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(timestamp);
  };

  const getTimeDifference = (timestamp) => {
    const now = Date.now();
    const diff = now - timestamp;

    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 1) {
      // const seconds = Math.floor(diff / 1000);
      // return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
      return "now";
    }

    if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    }

    const days = Math.floor(hours / 24);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  };

  console.log(freelancers);
  return (
    <>
      <Header />
      <div className="messaging-page">
        <div className="sidebar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search freelancers"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <ul>
            {filteredFreelancers.map((freelancer) => (
              <li
                key={freelancer.id}
                className={
                  selectedFreelancer && selectedFreelancer.id === freelancer.id
                    ? "active"
                    : ""
                }
                onClick={() => setSelectedFreelancer(freelancer)}
              >
                <div className="freelancers">
                  <img src={freelancer.profileImage} alt="" />
                  <span>{freelancer.freelancer_name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-area">
          <div className="chat-header">
            {selectedFreelancer ? (
              <div className="freelancer-info">
                <img
                  className="avatar"
                  src={selectedFreelancer.profileImage}
                  alt=""
                />
                <div className="info">
                  <h4>{selectedFreelancer.freelancer_name}</h4>
                  <span
                    className={
                      selectedFreelancer.onlineStatus ? "online" : "offline"
                    }
                  >
                    {selectedFreelancer.onlineStatus ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            ) : (
              <h3>Select a freelancer to start chatting</h3>
            )}
          </div>

          <div className="messages">
            {selectedFreelancer &&
              freelancers
                .filter(
                  (freelancer) => selectedFreelancer.id === freelancer.id
                )[0]
                .messages.map((message, index) => (
                  <div key={index} className={`message ${message.sender}`}>
                    <div className="message-text">{message.text}</div>
                    {message.attachment && (
                      <div className="attachment">
                        <a
                          href={message.attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaPaperclip />
                          Attachment
                        </a>
                      </div>
                    )}
                    <div className="timestamp">
                      {message.sender === "freelancer"
                        ? formatTime(message.timestamp)
                        : getTimeDifference(message.timestamp)}
                    </div>
                  </div>
                ))}
          </div>
          <div className={showAttachmentBox ? "attachment-box" : ""}>
            {showAttachmentBox && (
              <label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) =>
                    setAttachment(URL.createObjectURL(e.target.files[0]))
                  }
                  className="attatchment-input"
                />
              </label>
            )}
          </div>
          {selectedFreelancer && (
            <div className="input-area">
              <input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="attachment-toggle"
                onClick={() => setShowAttachmentBox(!showAttachmentBox)}
              >
                <FaPaperclip />
              </button>
              <button
                className="send-btn"
                onClick={() => handleMessageSend(selectedFreelancer.id)}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MessagingPage;
