const ChatBotButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black hover:bg-gray-900 text-white rounded-full px-4 py-3 sm:px-6 sm:py-4 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 z-50 flex items-center gap-2 sm:gap-3 group"
      aria-label="Open chat with Leo"
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
      <span className="text-base sm:text-lg font-medium hidden xs:inline">Chat with Leo</span>
      <span className="text-base sm:text-lg font-medium xs:hidden">Chat with Leo</span>
    </button>
  );
};

export default ChatBotButton;
