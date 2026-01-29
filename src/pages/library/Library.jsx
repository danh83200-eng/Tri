import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Library.css'

// Sample articles data
const articlesData = [
  {
    id: 1,
    title: 'Cách đối mặt với áp lực học tập hiệu quả',
    excerpt: 'Khám phá những phương pháp được chứng minh khoa học giúp bạn quản lý stress và cân bằng việc học trong cuộc sống hàng ngày.',
    category: 'Áp lực học tập',
    image: '/assets/images/articles/article-1.jpg',
    readTime: '5 phút',
    date: '28/01/2026',
    views: 1234,
    likes: 89
  },
  {
    id: 2,
    title: 'Nhận biết dấu hiệu trầm cảm ở học sinh',
    excerpt: 'Hướng dẫn chi tiết giúp phụ huynh và giáo viên nhận ra sớm các dấu hiệu trầm cảm ở trẻ và cách hỗ trợ kịp thời.',
    category: 'Trầm cảm',
    image: '/assets/images/articles/article-2.jpg',
    readTime: '7 phút',
    date: '26/01/2026',
    views: 2345,
    likes: 156
  },
  {
    id: 3,
    title: 'Kỹ năng giao tiếp cho học sinh nhút nhát',
    excerpt: 'Những bài tập và kỹ thuật đơn giản giúp cải thiện sự tự tin và khả năng giao tiếp trong môi trường học đường.',
    category: 'Kỹ năng sống',
    image: '/assets/images/articles/article-3.jpg',
    readTime: '6 phút',
    date: '24/01/2026',
    views: 1876,
    likes: 112
  },
  {
    id: 4,
    title: 'Bắt nạt học đường: Cách nhận biết và xử lý',
    excerpt: 'Tìm hiểu các hình thức bắt nạt học đường phổ biến và những bước cần thiết để bảo vệ bản thân và những người xung quanh.',
    category: 'Bắt nạt học đường',
    image: '/assets/images/articles/article-4.jpg',
    readTime: '8 phút',
    date: '22/01/2026',
    views: 3456,
    likes: 234
  },
  {
    id: 5,
    title: 'Định hướng nghề nghiệp cho học sinh THPT',
    excerpt: 'Hướng dẫn từng bước giúp học sinh khám phá sở thích, năng lực và lựa chọn con đường sự nghiệp phù hợp.',
    category: 'Định hướng nghề nghiệp',
    image: '/assets/images/articles/article-5.jpg',
    readTime: '10 phút',
    date: '20/01/2026',
    views: 4567,
    likes: 345
  },
  {
    id: 6,
    title: 'Quản lý lo âu trước kỳ thi',
    excerpt: 'Các kỹ thuật thư giãn và chiến lược ôn tập hiệu quả giúp giảm lo âu và tối ưu hóa hiệu suất trong các kỳ thi.',
    category: 'Lo âu',
    image: '/assets/images/articles/article-6.jpg',
    readTime: '5 phút',
    date: '18/01/2026',
    views: 2890,
    likes: 178
  }
]

const categories = [
  { id: 'all', label: 'Tất cả', count: 100 },
  { id: 'stress', label: 'Áp lực học tập', count: 25 },
  { id: 'depression', label: 'Trầm cảm', count: 18 },
  { id: 'anxiety', label: 'Lo âu', count: 22 },
  { id: 'bullying', label: 'Bắt nạt học đường', count: 15 },
  { id: 'skills', label: 'Kỹ năng sống', count: 12 },
  { id: 'career', label: 'Định hướng nghề nghiệp', count: 8 }
]

