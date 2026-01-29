import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Settings.css'

const Settings = ({ user, onLogout }) => {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('account')
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newsletter: true,
    appointments: true,
    testReminder: true
  })
  const [privacy, setPrivacy] = useState({
    profilePublic: false,
    showActivity: true,
    allowMessaging: true
  })

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handlePrivacyChange = (key) => {
    setPrivacy(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleDeleteAccount = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.')) {
      // Delete account logic
      onLogout()
      navigate('/')
    }
  }

  return (
    <div className="settings-page">
      <div className="container">
        <div className="settings-layout">
          {/* Sidebar */}
          <aside className="settings-sidebar">
            <h2>Cài đặt</h2>
            <nav className="settings-nav">
              <button 
                className={activeSection === 'account' ? 'active' : ''}
                onClick={() => setActiveSection('account')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Tài khoản
              </button>
              <button 
                className={activeSection === 'notifications' ? 'active' : ''}
                onClick={() => setActiveSection('notifications')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
                Thông báo
              </button>
              <button 
                className={activeSection === 'privacy' ? 'active' : ''}
                onClick={() => setActiveSection('privacy')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Quyền riêng tư
              </button>
              <button 
                className={activeSection === 'security' ? 'active' : ''}
                onClick={() => setActiveSection('security')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                Bảo mật
              </button>
              <button 
                className={activeSection === 'appearance' ? 'active' : ''}
                onClick={() => setActiveSection('appearance')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
                Giao diện
              </button>
            </nav>
          </aside>

          {/* Content */}
          <main className="settings-main">
            {/* Account Section */}
            {activeSection === 'account' && (
              <div className="settings-section">
                <h3>Thông tin tài khoản</h3>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row__info">
                      <label>Email</label>
                      <p>{user?.email || 'nguyenvana@email.com'}</p>
                    </div>
                    <button className="btn btn-ghost btn-sm">Thay đổi</button>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__info">
                      <label>Số điện thoại</label>
                      <p>0912 345 678</p>
                    </div>
                    <button className="btn btn-ghost btn-sm">Thay đổi</button>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__info">
                      <label>Vai trò</label>
                      <p>Học sinh</p>
                    </div>
                  </div>
                </div>

                <h3>Liên kết tài khoản</h3>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row__info connected-account">
                      <svg viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <div>
                        <label>Google</label>
                        <p>Đã liên kết</p>
                      </div>
                    </div>
                    <button className="btn btn-ghost btn-sm">Hủy liên kết</button>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__info connected-account">
                      <svg viewBox="0 0 24 24" fill="#1877F2">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <div>
                        <label>Facebook</label>
                        <p>Chưa liên kết</p>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm">Liên kết</button>
                  </div>
                </div>

                <h3>Xóa tài khoản</h3>
                <div className="settings-card settings-card--danger">
                  <p>Khi xóa tài khoản, tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn và không thể khôi phục.</p>
                  <button className="btn btn-danger" onClick={handleDeleteAccount}>
                    Xóa tài khoản
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <div className="settings-section">
                <h3>Tùy chọn thông báo</h3>
                <div className="settings-card">
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Thông báo qua Email</label>
                      <p>Nhận thông báo quan trọng qua email</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.email ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('email')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Thông báo đẩy</label>
                      <p>Nhận thông báo trên trình duyệt</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.push ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('push')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Thông báo SMS</label>
                      <p>Nhận nhắn tin về lịch hẹn</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.sms ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('sms')}
                    >
                      <span></span>
                    </button>
                  </div>
                </div>

                <h3>Loại thông báo</h3>
                <div className="settings-card">
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Nhắc nhở lịch hẹn</label>
                      <p>Nhận nhắc nhở trước phiên tư vấn</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.appointments ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('appointments')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Nhắc nhở làm test</label>
                      <p>Gợi ý làm lại test định kỳ</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.testReminder ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('testReminder')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Bản tin</label>
                      <p>Nhận bài viết và khuyến mãi mới</p>
                    </div>
                    <button 
                      className={`toggle-switch ${notifications.newsletter ? 'active' : ''}`}
                      onClick={() => handleNotificationChange('newsletter')}
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Section */}
            {activeSection === 'privacy' && (
              <div className="settings-section">
                <h3>Quyền riêng tư</h3>
                <div className="settings-card">
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Hồ sơ công khai</label>
                      <p>Cho phép người khác xem hồ sơ của bạn</p>
                    </div>
                    <button 
                      className={`toggle-switch ${privacy.profilePublic ? 'active' : ''}`}
                      onClick={() => handlePrivacyChange('profilePublic')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Hiển thị hoạt động</label>
                      <p>Hiển thị bài test và khóa học đã tham gia</p>
                    </div>
                    <button 
                      className={`toggle-switch ${privacy.showActivity ? 'active' : ''}`}
                      onClick={() => handlePrivacyChange('showActivity')}
                    >
                      <span></span>
                    </button>
                  </div>
                  <div className="settings-toggle">
                    <div className="settings-toggle__info">
                      <label>Cho phép nhắn tin</label>
                      <p>Nhận tin nhắn từ thành viên khác</p>
                    </div>
                    <button 
                      className={`toggle-switch ${privacy.allowMessaging ? 'active' : ''}`}
                      onClick={() => handlePrivacyChange('allowMessaging')}
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Section */}
            {activeSection === 'security' && (
              <div className="settings-section">
                <h3>Bảo mật</h3>
                <div className="settings-card">
                  <div className="settings-row">
                    <div className="settings-row__info">
                      <label>Mật khẩu</label>
                      <p>Đã thay đổi 30 ngày trước</p>
                    </div>
                    <button className="btn btn-ghost btn-sm">Đổi mật khẩu</button>
                  </div>
                  <div className="settings-row">
                    <div className="settings-row__info">
                      <label>Xác thực 2 lớp</label>
                      <p>Tăng cường bảo mật tài khoản</p>
                    </div>
                    <button className="btn btn-primary btn-sm">Kích hoạt</button>
                  </div>
                </div>

                <h3>Phiên đăng nhập</h3>
                <div className="settings-card">
                  <div className="session-item">
                    <div className="session-info">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <path d="M8 21h8M12 17v4"/>
                      </svg>
                      <div>
                        <label>Windows • Chrome</label>
                        <p>Hà Nội, Việt Nam • Phiên hiện tại</p>
                      </div>
                    </div>
                  </div>
                  <div className="session-item">
                    <div className="session-info">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                      </svg>
                      <div>
                        <label>iPhone • Safari</label>
                        <p>Hà Nội, Việt Nam • 2 ngày trước</p>
                      </div>
                    </div>
                    <button className="btn btn-ghost btn-sm">Đăng xuất</button>
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Section */}
            {activeSection === 'appearance' && (
              <div className="settings-section">
                <h3>Giao diện</h3>
                <div className="settings-card">
                  <div className="theme-options">
                    <button className="theme-option active">
                      <div className="theme-preview theme-preview--light"></div>
                      <span>Sáng</span>
                    </button>
                    <button className="theme-option">
                      <div className="theme-preview theme-preview--dark"></div>
                      <span>Tối</span>
                    </button>
                    <button className="theme-option">
                      <div className="theme-preview theme-preview--auto"></div>
                      <span>Tự động</span>
                    </button>
                  </div>
                </div>

                <h3>Ngôn ngữ</h3>
                <div className="settings-card">
                  <select className="language-select">
                    <option value="vi">🇻🇳 Tiếng Việt</option>
                    <option value="en">🇬🇧 English</option>
                  </select>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Settings
