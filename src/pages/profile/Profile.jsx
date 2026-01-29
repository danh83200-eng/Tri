import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || 'Nguyễn Văn A',
    email: user?.email || 'nguyenvana@email.com',
    phone: '0912345678',
    school: 'THPT Nguyễn Trãi',
    grade: 'Lớp 12',
    birthDate: '2008-05-15',
    bio: 'Học sinh yêu thích khoa học và nghệ thuật. Đang tìm hiểu về định hướng nghề nghiệp trong tương lai.'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Save to API
    console.log('Saving profile:', formData)
  }

  const stats = [
    { label: 'Bài test đã làm', value: 8 },
    { label: 'Phiên tư vấn', value: 3 },
    { label: 'Bài viết đã lưu', value: 15 },
    { label: 'Khóa học tham gia', value: 2 }
  ]

  const recentActivity = [
    { type: 'test', title: 'Hoàn thành bài test Stress (PSS-10)', date: '28/01/2026', icon: '📊' },
    { type: 'article', title: 'Đọc bài viết: Cách đối mặt với áp lực học tập', date: '27/01/2026', icon: '📖' },
    { type: 'booking', title: 'Hoàn thành phiên tư vấn với TS. Nguyễn Văn An', date: '25/01/2026', icon: '💬' },
    { type: 'course', title: 'Bắt đầu khóa học: Quản lý Stress hiệu quả', date: '23/01/2026', icon: '🎓' }
  ]

  return (
    <div className="profile-page">
      {/* Header */}
      <div className="profile-header">
        <div className="container">
          <div className="profile-header__content">
            <div className="profile-avatar">
              {user?.avatar ? (
                <img src={user.avatar} alt={formData.name} />
              ) : (
                <span>{formData.name.charAt(0)}</span>
              )}
              <button className="profile-avatar__edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </button>
            </div>
            <div className="profile-info">
              <h1>{formData.name}</h1>
              <p className="profile-role">Học sinh</p>
              <p className="profile-school">{formData.school} • {formData.grade}</p>
            </div>
            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button className="btn btn-ghost" onClick={() => setIsEditing(false)}>Hủy</button>
                  <button className="btn btn-primary" onClick={handleSave}>Lưu thay đổi</button>
                </>
              ) : (
                <button className="btn btn-ghost" onClick={() => setIsEditing(true)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Chỉnh sửa
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="profile-stats">
            {stats.map((stat, i) => (
              <div key={i} className="profile-stat">
                <span className="profile-stat__value">{stat.value}</span>
                <span className="profile-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="profile-content section">
        <div className="container">
          {/* Tabs */}
          <div className="profile-tabs">
            <button 
              className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Tổng quan
            </button>
            <button 
              className={`profile-tab ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Thông tin cá nhân
            </button>
            <button 
              className={`profile-tab ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              Lịch sử hoạt động
            </button>
          </div>

          <div className="profile-tab-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="profile-overview">
                <div className="profile-section">
                  <h2>Giới thiệu</h2>
                  {isEditing ? (
                    <textarea 
                      name="bio" 
                      value={formData.bio} 
                      onChange={handleChange}
                      rows="4"
                      className="profile-bio-edit"
                    />
                  ) : (
                    <p className="profile-bio">{formData.bio}</p>
                  )}
                </div>

                <div className="profile-section">
                  <h2>Hoạt động gần đây</h2>
                  <div className="activity-list">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="activity-item">
                        <span className="activity-icon">{activity.icon}</span>
                        <div className="activity-info">
                          <p>{activity.title}</p>
                          <span>{activity.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="profile-section">
                  <h2>Truy cập nhanh</h2>
                  <div className="quick-links">
                    <Link to="/tests" className="quick-link">
                      <span className="quick-link__icon">📊</span>
                      <span>Làm bài test</span>
                    </Link>
                    <Link to="/experts" className="quick-link">
                      <span className="quick-link__icon">👨‍⚕️</span>
                      <span>Đặt lịch tư vấn</span>
                    </Link>
                    <Link to="/library" className="quick-link">
                      <span className="quick-link__icon">📚</span>
                      <span>Thư viện</span>
                    </Link>
                    <Link to="/courses" className="quick-link">
                      <span className="quick-link__icon">🎓</span>
                      <span>Khóa học</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Info Tab */}
            {activeTab === 'info' && (
              <div className="profile-info-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Họ và tên</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Số điện thoại</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ngày sinh</label>
                    <input 
                      type="date" 
                      name="birthDate" 
                      value={formData.birthDate} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Trường học</label>
                    <input 
                      type="text" 
                      name="school" 
                      value={formData.school} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lớp</label>
                    <input 
                      type="text" 
                      name="grade" 
                      value={formData.grade} 
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="profile-history">
                <div className="history-filters">
                  <select>
                    <option>Tất cả hoạt động</option>
                    <option>Bài test</option>
                    <option>Tư vấn</option>
                    <option>Khóa học</option>
                    <option>Bài viết</option>
                  </select>
                </div>
                <div className="activity-list activity-list--full">
                  {[...recentActivity, ...recentActivity].map((activity, i) => (
                    <div key={i} className="activity-item">
                      <span className="activity-icon">{activity.icon}</span>
                      <div className="activity-info">
                        <p>{activity.title}</p>
                        <span>{activity.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
