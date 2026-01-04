import { useState } from 'react';

const ChatInput = ({ onSend, disabled }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const maxLength = 1000;
  const minLength = 1;

  const validateInput = (text) => {
    const trimmed = text.trim();
    
    if (!trimmed) {
      setError('Message cannot be empty');
      return false;
    }
    
    if (trimmed.length < minLength) {
      setError('Message is too short');
      return false;
    }
    
    if (trimmed.length > maxLength) {
      setError(`Message is too long (max ${maxLength} characters)`);
      return false;
    }
    
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (disabled) return;
    
    if (validateInput(input)) {
      onSend(input.trim());
      setInput('');
      setError('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    
    // Enforce max length
    if (value.length <= maxLength) {
      setInput(value);
      // Clear error when user starts typing
      if (error) setError('');
    }
  };

  const isInputValid = input.trim().length >= minLength && input.trim().length <= maxLength;

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-2xl">
      <form onSubmit={handleSubmit} className="p-3 sm:p-4">
        <div className="flex gap-2 items-end">
          <div className="flex-1">
            <input
              type="text"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={disabled}
              maxLength={maxLength}
              aria-label="Chat message input"
              aria-invalid={!!error}
              aria-describedby={error ? "input-error" : "input-hint"}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 disabled:opacity-50 placeholder-gray-500 dark:placeholder-gray-400 text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            disabled={disabled || !isInputValid}
            className="bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 text-white rounded-lg p-2.5 sm:p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            aria-label="Send message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        {/* Error message */}
        {error && (
          <div id="input-error" className="mt-2 px-1 text-xs text-red-500 dark:text-red-400" role="alert">
            {error}
          </div>
        )}
        
        {/* Helper text and character count */}
        <div className="flex justify-between items-center mt-2 px-1 gap-2">
          <span id="input-hint" className="text-xs text-gray-500 dark:text-gray-400 truncate">
            Ask about Leo's skills or projects!
          </span>
          <span className={`text-xs flex-shrink-0 ${
            input.length > maxLength * 0.9 
              ? 'text-orange-500 dark:text-orange-400 font-medium' 
              : 'text-gray-500 dark:text-gray-400'
          }`}>
            {input.length}/{maxLength}
          </span>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
