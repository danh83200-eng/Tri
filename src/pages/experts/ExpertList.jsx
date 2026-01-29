import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Experts.css'

const expertsData = [
  {
    id: 1,
    name: 'TS. Nguyễn Văn An',
    specialty: 'Tâm lý học đường',
    specialties: ['Stress học tập', 'Lo âu thi cử', 'Kỹ năng học tập'],
    experience: 15,
    rating: 4.9,
    reviews: 234,
    sessions: 1250,
    image: '/assets/images/experts/expert-1.jpg',
    price: 300000,
    available: true,
    nextSlot: 'Hôm nay, 15:00'
  },
  {
    id: 2,
    name: 'ThS. Trần Thị Bình',
    specialty: 'Tư vấn hướng nghiệp',
    specialties: ['Định hướng nghề nghiệp', 'Phát triển bản thân', 'Kỹ năng mềm'],
    experience: 10,
    rating: 4.8,
    reviews: 189,
    sessions: 890,
    image: '/assets/images/experts/expert-2.jpg',
    price: 250000,
    available: true,
    nextSlot: 'Ngày mai, 09:00'
  },
  {
    id: 3,
    name: 'PGS.TS. Lê Minh Châu',
    specialty: 'Trầm cảm & Lo âu',
    specialties: ['Trầm cảm', 'Rối loạn lo âu', 'Sang chấn tâm lý'],
    experience: 20,
    rating: 4.9,
    reviews: 312,
    sessions: 2100,
    image: '/assets/images/experts/expert-3.jpg',
    price: 400000,
    available: false,
    nextSlot: 'Thứ 2, 14:00'
  },
  {
    id: 4,
    name: 'ThS. Phạm Hoàng Dương',
    specialty: 'Bắt nạt học đường',
    specialties: ['Bắt nạt', 'Bạo lực học đường', 'Kỹ năng xã hội'],
    experience: 8,
    rating: 4.7,
    reviews: 156,
    sessions: 620,
    image: '/assets/images/experts/expert-4.jpg',
    price: 200000,
    available: true,
    nextSlot: 'Hôm nay, 16:30'
  },
  {
    id: 5,
    name: 'TS. Hoàng Thị Mai',
    specialty: 'Tâm lý trẻ em',
    specialties: ['Phát triển trẻ em', 'ADHD', 'Tự kỷ'],
    experience: 12,
    rating: 4.8,
    reviews: 198,
    sessions: 980,
    image: '/assets/images/experts/expert-5.jpg',
    price: 350000,
    available: true,
    nextSlot: 'Ngày mai, 10:00'
  },
  {
    id: 6,
    name: 'ThS. Võ Quang Hùng',
    specialty: 'Tâm lý gia đình',
    specialties: ['Quan hệ cha mẹ - con', 'Xung đột gia đình', 'Giáo dục con cái'],
    experience: 9,
    rating: 4.6,
    reviews: 145,
    sessions: 540,
    image: '/assets/images/experts/expert-6.jpg',
    price: 280000,
    available: true,
    nextSlot: 'Thứ 3, 08:00'
  }
]

const specialties = [
  'Tất cả',
  'Tâm lý học đường',
  'Trầm cảm & Lo âu',
  'Hướng nghiệp',
  'Bắt nạt học đường',
  'Tâm lý gia đình'
]

const ExpertList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('Tất cả')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('rating')

  const filteredExperts = expertsData.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          expert.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === 'Tất cả' || 
                             expert.specialty.includes(selectedSpecialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="experts-page">
      {/* Hero */}
      <section className="experts-hero">
        <div className="container">
          <div className="experts-hero__content">
            <span className="experts-hero__badge">👨‍⚕️ Đội ngũ chuyên gia</span>
            <h1 className="experts-hero__title">Tìm chuyên gia tâm lý</h1>
            <p className="experts-hero__description">
              Kết nối với các chuyên gia tâm lý hàng đầu, giàu kinh nghiệm và tận tâm
            </p>
            
            {/* Search */}
            <div className="experts-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Tìm theo tên hoặc chuyên môn..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & List */}
      <section className="experts-content section">
        <div className="container">
          {/* Filters */}
          <div className="experts-filters">
            <div className="filter-group">
              <label>Chuyên môn</label>
              <div className="filter-tags">
                {specialties.map((spec) => (
                  <button
                    key={spec}
                    className={`filter-tag ${selectedSpecialty === spec ? 'active' : ''}`}
                    onClick={() => setSelectedSpecialty(spec)}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="filter-row">
              <div className="filter-group">
                <label>Mức giá</label>
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                  <option value="all">Tất cả</option>
                  <option value="low">Dưới 250.000đ</option>
                  <option value="medium">250.000 - 350.000đ</option>
                  <option value="high">Trên 350.000đ</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label>Sắp xếp</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="rating">Đánh giá cao nhất</option>
                  <option value="experience">Kinh nghiệm nhiều nhất</option>
                  <option value="price-low">Giá thấp nhất</option>
                  <option value="price-high">Giá cao nhất</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="experts-results-info">
            <span>{filteredExperts.length} chuyên gia</span>
          </div>

          {/* Experts Grid */}
          <div className="experts-grid">
            {filteredExperts.map((expert) => (
              <div key={expert.id} className="expert-card-full">
                <div className="expert-card-full__header">
                  <div className="expert-card-full__image">
                    <img src={expert.image} alt={expert.name} />
                    {expert.available && (
                      <span className="expert-card-full__available">Online</span>
                    )}
                  </div>
                  <div className="expert-card-full__info">
                    <h3 className="expert-card-full__name">{expert.name}</h3>
                    <p className="expert-card-full__specialty">{expert.specialty}</p>
                    <div className="expert-card-full__rating">
                      <svg viewBox="0 0 24 24" fill="#FCD34D">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{expert.rating}</span>
                      <span className="expert-card-full__reviews">({expert.reviews} đánh giá)</span>
                    </div>
                  </div>
                </div>

                <div className="expert-card-full__tags">
                  {expert.specialties.map((tag, i) => (
                    <span key={i} className="expert-tag">{tag}</span>
                  ))}
                </div>

                <div className="expert-card-full__stats">
                  <div className="expert-stat">
                    <span className="expert-stat__value">{expert.experience}</span>
                    <span className="expert-stat__label">năm kinh nghiệm</span>
                  </div>
                  <div className="expert-stat">
                    <span className="expert-stat__value">{expert.sessions.toLocaleString()}</span>
                    <span className="expert-stat__label">phiên tư vấn</span>
                  </div>
                </div>

                <div className="expert-card-full__footer">
                  <div className="expert-card-full__price">
                    <span className="price-value">{expert.price.toLocaleString()}đ</span>
                    <span className="price-unit">/phiên</span>
                  </div>
                  <div className="expert-card-full__slot">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {expert.nextSlot}
                  </div>
                </div>

                <div className="expert-card-full__actions">
                  <Link to={`/experts/${expert.id}`} className="btn btn-ghost">
                    Xem hồ sơ
                  </Link>
                  <Link to={`/booking/${expert.id}`} className="btn btn-primary">
                    Đặt lịch ngay
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExpertList
