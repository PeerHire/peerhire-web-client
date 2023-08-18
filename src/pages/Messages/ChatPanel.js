import React, { useState } from "react";
import "./ChatPanel.scss";
import { FaChevronDown, FaPaperclip, FaTimes } from "react-icons/fa";
import defaultImage from "..//../assets/image/sumit.jpeg";

function ChatPanel({ freelancer, setShowChatPanel, showChatPanel }) {
  const [messages, setMessages] = useState([
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
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [showAttachmentBox, setShowAttachmentBox] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !attachment) return;

    const message = {
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
      attachment: attachment,
    };

    setMessages([...messages, message]);
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

  return (
    <div className={`chat-panel`}>
      {showChatPanel && (
        <div className="chat-header">
          <div className="freelancer-info">
            <img className="avatar" src={defaultImage} alt="" />
            <div className="info">
              <h4>{freelancer.freelancer_name}</h4>
              <span className={freelancer.onlineStatus ? "online" : "offline"}>
                {freelancer.onlineStatus ? "Online" : "Offline"}
              </span>
            </div>
          </div>
          <div className="buttons">
            <button
              className="close-btn"
              onClick={() => setShowChatPanel(!showChatPanel)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      {showChatPanel && (
        <div className="messages">
          {messages.map((message, index) => (
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
      )}
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
      {showChatPanel && (
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
          <button className="send-btn" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatPanel;
