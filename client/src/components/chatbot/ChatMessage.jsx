const ChatMessage = ({ role, message, profileImage }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <img 
          src={profileImage} 
          alt="Leo" 
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div className="flex flex-col max-w-[75%] sm:max-w-[280px]">
        {!isUser && (
          <span className="text-xs text-gray-600 dark:text-gray-400 mb-1 ml-1">Leo</span>
        )}
        <div
          className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 ${
            isUser
              ? 'bg-gray-800 dark:bg-gray-700 text-white rounded-br-sm'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-sm'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
