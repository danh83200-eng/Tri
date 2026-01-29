import { Link } from 'react-router-dom'
import './Dashboard.css'

const AdminDashboard = ({ user }) => {
  // Sample data
  const stats = {
    totalUsers: 15234,
    activeToday: 1234,
    totalExperts: 45,
    totalSessions: 8756,
    articles: 234,
    tests: 12
  }

  const recentUsers = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a@email.com', role: 'student', date: '29/01/2026' },
    { id: 2, name: 'Trần Thị B', email: 'b@email.com', role: 'parent', date: '29/01/2026' },
    { id: 3, name: 'Lê Văn C', email: 'c@email.com', role: 'student', date: '28/01/2026' }
  ]

  return (
    <div className="dashboard-page dashboard-page--admin">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header dashboard-header--admin">
          <div className="dashboard-header__greeting">
            <h1>Dashboard Quản trị 🛡️</h1>
            <p>Quản lý toàn bộ hệ thống Tâm Lý Học Đường</p>
          </div>
          <div className="dashboard-header__actions">
            <button className="btn btn-ghost">
              Báo cáo
            </button>
            <button className="btn btn-primary">
              Thêm nội dung
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="dashboard-stats dashboard-stats--admin">
          <div className="stat-card">
            <div className="stat-card__icon">👥</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.totalUsers.toLocaleString()}</span>
              <span className="stat-card__label">Tổng người dùng</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">🟢</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.activeToday.toLocaleString()}</span>
              <span className="stat-card__label">Online hôm nay</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">👨‍⚕️</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.totalExperts}</span>
              <span className="stat-card__label">Chuyên gia</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">💬</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.totalSessions.toLocaleString()}</span>
              <span className="stat-card__label">Phiên tư vấn</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">📚</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.articles}</span>
              <span className="stat-card__label">Bài viết</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon">📋</div>
            <div className="stat-card__content">
              <span className="stat-card__value">{stats.tests}</span>
              <span className="stat-card__label">Bài test</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          {/* Recent Users */}
          <div className="dashboard-card dashboard-card--full">
            <div className="dashboard-card__header">
              <h2>👥 Người dùng mới</h2>
              <Link to="/admin/users" className="dashboard-card__link">Quản lý người dùng</Link>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Vai trò</th>
                  <th>Ngày đăng ký</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge role-badge--${user.role}`}>
                        {user.role === 'student' ? 'Học sinh' : 'Phụ huynh'}
                      </span>
                    </td>
                    <td>{user.date}</td>
                    <td>
                      <button className="btn btn-sm btn-ghost">Xem</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>⚡ Quản lý nhanh</h2>
            </div>
            <div className="admin-actions">
              <Link to="/admin/users" className="admin-action">
                <span className="admin-action__icon">👥</span>
                <span>Người dùng</span>
              </Link>
              <Link to="/admin/experts" className="admin-action">
                <span className="admin-action__icon">👨‍⚕️</span>
                <span>Chuyên gia</span>
              </Link>
              <Link to="/admin/articles" className="admin-action">
                <span className="admin-action__icon">📚</span>
                <span>Bài viết</span>
              </Link>
              <Link to="/admin/tests" className="admin-action">
                <span className="admin-action__icon">📋</span>
                <span>Bài test</span>
              </Link>
              <Link to="/admin/reports" className="admin-action">
                <span className="admin-action__icon">📊</span>
                <span>Báo cáo</span>
              </Link>
              <Link to="/admin/settings" className="admin-action">
                <span className="admin-action__icon">⚙️</span>
                <span>Cài đặt</span>
              </Link>
            </div>
          </div>

          {/* System Status */}
          <div className="dashboard-card">
            <div className="dashboard-card__header">
              <h2>🖥️ Trạng thái hệ thống</h2>
            </div>
            <div className="system-status">
              <div className="status-item status-item--ok">
                <span className="status-dot"></span>
                <span>Server: Hoạt động bình thường</span>
              </div>
              <div className="status-item status-item--ok">
                <span className="status-dot"></span>
                <span>Database: Kết nối ổn định</span>
              </div>
              <div className="status-item status-item--ok">
                <span className="status-dot"></span>
                <span>API: 99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