const ageGroups = [
  { id: 'all', label: 'Tất cả độ tuổi' },
  { id: 'elementary', label: 'Tiểu học (6-11 tuổi)' },
  { id: 'middle', label: 'THCS (12-15 tuổi)' },
  { id: 'high', label: 'THPT (16-18 tuổi)' },
  { id: 'college', label: 'Đại học (18+)' }
]

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedAge, setSelectedAge] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid')

  const filteredArticles = articlesData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                            article.category.toLowerCase().includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

  return (
    <div className="library-page">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="container">
          <div className="library-hero__content">
            <span className="library-hero__badge">📚 Thư viện kiến thức</span>
            <h1 className="library-hero__title">Kiến thức tâm lý học đường</h1>
            <p className="library-hero__description">
              Khám phá hàng ngàn bài viết chất lượng về tâm lý học đường, 
              được biên soạn bởi các chuyên gia hàng đầu.
            </p>
            
            {/* Search Box */}
            <div className="library-search">
              <svg className="library-search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                className="library-search__input"
                placeholder="Tìm kiếm bài viết..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="library-search__btn">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="library-content section">
        <div className="container">
          <div className="library-layout">
            {/* Sidebar */}
            <aside className="library-sidebar">
              {/* Categories */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Chủ đề</h3>
                <ul className="category-list">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        className={`category-item ${selectedCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(cat.id)}
                      >
                        <span>{cat.label}</span>
                        <span className="category-count">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Age Filter */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Độ tuổi</h3>
                <ul className="filter-list">
                  {ageGroups.map((age) => (
                    <li key={age.id}>
                      <label className="filter-item">
                        <input
                          type="radio"
                          name="age"
                          checked={selectedAge === age.id}
                          onChange={() => setSelectedAge(age.id)}
                        />
                        <span className="filter-radio"></span>
                        <span>{age.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Tags phổ biến</h3>
                <div className="tags-list">
                  <span className="tag">#stress</span>
                  <span className="tag">#học_tập</span>
                  <span className="tag">#tự_tin</span>
                  <span className="tag">#giao_tiếp</span>
                  <span className="tag">#kỳ_thi</span>
                  <span className="tag">#cha_mẹ</span>
                  <span className="tag">#bạn_bè</span>
                </div>
              </div>
            </aside>

            {/* Main Articles */}
            <main className="library-main">
              {/* Toolbar */}
              <div className="library-toolbar">
                <div className="library-toolbar__info">
                  <span>{filteredArticles.length} bài viết</span>
                </div>
                <div className="library-toolbar__actions">
                  <select
                    className="library-sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Mới nhất</option>
                    <option value="popular">Phổ biến nhất</option>
                    <option value="views">Lượt xem</option>
                  </select>
                  <div className="view-toggle">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                      aria-label="Grid view"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="7" height="7"/>
                        <rect x="14" y="3" width="7" height="7"/>
                        <rect x="3" y="14" width="7" height="7"/>
                        <rect x="14" y="14" width="7" height="7"/>
                      </svg>
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                      aria-label="List view"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="8" y1="6" x2="21" y2="6"/>
                        <line x1="8" y1="12" x2="21" y2="12"/>
                        <line x1="8" y1="18" x2="21" y2="18"/>
                        <line x1="3" y1="6" x2="3.01" y2="6"/>
                        <line x1="3" y1="12" x2="3.01" y2="12"/>
                        <line x1="3" y1="18" x2="3.01" y2="18"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Articles Grid/List */}
              <div className={`articles-container ${viewMode === 'list' ? 'articles-container--list' : ''}`}>
                {filteredArticles.map((article) => (
                  <Link
                    to={`/library/${article.id}`}
                    key={article.id}
                    className={`library-article-card ${viewMode === 'list' ? 'library-article-card--list' : ''}`}
                  >
                    <div className="library-article-card__image">
                      <img src={article.image} alt={article.title} />
                      <span className="library-article-card__category">{article.category}</span>
                      <button className="library-article-card__save" onClick={(e) => e.preventDefault()}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="library-article-card__content">
                      <h3 className="library-article-card__title">{article.title}</h3>
                      <p className="library-article-card__excerpt">{article.excerpt}</p>
                      <div className="library-article-card__meta">
                        <span className="library-article-card__date">{article.date}</span>
                        <span className="library-article-card__dot">•</span>
                        <span className="library-article-card__time">{article.readTime} đọc</span>
                      </div>
                      <div className="library-article-card__stats">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                          {article.views.toLocaleString()}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                          </svg>
                          {article.likes}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="library-pagination">
                <button className="pagination-btn" disabled>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button className="pagination-btn active">1</button>
                <button className="pagination-btn">2</button>
                <button className="pagination-btn">3</button>
                <span className="pagination-dots">...</span>
                <button className="pagination-btn">10</button>
                <button className="pagination-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Library
