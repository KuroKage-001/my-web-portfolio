export default function ProjectCard({ title, description, tags, repoUrl, liveUrl, image }) {
  return (
    <article className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-primary-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
      
      {/* Visual Header Area */}
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 dark:from-primary-600 dark:via-purple-700 dark:to-pink-700 opacity-90 group-hover:opacity-100 transition-all duration-500">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        )}
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition-all duration-500" />
      </div>

      {/* Content Area */}
      <div className="relative p-6 z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 dark:group-hover:from-primary-400 dark:group-hover:to-purple-400 transition-all duration-500">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Enhanced Technology Tags with stagger animation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{ animationDelay: `${index * 50}ms` }}
              className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/40 dark:to-purple-900/40 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200/60 dark:border-primary-700/60 hover:scale-110 hover:shadow-md hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Prominent Action Buttons with Icons */}
        <div className="flex gap-3">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700/80 text-gray-900 dark:text-white rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-gray-600 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 group/btn shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Code</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md hover:shadow-xl group/btn relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <span className="text-sm relative z-10">Live Demo</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
