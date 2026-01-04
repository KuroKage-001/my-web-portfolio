import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useTheme } from '../../context/ThemeContext';
import profileDark from '../../assets/images/profile.jpg';
import profileLight from '../../assets/images/profile-light01.jpg';

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setMessages([
        {
          role: 'assistant',
          message: "Hi there! 👋 I'm Leo's AI assistant. I can help you learn about Leo's skills, projects, and experience, or answer any coding questions you might have. What would you like to know?",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  }, [isOpen]);

  const sendMessage = async (messageText) => {
    const trimmedMessage = messageText.trim();
    
    // Validation
    if (!trimmedMessage) {
      console.warn('Empty message attempted');
      return;
    }
    
    if (trimmedMessage.length > 1000) {
      console.warn('Message too long');
      return;
    }

    // Add user message to UI
    const userMessage = {
      role: 'user',
      message: trimmedMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedMessage,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSessionId(data.session_id);
        const assistantMessage = {
          role: 'assistant',
          message: data.message,
          timestamp: data.timestamp,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error(data.message || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        role: 'assistant',
        message: 'Sorry, I encountered an error. The AI model might be loading (takes 20-30 seconds on first use). Please try again in a moment.',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const profileImage = theme === 'dark' ? profileDark : profileLight;

  return (
    <div className="fixed inset-x-4 bottom-4 sm:bottom-20 sm:right-4 sm:left-auto w-auto sm:w-96 h-[calc(100vh-2rem)] sm:h-[600px] max-h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 sm:p-4 rounded-t-2xl flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img 
            src={profileImage} 
            alt="Leo" 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">Chat with Leo</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400">Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 transition-colors flex-shrink-0"
          aria-label="Close chat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 dark:bg-gray-900">
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index} 
            role={msg.role} 
            message={msg.message}
            profileImage={profileImage}
          />
        ))}
        {isLoading && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-sm">Thinking...</span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 italic">
              First message may take 20-30 seconds while the AI model loads
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatBot;
