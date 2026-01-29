import { Link } from 'react-router-dom'
import './Dashboard.css'

const ParentDashboard = ({ user }) => {
  // Sample data
  const children = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      grade: 'Lớp 11',
      lastActive: '2 giờ trước',
      testsCompleted: 5,
      sessions: 2,
      mentalHealth: 'good'
    }
  ]

  const recentActivity = [
    { type: 'test', text: 'A đã hoàn thành bài test Stress', date: '28/01/2026' },
    { type: 'article', text: 'A đã đọc bài viết về quản lý thời gian', date: '27/01/2026' },
    { type: 'session', text: 'A đã có phiên tư vấn với TS. Nguyễn Văn An', date: '25/01/2026' }
  ]

  return (
    <div className="dashboard-page">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <div className="dashboard-header__greeting">
            <h1>Xin chào, {user?.name || 'Phụ huynh'}! 👋</h1>
            <p>Theo dõi hoạt động và sức khỏe tinh thần của con em</p>
          </div>
          <div className="dashboard-header__actions">
            <Link to="/library" className="btn btn-ghost">
              Thư viện cho phụ huynh
            </Link>
            <Link to="/experts" className="btn btn-primary">
              Tư vấn chuyên gia
            </Link>
          </div>
        </div>

        {/* Children Overview */}
        <div className="dashboard-section">
          <h2 className="section-title">Con em của bạn</h2>
          <div className="children-grid">
            {children.map((child) => (
              <div key={child.id} className="child-card">
                <div className="child-card__avatar">
                  {child.name[0]}
                </div>
                <div className="child-card__info">
                  <h3>{child.name}</h3>
                  <p>{child.grade} • Hoạt động {child.lastActive}</p>
                </div>
                <div className="child-card__stats">
                  <div className="child-stat">
                    <span className="child-stat__value">{child.testsCompleted}</span>
                    <span className="child-stat__label">Bài test</span>
                  </div>
                  <div className="child-stat">
                    <span className="child-stat__value">{child.sessions}</span>
                    <span className="child-stat__label">Tư vấn</span>
                  </div>
                </div>
                <div className={`child-card__health health-${child.mentalHealth}`}>
                  {child.mentalHealth === 'good' ? '✅ Ổn định' : '⚠️ Cần theo dõi'}
                </div>
              </div>
            ))}
            
            <div className="add-child-card">
              <button className="add-child-btn">
                <span>+</span>
                <p>Thêm con em</p>
              </button>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Recent Activity */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>📊 Hoạt động gần đây</h2>
            </div>
            <div className="activity-list">
              {recentActivity.map((activity, i) => (
                <div key={i} className="activity-item">
                  <div className={`activity-icon activity-icon--${activity.type}`}>
                    {activity.type === 'test' && '📋'}
                    {activity.type === 'article' && '📚'}
                    {activity.type === 'session' && '💬'}
                  </div>
                  <div className="activity-content">
                    <p>{activity.text}</p>
                    <span>{activity.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources for Parents */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>📖 Tài liệu cho phụ huynh</h2>
              <Link to="/library" className="dashboard-card__link">Xem tất cả</Link>
            </div>
            <div className="resource-list">
              <Link to="/library/1" className="resource-item">
                <span>Cách nói chuyện với con về tâm lý</span>
              </Link>
              <Link to="/library/2" className="resource-item">
                <span>Dấu hiệu nhận biết stress ở trẻ</span>
              </Link>
              <Link to="/library/3" className="resource-item">
                <span>Hỗ trợ con trong mùa thi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentDashboard
