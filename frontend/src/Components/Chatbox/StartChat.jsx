// import React from 'react';
// import { Container, Card, Button } from 'react-bootstrap';
// import './StartChat.css';
// import { FaCircleArrowRight, FaRegMessage } from "react-icons/fa6";
// import { FaHome } from "react-icons/fa";

// const StartChat = ({ onStartChat }) => {
//   return (
//     <Container className="start-chat-container">
//       <Card className="chat-popup shadow-lg p-3">
        

//         <Card className="inner-card mb-3">
//           <div className="d-flex justify-content-between align-items-center">
//             <div>
//               <strong className='inner-text'>New Conversation</strong>
//               <p className="mb-0 inner-text small">
//                 We typically reply in a few minutes <FaCircleArrowRight className='inner-icon' />
//               </p>
//             </div>
//           </div>
//         </Card>

//         <div className="text-center mt-3">
//           <Button variant="primary" onClick={onStartChat}>
//             Start Chat
//           </Button>
//         </div>
//       </Card>
//     </Container>
//   );
// };

// export default StartChat;

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './StartChat.css';
import { FaCircleArrowRight } from "react-icons/fa6";

const StartChat = ({ onStartChat }) => {
  return (
    <Container className="start-chat-container d-flex justify-content-end align-items-end">
      <Card className="chat-popup shadow-lg p-3 border-0 rounded-4">
        <Card className="inner-card mb-3 p-3 border-0 rounded-3 bg-gradient">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className='inner-text fw-bold mb-1'>New Conversation</h5>
              <p className="mb-0 inner-text small">
                We typically reply in a few minutes <FaCircleArrowRight className='inner-icon ms-1' />
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-3">
          <Button variant="light" className="start-btn fw-semibold px-4 py-2 rounded-pill shadow-sm" onClick={onStartChat}>
            Start Chat
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default StartChat;
