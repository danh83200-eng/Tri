import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsUserMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/library', label: 'Kiến thức' },
    { path: '/tests', label: 'Kiểm tra tâm lý' },
    { path: '/courses', label: 'Khóa học' },
    { path: '/experts', label: 'Chuyên gia' },
    { path: '/community', label: 'Cộng đồng' },
  ]

  const getDashboardPath = () => {
    if (!user) return '/login'
    switch (user.role) {
      case 'student': return '/dashboard/student'
      case 'parent': return '/dashboard/parent'
      case 'expert': return '/dashboard/expert'
      case 'admin': return '/dashboard/admin'
      default: return '/dashboard/student'
    }
  }

  const getRoleLabel = (role) => {
    switch (role) {
      case 'student': return 'Học sinh'
      case 'parent': return 'Phụ huynh'
      case 'expert': return 'Chuyên gia'
      case 'admin': return 'Quản trị viên'
      default: return 'Người dùng'
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <div className="header__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" />
              <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="20" r="4" fill="white"/>
              <path d="M26 14L30 10M30 10L26 10M30 10L30 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366F1"/>
                  <stop offset="1" stopColor="#A855F7"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-name">Tâm Lý Học Đường</span>
            <span className="header__logo-tagline">Đồng hành cùng bạn</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="header__nav hide-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="header__actions">
          {/* Hotline */}
          <a href="tel:1800599920" className="header__hotline hide-mobile">
            <div className="header__hotline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="header__hotline-text">
              <span className="header__hotline-label">Hotline 24/7</span>
              <span className="header__hotline-number">1800 5999 20</span>
            </div>
          </a>

          {user ? (
            <div className="header__user-menu">
              <button 
                className="header__user-btn"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <div className="header__user-avatar">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} />
                  ) : (
                    <span>{user.name?.charAt(0) || 'U'}</span>
                  )}
                </div>
                <div className="header__user-info hide-mobile">
                  <span className="header__user-name">{user.name}</span>
                  <span className="header__user-role">{getRoleLabel(user.role)}</span>
                </div>
                <svg className="header__user-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {isUserMenuOpen && (
                <div className="header__dropdown animate-fadeInDown">
                  <Link to={getDashboardPath()} className="header__dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="9" rx="1"/>
                      <rect x="14" y="3" width="7" height="5" rx="1"/>
                      <rect x="14" y="12" width="7" height="9" rx="1"/>
                      <rect x="3" y="16" width="7" height="5" rx="1"/>
                    </svg>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="header__dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    Hồ sơ cá nhân
                  </Link>
                  <Link to="/settings" className="header__dropdown-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
                    </svg>
                    Cài đặt
                  </Link>
                  <div className="header__dropdown-divider"></div>
                  <button onClick={onLogout} className="header__dropdown-item header__dropdown-item--danger">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                      <polyline points="16,17 21,12 16,7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="header__auth-buttons hide-mobile">
              <Link to="/login" className="btn btn-ghost">Đăng nhập</Link>
              <Link to="/register" className="btn btn-primary">Đăng ký</Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button 
            className="header__mobile-btn hide-desktop hide-tablet"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="header__mobile-hotline">
          <a href="tel:1800599920" className="header__hotline">
            <div className="header__hotline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="header__hotline-text">
              <span className="header__hotline-label">Hotline 24/7</span>
              <span className="header__hotline-number">1800 5999 20</span>
            </div>
          </a>
        </div>

        {!user && (
          <div className="header__mobile-auth">
            <Link to="/login" className="btn btn-secondary btn-lg">Đăng nhập</Link>
            <Link to="/register" className="btn btn-primary btn-lg">Đăng ký</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="header__overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Header
