/* PlaceholderImage Component - Returns a styled SVG placeholder when images are missing */

const PlaceholderImage = ({ 
  width = '100%', 
  height = '200px', 
  text = 'Image',
  type = 'default', // default, avatar, course, article, expert
  className = '' 
}) => {
  const colors = {
    default: { bg: '#e2e8f0', fg: '#94a3b8', icon: '#64748b' },
    avatar: { bg: '#ddd6fe', fg: '#a78bfa', icon: '#7c3aed' },
    course: { bg: '#dcfce7', fg: '#86efac', icon: '#22c55e' },
    article: { bg: '#fef3c7', fg: '#fcd34d', icon: '#f59e0b' },
    expert: { bg: '#dbeafe', fg: '#93c5fd', icon: '#3b82f6' }
  }

  const c = colors[type] || colors.default

  const icons = {
    default: (
      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
    avatar: (
      <>
        <circle cx="12" cy="8" r="4" strokeWidth="1.5"/>
        <path d="M20 21a8 8 0 10-16 0" strokeWidth="1.5"/>
      </>
    ),
    course: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 14v7" strokeWidth="1.5"/>
        <path d="M6 11.5v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" strokeWidth="1.5"/>
      </>
    ),
    article: (
      <>
        <path d="M4 4h16v16H4V4z" strokeWidth="1.5"/>
        <path d="M8 8h8M8 12h8M8 16h4" strokeWidth="1.5" strokeLinecap="round"/>
      </>
    ),
    expert: (
      <>
        <circle cx="12" cy="8" r="4" strokeWidth="1.5"/>
        <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeWidth="1.5"/>
        <path d="M16 3.13a4 4 0 010 7.75" strokeWidth="1.5"/>
        <path d="M21 21v-2a4 4 0 00-3-3.87" strokeWidth="1.5"/>
      </>
    )
  }

  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={c.icon}
      style={{ 
        width, 
        height, 
        backgroundColor: c.bg,
        display: 'block'
      }}
      className={className}
    >
      <rect width="24" height="24" fill={c.bg}/>
      <g transform="translate(6, 4) scale(0.5)">
        {icons[type] || icons.default}
      </g>
      <text 
        x="12" 
        y="19" 
        textAnchor="middle" 
        fill={c.icon}
        fontSize="3"
        fontFamily="sans-serif"
      >
        {text}
      </text>
    </svg>
  )
}

export default PlaceholderImage
