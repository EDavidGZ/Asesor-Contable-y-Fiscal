import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón para desplegar el chatbot */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: 20,
          right: isOpen ? '320px' : '20px', // Ajusta el valor según el ancho del chatbot
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '50%',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'right 0.3s'
        }}
      >
        <FaRobot size={24} />
      </button>

      {/* Ventana del chatbot */}
      <div
        style={{
          position: 'fixed',
          bottom: 220,
          right: 0,
          height: '400px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '8px 8px 0 0'
          }}
          // No es necesario arrastrar en este caso
        >
          Chatbot
        </div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          style={{
          }}
        />
      </div>
    </div>
  );
};

export default ChatbotComponent;
