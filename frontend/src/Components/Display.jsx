import React, { useState } from 'react';
import ChatBox from './Chatbox/ChatBox';
import StartChat from './Chatbox/StartChat';
import { FaRegCommentDots } from 'react-icons/fa';
import './Display.css';

const Display = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    setShowChatBox(false); // Reset ChatBox when closed
  };

  const handleStartChat = () => {
    setShowChatBox(true);
  };

  return (
    <>
    <div
  style={{
    backgroundImage: 'linear-gradient(to bottom right, #011526, #033649)',
    minHeight: '100vh',
    color: 'white',
  }}>
 <h1 className='main-text'>Chat Bot</h1>
</div>
      {/* Floating Chat Icon */}
      <div className="chat-icon" onClick={toggleChat}>
        <FaRegCommentDots size={30} />
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="chat-popup">
          {!showChatBox ? (
            <StartChat onStartChat={handleStartChat} />
          ) : (
            <ChatBox />
          )}
        </div>
      )}
    </>
  );
};

export default Display;
