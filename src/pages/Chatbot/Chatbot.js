// Chatbot.js

import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.scss";
import { FaTimes } from "react-icons/fa";

function Chatbot({ setShowChatbotPanel }) {
  const [messages, setMessages] = useState([
    // Initial chatbot message
    {
      text: "Hello! How can I assist you?",
      sender: "chatbot",
      timestamp: new Date(),
    },
  ]);

  const [inputText, setInputText] = useState("");

  // Create a ref for the chat container
  const chatContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      const newUserMessage = {
        text: inputText,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages([...messages, newUserMessage]);
      setInputText("");
    }
  };

  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span>Chat with Chatbot</span>
        <button className="close-btn" onClick={() => setShowChatbotPanel(false)}>
          <FaTimes />
        </button>
      </div>
      <div className="chatbot-messages" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "user" : "chatbot"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
