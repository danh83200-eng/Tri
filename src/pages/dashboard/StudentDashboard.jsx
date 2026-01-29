import { Link } from 'react-router-dom'
import './Dashboard.css'

const StudentDashboard = ({ user }) => {
  // Sample data
  const upcomingSession = {
    expert: 'TS. Nguyễn Văn An',
    date: '29/01/2026',
    time: '15:00',
    type: 'Online'
  }

  const testResults = [
    { name: 'Stress (PSS-10)', score: 18, level: 'Trung bình', date: '25/01/2026' },
    { name: 'Lo âu (GAD-7)', score: 8, level: 'Nhẹ', date: '20/01/2026' }
  ]

  const savedArticles = [
    { id: 1, title: 'Cách đối mặt với áp lực học tập' },
    { id: 2, title: 'Kỹ năng giao tiếp cho học sinh' }
  ]

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="dashboard-header__greeting">
            <h1>Xin chào, {user?.name || 'Bạn'}! 👋</h1>
            <p>Chào mừng bạn trở lại. Hãy tiếp tục hành trình chăm sóc sức khỏe tinh thần nhé!</p>
          </div>
          <div className="dashboard-header__actions">
            <Link to="/tests" className="btn btn-ghost">
              Làm bài test
            </Link>
            <Link to="/experts" className="btn btn-primary">
              Đặt lịch tư vấn
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-card__icon">📊</div>
            <div className="stat-card__content">
              <span className="stat-card__value">3</span>
              <span className="stat-card__label">Bài test đã làm</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">💬</div>
            <div className="stat-card__content">
              <span className="stat-card__value">2</span>
              <span className="stat-card__label">Phiên tư vấn</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">📚</div>
            <div className="stat-card__content">
              <span className="stat-card__value">12</span>
              <span className="stat-card__label">Bài viết đã đọc</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">🏆</div>
            <div className="stat-card__content">
              <span className="stat-card__value">5</span>
              <span className="stat-card__label">Thành tựu</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Upcoming Session */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>📅 Lịch hẹn sắp tới</h2>
              <Link to="/booking" className="dashboard-card__link">Xem tất cả</Link>
            </div>
            {upcomingSession ? (
              <div className="upcoming-session">
                <div className="upcoming-session__info">
                  <h4>{upcomingSession.expert}</h4>
                  <p>{upcomingSession.date} lúc {upcomingSession.time}</p>
                  <span className="session-badge">{upcomingSession.type}</span>
                </div>
                <button className="btn btn-primary">Tham gia</button>
              </div>
            ) : (
              <div className="empty-state">
                <p>Chưa có lịch hẹn nào</p>
                <Link to="/experts" className="btn btn-ghost btn-sm">Đặt lịch ngay</Link>
              </div>
            )}
          </div>

          {/* Test Results */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>📋 Kết quả test gần đây</h2>
              <Link to="/tests" className="dashboard-card__link">Làm test mới</Link>
            </div>
            <div className="test-results-list">
              {testResults.map((test, i) => (
                <div key={i} className="test-result-item">
                  <div className="test-result-item__info">
                    <h4>{test.name}</h4>
                    <p>{test.date}</p>
                  </div>
                  <div className="test-result-item__score">
                    <span className="score">{test.score}</span>
                    <span className="level">{test.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved Articles */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>🔖 Bài viết đã lưu</h2>
              <Link to="/library" className="dashboard-card__link">Xem thư viện</Link>
            </div>
            <div className="saved-articles-list">
              {savedArticles.map((article) => (
                <Link key={article.id} to={`/library/${article.id}`} className="saved-article-item">
                  <span>{article.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>⚡ Truy cập nhanh</h2>
            </div>
            <div className="quick-actions">
              <Link to="/tests/stress" className="quick-action">
                <span className="quick-action__icon">😰</span>
                <span>Test Stress</span>
              </Link>
              <Link to="/tests/anxiety" className="quick-action">
                <span className="quick-action__icon">😟</span>
                <span>Test Lo âu</span>
              </Link>
              <Link to="/library" className="quick-action">
                <span className="quick-action__icon">📚</span>
                <span>Thư viện</span>
              </Link>
              <Link to="/experts" className="quick-action">
                <span className="quick-action__icon">👨‍⚕️</span>
                <span>Chuyên gia</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard
