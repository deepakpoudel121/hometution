export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Book icon */}
        <rect x="4" y="8" width="24" height="18" rx="2" fill="currentColor" className="text-primary" />
        <rect x="6" y="10" width="20" height="2" rx="1" fill="white" />
        <rect x="6" y="14" width="16" height="2" rx="1" fill="white" />
        <rect x="6" y="18" width="12" height="2" rx="1" fill="white" />
  
        {/* Connection line */}
        <line x1="28" y1="17" x2="36" y2="17" stroke="currentColor" strokeWidth="2" className="text-primary" />
  
        {/* Person icon */}
        <circle cx="42" cy="12" r="4" fill="currentColor" className="text-primary" />
        <path
          d="M36 26c0-3.314 2.686-6 6-6s6 2.686 6 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary"
        />
  
        {/* Text */}
        <text
          x="58"
          y="20"
          className="fill-slate-900 dark:fill-white"
          fontSize="16"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TutorMatch
        </text>
      </svg>
    )
  }
  