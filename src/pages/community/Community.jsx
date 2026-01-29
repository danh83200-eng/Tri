import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Community.css'

const postsData = [
  {
    id: 1,
    title: 'Làm sao để vượt qua áp lực thi đại học?',
    content: 'Mình đang học lớp 12 và cảm thấy rất áp lực. Có ai có kinh nghiệm chia sẻ không ạ?',
    author: {
      name: 'Hoàng Minh',
      avatar: null,
      role: 'student'
    },
    category: 'Hỏi đáp',
    tags: ['stress', 'thi cử', 'lớp 12'],
    likes: 45,
    comments: 23,
    views: 567,
    createdAt: '2 giờ trước',
    isPinned: false
  },
  {
    id: 2,
    title: '[Chia sẻ] Phương pháp giúp con tập trung học tập hiệu quả',
    content: 'Sau nhiều năm làm phụ huynh, mình muốn chia sẻ một số phương pháp đã giúp con mình cải thiện khả năng tập trung...',
    author: {
      name: 'Nguyễn Thu Hà',
      avatar: null,
      role: 'parent'
    },
    category: 'Chia sẻ kinh nghiệm',
    tags: ['phụ huynh', 'tập trung', 'học tập'],
    likes: 89,
    comments: 34,
    views: 1234,
    createdAt: '5 giờ trước',
    isPinned: true
  },
  {
    id: 3,
    title: 'Cách xử lý khi con có dấu hiệu bị bắt nạt?',
    content: 'Con gái mình gần đây có biểu hiện lạ, không muốn đi học. Mình nghi ngờ con bị bắt nạt. Xin ý kiến các bậc phụ huynh...',
    author: {
      name: 'Trần Văn Nam',
      avatar: null,
      role: 'parent'
    },
    category: 'Hỏi đáp',
    tags: ['bắt nạt', 'phụ huynh', 'trẻ em'],
    likes: 67,
    comments: 45,
    views: 890,
    createdAt: '1 ngày trước',
    isPinned: false
  },
  {
    id: 4,
    title: '[Từ chuyên gia] Hiểu về rối loạn lo âu ở học sinh',
    content: 'Trong bài viết này, tôi sẽ chia sẻ về các dấu hiệu nhận biết rối loạn lo âu ở học sinh và cách hỗ trợ...',
    author: {
      name: 'TS. Nguyễn Văn An',
      avatar: '/assets/images/experts/expert-1.jpg',
      role: 'expert'
    },
    category: 'Kiến thức chuyên gia',
    tags: ['lo âu', 'chuyên gia', 'sức khỏe tinh thần'],
    likes: 234,
    comments: 56,
    views: 3456,
    createdAt: '2 ngày trước',
    isPinned: true
  }
]

const categories = ['Tất cả', 'Hỏi đáp', 'Chia sẻ kinh nghiệm', 'Kiến thức chuyên gia', 'Thông báo']

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [sortBy, setSortBy] = useState('newest')

  const filteredPosts = postsData.filter(post => 
    selectedCategory === 'Tất cả' || post.category === selectedCategory
  )

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return 0
  })

  return (
    <div className="community-page">
      {/* Hero */}
      <section className="community-hero">
        <div className="container">
          <div className="community-hero__content">
            <span className="community-hero__badge">👥 Cộng đồng</span>
            <h1 className="community-hero__title">Diễn đàn Tâm lý Học đường</h1>
            <p className="community-hero__description">
              Nơi chia sẻ, học hỏi và kết nối giữa học sinh, phụ huynh và chuyên gia
            </p>
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="community-content section">
        <div className="container">
          <div className="community-layout">
            {/* Sidebar */}
            <aside className="community-sidebar">
              <Link to="/community/new" className="btn btn-primary btn-lg btn-full">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                Đăng bài mới
              </Link>

              <div className="sidebar-section">
                <h3>Danh mục</h3>
                <ul className="category-list">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-section">
                <h3>Thống kê</h3>
                <div className="community-stats">
                  <div className="stat">
                    <span className="stat-value">2,345</span>
                    <span className="stat-label">Thành viên</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">567</span>
                    <span className="stat-label">Bài viết</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">1,890</span>
                    <span className="stat-label">Bình luận</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Top đóng góp</h3>
                <ul className="top-contributors">
                  <li>
                    <div className="contributor-avatar">NA</div>
                    <div className="contributor-info">
                      <span className="name">TS. Nguyễn Văn An</span>
                      <span className="posts">45 bài viết</span>
                    </div>
                  </li>
                  <li>
                    <div className="contributor-avatar">TH</div>
                    <div className="contributor-info">
                      <span className="name">Thu Hà</span>
                      <span className="posts">23 bài viết</span>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="community-main">
              {/* Toolbar */}
              <div className="community-toolbar">
                <span>{sortedPosts.length} bài viết</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="newest">Mới nhất</option>
                  <option value="popular">Phổ biến nhất</option>
                  <option value="most-comments">Nhiều bình luận</option>
                </select>
              </div>

              {/* Posts List */}
              <div className="posts-list">
                {sortedPosts.map((post) => (
                  <Link to={`/community/${post.id}`} key={post.id} className="post-card">
                    {post.isPinned && (
                      <span className="post-card__pinned">📌 Ghim</span>
                    )}
                    <div className="post-card__header">
                      <div className="post-card__author">
                        {post.author.avatar ? (
                          <img src={post.author.avatar} alt={post.author.name} />
                        ) : (
                          <div className="author-avatar">
                            {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                        )}
                        <div className="author-info">
                          <span className="author-name">
                            {post.author.name}
                            {post.author.role === 'expert' && (
                              <span className="role-badge role-badge--expert">Chuyên gia</span>
                            )}
                          </span>
                          <span className="post-time">{post.createdAt}</span>
                        </div>
                      </div>
                      <span className="post-card__category">{post.category}</span>
                    </div>

                    <h3 className="post-card__title">{post.title}</h3>
                    <p className="post-card__content">{post.content}</p>

                    <div className="post-card__tags">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="tag">#{tag}</span>
                      ))}
                    </div>

                    <div className="post-card__footer">
                      <div className="post-stats">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/>
                          </svg>
                          {post.likes}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                          </svg>
                          {post.comments}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Community
