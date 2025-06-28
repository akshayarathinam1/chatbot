// import React from 'react';
// import { Card, Form, Button} from "react-bootstrap";
// import './ChatBox.css'; // Import CSS
// import { IoMdSend } from "react-icons/io"
// const ChatBox = () => {
//   return (
//     <Card className="chatbox shadow-lg">
//       <Card.Header className="chatbox-header">
//         Let's Chat 💬
//       </Card.Header>

//       <Card.Body className="chatbox-body">
//         <div className="chat-time  small mb-2">Monday, 1:27 PM</div>
//         <div className="chat-message mb-2">Welcome to our site</div>
//         <div className="chat-message text-muted">...</div>
//       </Card.Body>

//       <Card.Footer className="chatbox-footer">
//         <Form.Control type="text" placeholder="Type a message..." className="chat-input" />
//         <Button className='sent-btn'>
//             <IoMdSend />
//         </Button>
//       </Card.Footer>
//     </Card>
//   );
// };

// export default ChatBox;

import React, { useState } from 'react';
import { Card, Form, Button } from "react-bootstrap";
import './ChatBox.css';
import { IoMdSend } from "react-icons/io";

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [analysis, setAnalysis] = useState(null); 
  const handleSend = () => {
    if (!input.trim()) return;

    // Simulated sentiment analysis (you can integrate real API here)
    const mockSentiment = {
      confidence: 0.40347832441329956,
      sentiment: 'negative',
      text: input
    };

    setAnalysis(mockSentiment);
    setInput('');
  };

  return (
    <Card className="chatbox shadow-lg">
      <Card.Header className="chatbox-header">
        Let's Chat 💬
      </Card.Header>

      <Card.Body className="chatbox-body">
        <div className="chat-time small mb-2">Monday, 1:27 PM</div>
        <div className="chat-message mb-2">Welcome to our site</div>

        {analysis && (
        <div className="chat-analysis mt-3 p-2 bg-light rounded">
            <pre className="m-0 text-dark">
              {JSON.stringify(analysis, null, 2)}
            </pre>
          </div>
        )}
      </Card.Body>

      <Card.Footer className="chatbox-footer d-flex">
        <Form.Control
          type="text"
          placeholder="Type a message..."
          className="chat-input me-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className='sent-btn' onClick={handleSend}>
          <IoMdSend />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ChatBox;

