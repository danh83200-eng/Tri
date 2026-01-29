import { Link } from 'react-router-dom'
import './Dashboard.css'

const ExpertDashboard = ({ user }) => {
  // Sample data
  const todaySchedule = [
    { id: 1, time: '09:00', client: 'Nguyễn Văn A', type: 'Online', status: 'upcoming' },
    { id: 2, time: '11:00', client: 'Trần Thị B', type: 'Trực tiếp', status: 'upcoming' },
    { id: 3, time: '14:00', client: 'Lê Văn C', type: 'Online', status: 'upcoming' }
  ]

  const stats = {
    totalSessions: 1250,
    thisMonth: 45,
    rating: 4.9,
    earnings: 13500000
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header dashboard-header--expert">
          <div className="dashboard-header__greeting">
            <h1>Xin chào, {user?.name || 'Chuyên gia'}! 👋</h1>
            <p>Bạn có {todaySchedule.length} lịch hẹn hôm nay</p>
          </div>
          <div className="dashboard-header__actions">
            <button className="btn btn-ghost">
              Quản lý lịch
            </button>
            <button className="btn btn-primary">
              Cập nhật hồ sơ
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-card__icon">💬</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.totalSessions.toLocaleString()}</span>
              <span className="stat-card__label">Tổng phiên tư vấn</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">📅</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.thisMonth}</span>
              <span className="stat-card__label">Phiên tháng này</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">⭐</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.rating}</span>
              <span className="stat-card__label">Đánh giá trung bình</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">💰</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{(stats.earnings / 1000000).toFixed(1)}M</span>
              <span className="stat-card__label">Thu nhập tháng</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Today's Schedule */}
          <div className="dashboard-card dashboard-card--full">
            <div className="dashboard-card__header">
              <h2>📅 Lịch hẹn hôm nay</h2>
              <Link to="/booking" className="dashboard-card__link">Xem tất cả</Link>
            </div>
            <div className="schedule-list">
              {todaySchedule.map((item) => (
                <div key={item.id} className="schedule-item">
                  <div className="schedule-item__time">
                    <span>{item.time}</span>
                  </div>
                  <div className="schedule-item__info">
                    <h4>{item.client}</h4>
                    <span className={`type-badge type-badge--${item.type === 'Online' ? 'online' : 'inperson'}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="schedule-item__actions">
                    <button className="btn btn-sm btn-ghost">Chi tiết</button>
                    <button className="btn btn-sm btn-primary">Bắt đầu</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>⭐ Đánh giá gần đây</h2>
            </div>
            <div className="reviews-preview">
              <div className="review-preview-item">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p>"Thầy rất nhiệt tình và tận tâm..."</p>
                <span>- Nguyễn H., 25/01</span>
              </div>
              <div className="review-preview-item">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p>"Phương pháp rất hiệu quả..."</p>
                <span>- Trần M., 24/01</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>⚡ Thao tác nhanh</h2>
            </div>
            <div className="quick-actions">
              <button className="quick-action">
                <span className="quick-action__icon">📝</span>
                <span>Viết bài</span>
              </button>
              <button className="quick-action">
                <span className="quick-action__icon">🎥</span>
                <span>Tạo video</span>
              </button>
              <button className="quick-action">
                <span className="quick-action__icon">📊</span>
                <span>Báo cáo</span>
              </button>
              <button className="quick-action">
                <span className="quick-action__icon">⚙️</span>
                <span>Cài đặt</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertDashboard
