import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'

const coursesData = [
  {
    id: 1,
    title: 'Quản lý Stress hiệu quả cho học sinh',
    description: 'Khóa học toàn diện giúp học sinh nhận diện, hiểu và quản lý stress trong học tập và cuộc sống hàng ngày.',
    instructor: 'TS. Nguyễn Văn An',
    instructorImage: '/assets/images/experts/expert-1.jpg',
    image: '/assets/images/courses/course-1.jpg',
    level: 'Cơ bản',
    duration: '4 tuần',
    lessons: 12,
    students: 1234,
    rating: 4.8,
    reviews: 156,
    price: 0,
    category: 'Stress & Lo âu'
  },
  {
    id: 2,
    title: 'Kỹ năng giao tiếp và tự tin',
    description: 'Phát triển kỹ năng giao tiếp, thuyết trình và xây dựng sự tự tin vững chắc.',
    instructor: 'ThS. Trần Thị Bình',
    instructorImage: '/assets/images/experts/expert-2.jpg',
    image: '/assets/images/courses/course-2.jpg',
    level: 'Cơ bản',
    duration: '3 tuần',
    lessons: 9,
    students: 876,
    rating: 4.7,
    reviews: 98,
    price: 299000,
    originalPrice: 499000,
    category: 'Kỹ năng sống'
  },
  {
    id: 3,
    title: 'Vượt qua lo âu thi cử',
    description: 'Chiến lược tâm lý giúp học sinh đối mặt với áp lực thi cử và phát huy tối đa năng lực.',
    instructor: 'PGS.TS. Lê Minh Châu',
    instructorImage: '/assets/images/experts/expert-3.jpg',
    image: '/assets/images/courses/course-3.jpg',
    level: 'Trung bình',
    duration: '2 tuần',
    lessons: 8,
    students: 2345,
    rating: 4.9,
    reviews: 234,
    price: 0,
    category: 'Stress & Lo âu'
  },
  {
    id: 4,
    title: 'Định hướng nghề nghiệp toàn diện',
    description: 'Khám phá bản thân, tìm hiểu thị trường lao động và lập kế hoạch nghề nghiệp.',
    instructor: 'ThS. Phạm Hoàng Dương',
    instructorImage: '/assets/images/experts/expert-4.jpg',
    image: '/assets/images/courses/course-4.jpg',
    level: 'Nâng cao',
    duration: '6 tuần',
    lessons: 18,
    students: 567,
    rating: 4.6,
    reviews: 67,
    price: 599000,
    originalPrice: 899000,
    category: 'Hướng nghiệp'
  }
]

const categories = ['Tất cả', 'Stress & Lo âu', 'Kỹ năng sống', 'Hướng nghiệp', 'Phát triển bản thân']

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')
  const [priceFilter, setPriceFilter] = useState('all')

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'Tất cả' || course.category === selectedCategory
    const matchesPrice = priceFilter === 'all' || 
                         (priceFilter === 'free' && course.price === 0) ||
                         (priceFilter === 'paid' && course.price > 0)
    return matchesCategory && matchesPrice
  })

  return (
    <div className="courses-page">
      {/* Hero */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero__content">
            <span className="courses-hero__badge">🎓 Khóa học trực tuyến</span>
            <h1 className="courses-hero__title">Phát triển bản thân cùng chuyên gia</h1>
            <p className="courses-hero__description">
              Khám phá các khóa học tâm lý chất lượng cao, được thiết kế bởi đội ngũ chuyên gia hàng đầu
            </p>
          </div>
        </div>
      </section>

      {/* Courses Content */}
      <section className="courses-content section">
        <div className="container">
          {/* Filters */}
          <div className="courses-filters">
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="filter-actions">
              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                <option value="all">Tất cả mức giá</option>
                <option value="free">Miễn phí</option>
                <option value="paid">Có phí</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="courses-results">
            <span>{filteredCourses.length} khóa học</span>
          </div>

          {/* Course Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id} className="course-card">
                <div className="course-card__image">
                  <img src={course.image} alt={course.title} />
                  {course.price === 0 && (
                    <span className="course-card__badge course-card__badge--free">Miễn phí</span>
                  )}
                  {course.originalPrice && (
                    <span className="course-card__badge course-card__badge--sale">
                      -{Math.round((1 - course.price / course.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                <div className="course-card__content">
                  <span className="course-card__category">{course.category}</span>
                  <h3 className="course-card__title">{course.title}</h3>
                  <p className="course-card__description">{course.description}</p>
                  
                  <div className="course-card__instructor">
                    <img src={course.instructorImage} alt={course.instructor} />
                    <span>{course.instructor}</span>
                  </div>

                  <div className="course-card__meta">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6v6l4 2"/>
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                      {course.duration}
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                      </svg>
                      {course.lessons} bài học
                    </span>
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                      </svg>
                      {course.students.toLocaleString()}
                    </span>
                  </div>

                  <div className="course-card__footer">
                    <div className="course-card__rating">
                      <svg viewBox="0 0 24 24" fill="#FCD34D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{course.rating}</span>
                      <span className="reviews">({course.reviews})</span>
                    </div>
                    <div className="course-card__price">
                      {course.price === 0 ? (
                        <span className="price-free">Miễn phí</span>
                      ) : (
                        <>
                          {course.originalPrice && (
                            <span className="price-original">{course.originalPrice.toLocaleString()}đ</span>
                          )}
                          <span className="price-current">{course.price.toLocaleString()}đ</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseList
