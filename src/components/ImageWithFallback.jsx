import { useState } from 'react'

/**
 * Image component với fallback khi src không load được
 * Thay thế bằng placeholder gradient hoặc initials
 */
const ImageWithFallback = ({ 
  src, 
  alt = '', 
  fallbackType = 'gradient', // 'gradient', 'initials', 'icon'
  initials = '',
  className = '',
  ...props 
}) => {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Generate gradient based on alt text or initials
  const getGradient = () => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    ]
    // Use alt text to pick consistent gradient
    const index = (alt || initials || '').charCodeAt(0) % gradients.length
    return gradients[index] || gradients[0]
  }

  const getInitials = () => {
    if (initials) return initials
    if (!alt) return '?'
    return alt.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()
  }

  if (hasError || !src) {
    return (
      <div 
        className={`image-fallback ${className}`}
        style={{
          background: getGradient(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: 'inherit',
          ...props.style
        }}
        {...props}
      >
        {fallbackType === 'initials' || fallbackType === 'gradient' ? (
          <span>{getInitials()}</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '40%', height: '40%' }}>
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div 
          className={`image-loading ${className}`}
          style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            position: 'absolute',
            inset: 0
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s' }}
        {...props}
      />
    </>
  )
}

export default ImageWithFallback
