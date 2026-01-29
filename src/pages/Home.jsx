import { Link } from 'react-router-dom'
import './Home.css'

// Sample data - normally would come from API
const featuredArticles = [
  {
    id: 1,
    title: 'Cách đối mặt với áp lực học tập hiệu quả',
    excerpt: 'Khám phá những phương pháp được chứng minh khoa học giúp bạn quản lý stress và cân bằng việc học...',
    category: 'Áp lực học tập',
    image: '/assets/images/articles/article-1.jpg',
    readTime: '5 phút',
    date: '28/01/2026'
  },
  {
    id: 2,
    title: 'Nhận biết dấu hiệu trầm cảm ở học sinh',
    excerpt: 'Hướng dẫn chi tiết giúp phụ huynh và giáo viên nhận ra sớm các dấu hiệu trầm cảm ở trẻ...',
    category: 'Trầm cảm',
    image: '/assets/images/articles/article-2.jpg',
    readTime: '7 phút',
    date: '26/01/2026'
  },
  {
    id: 3,
    title: 'Kỹ năng giao tiếp cho học sinh nhút nhát',
    excerpt: 'Những bài tập và kỹ thuật đơn giản giúp cải thiện sự tự tin và khả năng giao tiếp...',
    category: 'Kỹ năng sống',
    image: '/assets/images/articles/article-3.jpg',
    readTime: '6 phút',
    date: '24/01/2026'
  }
]

const featuredExperts = [
  {
    id: 1,
    name: 'TS. Nguyễn Văn An',
    specialty: 'Tâm lý học đường',
    experience: '15 năm kinh nghiệm',
    rating: 4.9,
    reviews: 234,
    image: '/assets/images/experts/expert-1.jpg'
  },
  {
    id: 2,
    name: 'ThS. Trần Thị Bình',
    specialty: 'Tư vấn hướng nghiệp',
    experience: '10 năm kinh nghiệm',
    rating: 4.8,
    reviews: 189,
    image: '/assets/images/experts/expert-2.jpg'
  },
  {
    id: 3,
    name: 'PGS.TS. Lê Minh Châu',
    specialty: 'Trầm cảm & Lo âu',
    experience: '20 năm kinh nghiệm',
    rating: 4.9,
    reviews: 312,
    image: '/assets/images/experts/expert-3.jpg'
  },
  {
    id: 4,
    name: 'ThS. Phạm Hoàng Dương',
    specialty: 'Bắt nạt học đường',
    experience: '8 năm kinh nghiệm',
    rating: 4.7,
    reviews: 156,
    image: '/assets/images/experts/expert-4.jpg'
  }
]

const tests = [
  {
    id: 'stress',
    title: 'Đánh giá mức độ stress',
    description: 'Đo lường mức độ căng thẳng và áp lực trong cuộc sống',
    icon: '😰',
    questions: 21,
    time: '5-7 phút',
    color: '#F59E0B'
  },
  {
    id: 'depression',
    title: 'Sàng lọc trầm cảm',
    description: 'Nhận biết sớm các dấu hiệu trầm cảm',
    icon: '😔',
    questions: 9,
    time: '3-5 phút',
    color: '#6366F1'
  },
  {
    id: 'anxiety',
    title: 'Đánh giá lo âu',
    description: 'Kiểm tra mức độ lo âu và căng thẳng tâm lý',
    icon: '😟',
    questions: 7,
    time: '3-5 phút',
    color: '#10B981'
  },
  {
    id: 'career',
    title: 'Khám phá hướng nghiệp',
    description: 'Tìm hiểu thiên hướng và nghề nghiệp phù hợp',
    icon: '🎯',
    questions: 30,
    time: '10-15 phút',
    color: '#EC4899'
  }
]

const stats = [
  { value: '50,000+', label: 'Học sinh được hỗ trợ', icon: '👨‍🎓' },
  { value: '200+', label: 'Chuyên gia tâm lý', icon: '👨‍⚕️' },
  { value: '1,000+', label: 'Bài viết chất lượng', icon: '📚' },
  { value: '98%', label: 'Hài lòng', icon: '⭐' }
]

const testimonials = [
  {
    id: 1,
    content: 'Nhờ website này, mình đã tìm được chuyên gia phù hợp và vượt qua được giai đoạn khó khăn trong học tập. Cảm ơn rất nhiều!',
    author: 'Minh Anh',
    role: 'Học sinh lớp 11',
    avatar: '/assets/images/testimonials/user-1.jpg'
  },
  {
    id: 2,
    content: 'Các bài test rất hữu ích giúp tôi hiểu con mình hơn. Đội ngũ tư vấn rất chuyên nghiệp và tận tâm.',
    author: 'Chị Hương',
    role: 'Phụ huynh',
    avatar: '/assets/images/testimonials/user-2.jpg'
  },
  {
    id: 3,
    content: 'Thư viện kiến thức phong phú, dễ hiểu. Mình đã học được nhiều kỹ năng quản lý stress hiệu quả.',
    author: 'Quốc Bảo',
    role: 'Sinh viên năm nhất',
    avatar: '/assets/images/testimonials/user-3.jpg'
  }
]

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <div className="hero__gradient"></div>
          <div className="hero__shapes">
            <div className="hero__shape hero__shape--1"></div>
            <div className="hero__shape hero__shape--2"></div>
            <div className="hero__shape hero__shape--3"></div>
          </div>
        </div>
        
        <div className="container hero__container">
          <div className="hero__content">
            <div className="hero__badge animate-fadeInDown">
              <span className="hero__badge-icon">✨</span>
              <span>Nền tảng #1 về tâm lý học đường tại Việt Nam</span>
            </div>
            
            <h1 className="hero__title animate-fadeInUp">
              Đồng hành cùng bạn<br />
              <span className="hero__title-gradient">Sức khỏe tinh thần</span>
            </h1>
            
            <p className="hero__description animate-fadeInUp delay-200">
              Khám phá kiến thức tâm lý, làm bài kiểm tra đánh giá, và kết nối với 
              các chuyên gia hàng đầu. Chúng tôi luôn ở đây để lắng nghe và hỗ trợ bạn.
            </p>
            
            <div className="hero__actions animate-fadeInUp delay-300">
              <Link to="/experts" className="btn btn-primary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
                Tìm chuyên gia
              </Link>
              <Link to="/tests" className="btn btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
                Làm bài kiểm tra
              </Link>
            </div>
            
            <div className="hero__trust animate-fadeInUp delay-400">
              <div className="hero__trust-avatars">
                <img src="/assets/images/avatars/avatar-1.jpg" alt="" />
                <img src="/assets/images/avatars/avatar-2.jpg" alt="" />
                <img src="/assets/images/avatars/avatar-3.jpg" alt="" />
                <img src="/assets/images/avatars/avatar-4.jpg" alt="" />
                <span className="hero__trust-more">+5k</span>
              </div>
              <p className="hero__trust-text">
                <strong>5,000+</strong> học sinh đã tin tưởng sử dụng
              </p>
            </div>
          </div>
          
          <div className="hero__visual animate-fadeInRight delay-200">
            <div className="hero__image-wrapper">
              {/* Placeholder for hero image */}
              <div className="hero__image-placeholder">
                <img src="/assets/images/hero-illustration.png" alt="Học sinh vui vẻ" />
              </div>
              
              {/* Floating Cards */}
              <div className="hero__float-card hero__float-card--1 animate-float">
                <div className="hero__float-icon">💬</div>
                <div className="hero__float-content">
                  <span className="hero__float-label">Tư vấn trực tuyến</span>
                  <span className="hero__float-value">24/7</span>
                </div>
              </div>
              
              <div className="hero__float-card hero__float-card--2 animate-float delay-200">
                <div className="hero__float-icon">🎯</div>
                <div className="hero__float-content">
                  <span className="hero__float-label">Bài test</span>
                  <span className="hero__float-value">Miễn phí</span>
                </div>
              </div>
              
              <div className="hero__float-card hero__float-card--3 animate-float delay-400">
                <div className="hero__float-icon">⭐</div>
                <div className="hero__float-content">
                  <span className="hero__float-label">Đánh giá</span>
                  <span className="hero__float-value">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-mouse">
            <div className="hero__scroll-wheel"></div>
          </div>
          <span>Cuộn xuống</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats__item reveal">
                <span className="stats__icon">{stat.icon}</span>
                <span className="stats__value">{stat.value}</span>
                <span className="stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Tính năng nổi bật</span>
            <h2 className="section-title">Chúng tôi có thể giúp gì cho bạn?</h2>
            <p className="section-description">
              Nền tảng toàn diện hỗ trợ sức khỏe tinh thần cho học sinh, phụ huynh và nhà trường
            </p>
          </div>
          
          <div className="features__grid">
            <div className="feature-card reveal">
              <div className="feature-card__icon" style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Thư viện kiến thức</h3>
              <p className="feature-card__description">
                Hàng ngàn bài viết chất lượng về tâm lý học đường, được biên soạn bởi các chuyên gia
              </p>
              <Link to="/library" className="feature-card__link">
                Khám phá ngay
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            <div className="feature-card reveal delay-100">
              <div className="feature-card__icon" style={{ background: 'linear-gradient(135deg, #10B981, #06B6D4)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Bài kiểm tra tâm lý</h3>
              <p className="feature-card__description">
                Tự đánh giá sức khỏe tinh thần với các bài test được chuẩn hóa quốc tế
              </p>
              <Link to="/tests" className="feature-card__link">
                Làm test ngay
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            <div className="feature-card reveal delay-200">
              <div className="feature-card__icon" style={{ background: 'linear-gradient(135deg, #F59E0B, #EF4444)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Tư vấn chuyên gia</h3>
              <p className="feature-card__description">
                Kết nối trực tiếp với các chuyên gia tâm lý hàng đầu qua nhiều hình thức
              </p>
              <Link to="/experts" className="feature-card__link">
                Tìm chuyên gia
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
            
            <div className="feature-card reveal delay-300">
              <div className="feature-card__icon" style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </div>
              <h3 className="feature-card__title">Chat ẩn danh</h3>
              <p className="feature-card__description">
                Chia sẻ tâm sự, đặt câu hỏi hoàn toàn ẩn danh và được hỗ trợ kịp thời
              </p>
              <Link to="/chat" className="feature-card__link">
                Bắt đầu chat
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section className="tests-section section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Bài kiểm tra tâm lý</span>
              <h2 className="section-title">Tự đánh giá sức khỏe tinh thần</h2>
              <p className="section-description">
                Các bài test được xây dựng dựa trên thang đo khoa học, giúp bạn hiểu rõ hơn về bản thân
              </p>
            </div>
            <Link to="/tests" className="btn btn-secondary hide-mobile">
              Xem tất cả bài test
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="tests-grid">
            {tests.map((test, index) => (
              <Link 
                to={`/tests/${test.id}`} 
                key={test.id} 
                className="test-card reveal"
                style={{ '--accent-color': test.color, animationDelay: `${index * 100}ms` }}
              >
                <div className="test-card__icon">{test.icon}</div>
                <h3 className="test-card__title">{test.title}</h3>
                <p className="test-card__description">{test.description}</p>
                <div className="test-card__meta">
                  <span>{test.questions} câu hỏi</span>
                  <span>•</span>
                  <span>{test.time}</span>
                </div>
                <div className="test-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center hide-desktop hide-tablet" style={{ marginTop: 'var(--space-8)' }}>
            <Link to="/tests" className="btn btn-secondary">
              Xem tất cả bài test
            </Link>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="experts-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Đội ngũ chuyên gia</span>
            <h2 className="section-title">Chuyên gia tâm lý hàng đầu</h2>
            <p className="section-description">
              Đội ngũ chuyên gia giàu kinh nghiệm, tận tâm và được đào tạo chuyên sâu
            </p>
          </div>
          
          <div className="experts-grid">
            {featuredExperts.map((expert, index) => (
              <Link 
                to={`/experts/${expert.id}`} 
                key={expert.id} 
                className="expert-card reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="expert-card__image">
                  <img src={expert.image} alt={expert.name} />
                  <div className="expert-card__rating">
                    <svg viewBox="0 0 24 24" fill="#FCD34D">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{expert.rating}</span>
                  </div>
                </div>
                <div className="expert-card__content">
                  <h3 className="expert-card__name">{expert.name}</h3>
                  <p className="expert-card__specialty">{expert.specialty}</p>
                  <p className="expert-card__experience">{expert.experience}</p>
                  <div className="expert-card__stats">
                    <span>{expert.reviews} đánh giá</span>
                  </div>
                </div>
                <button className="expert-card__btn">Đặt lịch tư vấn</button>
              </Link>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/experts" className="btn btn-primary btn-lg">
              Xem tất cả chuyên gia
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="articles-section section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Kiến thức tâm lý</span>
              <h2 className="section-title">Bài viết nổi bật</h2>
            </div>
            <Link to="/library" className="btn btn-ghost hide-mobile">
              Xem tất cả
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="articles-grid">
            {featuredArticles.map((article, index) => (
              <Link 
                to={`/library/${article.id}`} 
                key={article.id} 
                className="article-card reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="article-card__image">
                  <img src={article.image} alt={article.title} />
                  <span className="article-card__category">{article.category}</span>
                </div>
                <div className="article-card__content">
                  <h3 className="article-card__title">{article.title}</h3>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <div className="article-card__meta">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} đọc</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Phản hồi</span>
            <h2 className="section-title">Người dùng nói gì về chúng tôi?</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card reveal"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="testimonial-card__quote">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="testimonial-card__content">{testimonial.content}</p>
                <div className="testimonial-card__author">
                  <img src={testimonial.avatar} alt={testimonial.author} className="testimonial-card__avatar" />
                  <div>
                    <span className="testimonial-card__name">{testimonial.author}</span>
                    <span className="testimonial-card__role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta__card">
            <div className="cta__content">
              <h2 className="cta__title">Bạn cần hỗ trợ?</h2>
              <p className="cta__description">
                Đừng ngại ngần, hãy liên hệ với chúng tôi ngay hôm nay. 
                Đội ngũ chuyên gia luôn sẵn sàng lắng nghe và đồng hành cùng bạn.
              </p>
              <div className="cta__actions">
                <Link to="/experts" className="btn btn-primary btn-lg">
                  Tìm chuyên gia ngay
                </Link>
                <a href="tel:1800599920" className="btn btn-secondary btn-lg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  Gọi hotline
                </a>
              </div>
            </div>
            <div className="cta__visual">
              <img src="/assets/images/cta-illustration.png" alt="Hỗ trợ tâm lý" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
