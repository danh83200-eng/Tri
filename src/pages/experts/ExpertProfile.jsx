import { useParams, Link } from 'react-router-dom'
import './ExpertProfile.css'

const ExpertProfile = () => {
  const { expertId } = useParams()

  // Sample expert data
  const expert = {
    id: expertId,
    name: 'TS. Nguyễn Văn An',
    specialty: 'Tâm lý học đường',
    title: 'Tiến sĩ Tâm lý học | Giám đốc Trung tâm Tư vấn Tâm lý ABC',
    image: '/assets/images/experts/expert-1.jpg',
    experience: 15,
    rating: 4.9,
    reviews: 234,
    sessions: 1250,
    price: 300000,
    about: `TS. Nguyễn Văn An là chuyên gia tâm lý học đường hàng đầu với hơn 15 năm kinh nghiệm. 
    Ông đã từng công tác tại nhiều trường đại học và trung tâm tư vấn tâm lý uy tín.
    
    Với phương pháp tiếp cận nhẹ nhàng và khoa học, TS. An đã giúp đỡ hàng nghìn học sinh vượt qua 
    các khó khăn về tâm lý, stress học tập, và lo âu thi cử.`,
    education: [
      { degree: 'Tiến sĩ Tâm lý học', school: 'Đại học Quốc gia Hà Nội', year: '2015' },
      { degree: 'Thạc sĩ Tâm lý học lâm sàng', school: 'Đại học Melbourne, Úc', year: '2010' },
      { degree: 'Cử nhân Tâm lý học', school: 'Đại học Sư phạm Hà Nội', year: '2005' }
    ],
    specialties: ['Stress học tập', 'Lo âu thi cử', 'Kỹ năng học tập', 'Phát triển bản thân', 'Giao tiếp'],
    languages: ['Tiếng Việt', 'Tiếng Anh'],
    certifications: [
      'Chứng chỉ Tư vấn tâm lý Quốc gia',
      'CBT (Cognitive Behavioral Therapy) - UK',
      'Mindfulness-Based Stress Reduction (MBSR)'
    ],
    reviewsList: [
      {
        id: 1,
        user: 'Nguyễn H.',
        rating: 5,
        date: '20/01/2026',
        text: 'Thầy An rất nhiệt tình và lắng nghe. Sau vài buổi tư vấn, em đã cảm thấy tự tin hơn rất nhiều trong việc học.'
      },
      {
        id: 2,
        user: 'Trần M.',
        rating: 5,
        date: '15/01/2026',
        text: 'Phương pháp của thầy rất khoa học và dễ áp dụng. Highly recommend!'
      }
    ]
  }

  return (
    <div className="expert-profile-page">
      {/* Header */}
      <section className="expert-profile-hero">
        <div className="container">
          <Link to="/experts" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Quay lại danh sách
          </Link>
          
          <div className="expert-profile-header">
            <div className="expert-profile-header__image">
              <img src={expert.image} alt={expert.name} />
              <span className="online-badge">🟢 Online</span>
            </div>
            <div className="expert-profile-header__info">
              <h1>{expert.name}</h1>
              <p className="expert-title">{expert.title}</p>
              <div className="expert-meta">
                <div className="expert-rating">
                  <svg viewBox="0 0 24 24" fill="#FCD34D">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>{expert.rating}</span>
                  <span className="reviews">({expert.reviews} đánh giá)</span>
                </div>
                <span className="divider">•</span>
                <span>{expert.sessions.toLocaleString()} phiên tư vấn</span>
                <span className="divider">•</span>
                <span>{expert.experience} năm kinh nghiệm</span>
              </div>
              <div className="expert-price-box">
                <div className="price">
                  <span className="price-value">{expert.price.toLocaleString()}đ</span>
                  <span className="price-unit">/phiên (60 phút)</span>
                </div>
                <Link to={`/booking/${expert.id}`} className="btn btn-primary btn-lg">
                  Đặt lịch tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="expert-profile-content section">
        <div className="container">
          <div className="expert-profile-layout">
            {/* Main Content */}
            <div className="expert-profile-main">
              {/* About */}
              <div className="profile-section">
                <h2>Giới thiệu</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{expert.about}</p>
              </div>

              {/* Specialties */}
              <div className="profile-section">
                <h2>Chuyên môn</h2>
                <div className="specialties-list">
                  {expert.specialties.map((spec, i) => (
                    <span key={i} className="specialty-tag">{spec}</span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="profile-section">
                <h2>Học vấn</h2>
                <div className="education-list">
                  {expert.education.map((edu, i) => (
                    <div key={i} className="education-item">
                      <div className="education-year">{edu.year}</div>
                      <div className="education-info">
                        <h4>{edu.degree}</h4>
                        <p>{edu.school}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="profile-section">
                <h2>Chứng chỉ</h2>
                <ul className="cert-list">
                  {expert.certifications.map((cert, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4"/>
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews */}
              <div className="profile-section">
                <h2>Đánh giá từ khách hàng</h2>
                <div className="reviews-list">
                  {expert.reviewsList.map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <div className="review-user">
                          <div className="review-avatar">{review.user[0]}</div>
                          <div>
                            <span className="review-name">{review.user}</span>
                            <span className="review-date">{review.date}</span>
                          </div>
                        </div>
                        <div className="review-rating">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} viewBox="0 0 24 24" fill="#FCD34D" width="16" height="16">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="review-text">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="expert-profile-sidebar">
              <div className="booking-card">
                <h3>Đặt lịch tư vấn</h3>
                <p>Chọn thời gian phù hợp với bạn</p>
                <Link to={`/booking/${expert.id}`} className="btn btn-primary btn-lg">
                  Xem lịch trống
                </Link>
              </div>

              <div className="sidebar-info">
                <h4>Ngôn ngữ</h4>
                <p>{expert.languages.join(', ')}</p>
              </div>

              <div className="sidebar-info">
                <h4>Hình thức tư vấn</h4>
                <p>Online (Video call), Trực tiếp</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertProfile
