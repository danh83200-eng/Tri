import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { label: 'Về chúng tôi', path: '/about' },
      { label: 'Đội ngũ chuyên gia', path: '/experts' },
      { label: 'Câu chuyện thành công', path: '/stories' },
      { label: 'Liên hệ', path: '/contact' },
    ],
    resources: [
      { label: 'Thư viện kiến thức', path: '/library' },
      { label: 'Bài kiểm tra tâm lý', path: '/tests' },
      { label: 'Khóa học', path: '/courses' },
      { label: 'Cộng đồng', path: '/community' },
    ],
    support: [
      { label: 'Trung tâm trợ giúp', path: '/help' },
      { label: 'Câu hỏi thường gặp', path: '/faq' },
      { label: 'Chính sách bảo mật', path: '/privacy' },
      { label: 'Điều khoản sử dụng', path: '/terms' },
    ],
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    { 
      name: 'Zalo', 
      url: 'https://zalo.me', 
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.08c-.15.41-.85.75-1.25.87-.27.08-.62.15-1.81-.39-1.52-.68-2.5-2.22-2.57-2.32-.08-.1-.62-.82-.62-1.57s.39-1.12.53-1.27c.14-.15.31-.19.41-.19.1 0 .21 0 .3.01.1.01.23-.04.36.27.13.31.46 1.12.5 1.2.04.08.07.18.02.28-.05.1-.08.17-.15.26-.08.09-.17.21-.24.28-.08.08-.16.17-.07.33.09.16.41.68.88 1.1.61.54 1.12.71 1.28.79.16.08.26.07.35-.04.09-.11.4-.47.51-.63.11-.16.22-.13.37-.08.15.05.96.45 1.12.53.16.08.27.12.31.19.04.07.04.39-.1.8z"/>
        </svg>
      )
    },
  ]

  return (
    <footer className="footer">
      {/* Emergency Banner */}
      <div className="footer__emergency">
        <div className="container">
          <div className="footer__emergency-content">
            <div className="footer__emergency-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="footer__emergency-text">
              <span className="footer__emergency-label">Đường dây nóng hỗ trợ tâm lý 24/7</span>
              <a href="tel:1800599920" className="footer__emergency-number">1800 5999 20</a>
            </div>
            <span className="footer__emergency-badge">Miễn phí</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" />
                    <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="20" cy="20" r="4" fill="white"/>
                    <path d="M26 14L30 10M30 10L26 10M30 10L30 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366F1"/>
                        <stop offset="1" stopColor="#A855F7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="footer__logo-text">Tâm Lý Học Đường</span>
              </Link>
              <p className="footer__description">
                Nền tảng hỗ trợ sức khỏe tinh thần cho học sinh Việt Nam. 
                Chúng tôi cung cấp kiến thức, công cụ đánh giá và kết nối với 
                các chuyên gia tâm lý hàng đầu.
              </p>
              <div className="footer__social">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer__links-group">
              <h4 className="footer__links-title">Về chúng tôi</h4>
              <ul className="footer__links">
                {footerLinks.about.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Tài nguyên</h4>
              <ul className="footer__links">
                {footerLinks.resources.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__links-title">Hỗ trợ</h4>
              <ul className="footer__links">
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer__contact">
              <h4 className="footer__links-title">Liên hệ</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>123 Đường ABC, Quận 1, TP.HCM</span>
                </div>
                <div className="footer__contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                  </svg>
                  <a href="mailto:contact@tamlyhocduong.vn">contact@tamlyhocduong.vn</a>
                </div>
                <div className="footer__contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:02812345678">(028) 1234 5678</a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="footer__newsletter">
                <h5 className="footer__newsletter-title">Đăng ký nhận tin</h5>
                <form className="footer__newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Email của bạn" 
                    className="footer__newsletter-input"
                  />
                  <button type="submit" className="footer__newsletter-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} Tâm Lý Học Đường. Bảo lưu mọi quyền.
            </p>
            <div className="footer__bottom-links">
              <Link to="/privacy">Chính sách bảo mật</Link>
              <span>•</span>
              <Link to="/terms">Điều khoản</Link>
              <span>•</span>
              <Link to="/sitemap">Sơ đồ trang</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
