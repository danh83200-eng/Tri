import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './CourseDetail.css'

const CourseDetail = () => {
  const { courseId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Sample course data
  const course = {
    id: courseId,
    title: 'Quản lý Stress hiệu quả cho học sinh',
    description: 'Khóa học toàn diện giúp học sinh nhận diện, hiểu và quản lý stress trong học tập và cuộc sống hàng ngày. Bạn sẽ học được các kỹ thuật thực hành để giảm căng thẳng, cải thiện sức khỏe tinh thần và nâng cao hiệu quả học tập.',
    instructor: {
      name: 'TS. Nguyễn Văn An',
      title: 'Tiến sĩ Tâm lý học',
      image: '/assets/images/experts/expert-1.jpg',
      bio: 'Hơn 15 năm kinh nghiệm trong lĩnh vực tâm lý học đường'
    },
    image: '/assets/images/courses/course-1.jpg',
    video: '/assets/videos/course-intro.mp4',
    level: 'Cơ bản',
    duration: '4 tuần',
    lessons: 12,
    students: 1234,
    rating: 4.8,
    reviews: 156,
    price: 0,
    language: 'Tiếng Việt',
    certificate: true,
    lastUpdated: '01/2026',
    whatYouLearn: [
      'Nhận diện các dấu hiệu stress ở bản thân',
      'Hiểu rõ nguyên nhân gây stress trong học tập',
      'Áp dụng 10+ kỹ thuật giảm stress hiệu quả',
      'Xây dựng thói quen lành mạnh cho sức khỏe tinh thần',
      'Cải thiện khả năng tập trung và ghi nhớ',
      'Phát triển tư duy tích cực'
    ],
    requirements: [
      'Không yêu cầu kiến thức nền',
      'Thiết bị có thể xem video',
      'Sẵn sàng thực hành các bài tập'
    ],
    curriculum: [
      {
        title: 'Giới thiệu về Stress',
        lessons: [
          { id: 1, title: 'Stress là gì?', duration: '10:00', free: true },
          { id: 2, title: 'Tại sao học sinh bị stress?', duration: '12:30', free: true },
          { id: 3, title: 'Ảnh hưởng của stress đến học tập', duration: '15:00', free: false }
        ]
      },
      {
        title: 'Nhận diện Stress',
        lessons: [
          { id: 4, title: 'Dấu hiệu cơ thể', duration: '11:00', free: false },
          { id: 5, title: 'Dấu hiệu cảm xúc', duration: '13:00', free: false },
          { id: 6, title: 'Bài test tự đánh giá', duration: '08:00', free: false }
        ]
      },
      {
        title: 'Kỹ thuật quản lý Stress',
        lessons: [
          { id: 7, title: 'Kỹ thuật hít thở', duration: '15:00', free: false },
          { id: 8, title: 'Thiền mindfulness đơn giản', duration: '20:00', free: false },
          { id: 9, title: 'Quản lý thời gian hiệu quả', duration: '18:00', free: false }
        ]
      }
    ]
  }

  return (
    <div className="course-detail-page">
      {/* Hero */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero__layout">
            <div className="course-hero__content">
              <div className="course-hero__breadcrumb">
                <Link to="/courses">Khóa học</Link>
                <span>/</span>
                <span>Stress & Lo âu</span>
              </div>
              <h1 className="course-hero__title">{course.title}</h1>
              <p className="course-hero__description">{course.description}</p>
              
              <div className="course-hero__meta">
                <div className="course-rating">
                  <svg viewBox="0 0 24 24" fill="#FCD34D">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>{course.rating}</span>
                  <span>({course.reviews} đánh giá)</span>
                </div>
                <span className="meta-divider">•</span>
                <span>{course.students.toLocaleString()} học viên</span>
              </div>

              <div className="course-hero__instructor">
                <img src={course.instructor.image} alt={course.instructor.name} />
                <div>
                  <span>Giảng viên</span>
                  <strong>{course.instructor.name}</strong>
                </div>
              </div>

              <div className="course-hero__badges">
                <span className="badge">📅 Cập nhật {course.lastUpdated}</span>
                <span className="badge">🌐 {course.language}</span>
                {course.certificate && <span className="badge">📜 Có chứng chỉ</span>}
              </div>
            </div>

            {/* Sticky Card */}
            <div className="course-card-sticky">
              <div className="course-card-sticky__video">
                <img src={course.image} alt={course.title} />
                <button className="play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="course-card-sticky__content">
                <div className="course-card-sticky__price">
                  {course.price === 0 ? (
                    <span className="price-free">Miễn phí</span>
                  ) : (
                    <span className="price-value">{course.price.toLocaleString()}đ</span>
                  )}
                </div>
                <button className="btn btn-primary btn-lg btn-full">
                  {course.price === 0 ? 'Đăng ký miễn phí' : 'Mua khóa học'}
                </button>
                <div className="course-card-sticky__features">
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                    </svg>
                    <span>{course.lessons} bài học</span>
                  </div>
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>Truy cập trọn đời</span>
                  </div>
                  <div className="feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                    </svg>
                    <span>Xem trên mọi thiết bị</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="course-content section">
        <div className="container">
          <div className="course-content__layout">
            <div className="course-content__main">
              {/* Tabs */}
              <div className="course-tabs">
                <button 
                  className={`course-tab ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Tổng quan
                </button>
                <button 
                  className={`course-tab ${activeTab === 'curriculum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Nội dung
                </button>
                <button 
                  className={`course-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Đánh giá
                </button>
              </div>

              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="course-overview">
                  <div className="overview-section">
                    <h2>Bạn sẽ học được gì?</h2>
                    <ul className="learn-list">
                      {course.whatYouLearn.map((item, i) => (
                        <li key={i}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="overview-section">
                    <h2>Yêu cầu</h2>
                    <ul className="requirements-list">
                      {course.requirements.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="overview-section">
                    <h2>Giảng viên</h2>
                    <div className="instructor-card">
                      <img src={course.instructor.image} alt={course.instructor.name} />
                      <div className="instructor-info">
                        <h3>{course.instructor.name}</h3>
                        <p>{course.instructor.title}</p>
                        <p className="instructor-bio">{course.instructor.bio}</p>
                        <Link to={`/experts/1`} className="btn btn-ghost">Xem hồ sơ</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Curriculum Tab */}
              {activeTab === 'curriculum' && (
                <div className="course-curriculum">
                  <div className="curriculum-header">
                    <span>{course.curriculum.length} phần</span>
                    <span>•</span>
                    <span>{course.lessons} bài học</span>
                  </div>
                  {course.curriculum.map((section, i) => (
                    <div key={i} className="curriculum-section">
                      <div className="curriculum-section__header">
                        <h3>Phần {i + 1}: {section.title}</h3>
                        <span>{section.lessons.length} bài</span>
                      </div>
                      <ul className="curriculum-lessons">
                        {section.lessons.map((lesson) => (
                          <li key={lesson.id} className="curriculum-lesson">
                            <div className="lesson-info">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/>
                              </svg>
                              <span>{lesson.title}</span>
                              {lesson.free && <span className="lesson-free">Xem miễn phí</span>}
                            </div>
                            <span className="lesson-duration">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="course-reviews">
                  <div className="reviews-summary">
                    <div className="reviews-score">
                      <span className="score-value">{course.rating}</span>
                      <div className="score-stars">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} viewBox="0 0 24 24" fill={i <= Math.floor(course.rating) ? "#FCD34D" : "#E5E7EB"}>
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="score-count">{course.reviews} đánh giá</span>
                    </div>
                  </div>
                  <p className="reviews-placeholder">Các đánh giá sẽ hiển thị ở đây...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail
