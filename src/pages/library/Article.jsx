import { useParams, Link } from 'react-router-dom'
import './Article.css'

const Article = () => {
  const { articleId } = useParams()

  // Sample article data - would come from API
  const article = {
    id: articleId,
    title: 'Cách đối mặt với áp lực học tập hiệu quả',
    category: 'Áp lực học tập',
    author: {
      name: 'TS. Nguyễn Văn An',
      avatar: '/assets/images/experts/expert-1.jpg',
      title: 'Chuyên gia Tâm lý học đường'
    },
    date: '28/01/2026',
    readTime: '5 phút',
    views: 1234,
    likes: 89,
    image: '/assets/images/articles/article-1.jpg',
    content: `
      <h2>Hiểu về áp lực học tập</h2>
      <p>Áp lực học tập là một trong những vấn đề phổ biến nhất mà học sinh phải đối mặt. Việc hiểu rõ nguồn gốc và cách quản lý áp lực này là bước đầu tiên để vượt qua nó.</p>
      
      <h2>Nguyên nhân gây áp lực</h2>
      <p>Có nhiều nguyên nhân dẫn đến áp lực học tập bao gồm:</p>
      <ul>
        <li>Kỳ vọng cao từ gia đình</li>
        <li>So sánh với bạn bè</li>
        <li>Khối lượng bài vở lớn</li>
        <li>Lo lắng về tương lai</li>
      </ul>
      
      <h2>Cách đối phó hiệu quả</h2>
      <p>Dưới đây là một số phương pháp được khoa học chứng minh hiệu quả trong việc giảm stress:</p>
      
      <h3>1. Phương pháp thở sâu</h3>
      <p>Hít thở sâu giúp kích hoạt hệ thần kinh phó giao cảm, làm giảm cortisol và mang lại cảm giác bình tĩnh.</p>
      
      <h3>2. Quản lý thời gian</h3>
      <p>Lập kế hoạch học tập rõ ràng, chia nhỏ công việc thành các phần có thể quản lý được.</p>
      
      <h3>3. Tập thể dục đều đặn</h3>
      <p>Exercise giúp giải phóng endorphin - hormone hạnh phúc tự nhiên của cơ thể.</p>
    `,
    relatedArticles: [
      { id: 2, title: 'Quản lý lo âu trước kỳ thi', image: '/assets/images/articles/article-2.jpg' },
      { id: 3, title: 'Kỹ năng giao tiếp cho học sinh', image: '/assets/images/articles/article-3.jpg' },
      { id: 4, title: 'Giấc ngủ và sức khỏe tinh thần', image: '/assets/images/articles/article-4.jpg' }
    ]
  }

  return (
    <div className="article-page">
      {/* Hero */}
      <section className="article-hero">
        <div className="container">
          <div className="article-hero__content">
            <Link to="/library" className="article-hero__back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Quay lại thư viện
            </Link>
            <span className="article-hero__category">{article.category}</span>
            <h1 className="article-hero__title">{article.title}</h1>
            <div className="article-hero__meta">
              <div className="article-hero__author">
                <img src={article.author.avatar} alt={article.author.name} />
                <div>
                  <span className="article-hero__author-name">{article.author.name}</span>
                  <span className="article-hero__author-title">{article.author.title}</span>
                </div>
              </div>
              <div className="article-hero__stats">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime} đọc</span>
                <span>•</span>
                <span>{article.views.toLocaleString()} lượt xem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="article-image">
        <div className="container">
          <div className="article-image__wrapper">
            <img src={article.image} alt={article.title} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="article-content section">
        <div className="container">
          <div className="article-layout">
            <aside className="article-sidebar">
              <div className="article-actions">
                <button className="action-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                  <span>{article.likes}</span>
                </button>
                <button className="action-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                  </svg>
                  <span>Lưu</span>
                </button>
                <button className="action-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                  <span>Chia sẻ</span>
                </button>
              </div>
            </aside>

            <article 
              className="article-main"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="related-articles section">
        <div className="container">
          <h2 className="section-title">Bài viết liên quan</h2>
          <div className="related-grid">
            {article.relatedArticles.map((related) => (
              <Link to={`/library/${related.id}`} key={related.id} className="related-card">
                <div className="related-card__image">
                  <img src={related.image} alt={related.title} />
                </div>
                <h3 className="related-card__title">{related.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="article-cta section">
        <div className="container">
          <div className="article-cta__card">
            <h3>Cần hỗ trợ thêm?</h3>
            <p>Đặt lịch tư vấn với chuyên gia để được hỗ trợ cá nhân hóa</p>
            <Link to="/experts" className="btn btn-primary">Tìm chuyên gia</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Article
