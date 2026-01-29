import { Link } from 'react-router-dom'
import './Tests.css'

const tests = [
  {
    id: 'stress',
    title: 'Đánh giá mức độ stress (PSS-10)',
    description: 'Thang đo căng thẳng PSS-10 giúp đánh giá mức độ stress bạn đang trải qua trong tháng qua.',
    icon: '😰',
    questions: 10,
    time: '3-5 phút',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    popularity: 'hot',
    completions: 15234
  },
  {
    id: 'depression',
    title: 'Sàng lọc trầm cảm (PHQ-9)',
    description: 'Bộ câu hỏi PHQ-9 giúp sàng lọc và đánh giá mức độ trầm cảm một cách khoa học.',
    icon: '😔',
    questions: 9,
    time: '3-5 phút',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1, #A855F7)',
    popularity: 'popular',
    completions: 12456
  },
  {
    id: 'anxiety',
    title: 'Đánh giá lo âu (GAD-7)',
    description: 'Thang đo GAD-7 giúp đánh giá mức độ rối loạn lo âu tổng quát.',
    icon: '😟',
    questions: 7,
    time: '2-4 phút',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #06B6D4)',
    popularity: 'popular',
    completions: 9876
  },
  {
    id: 'selfesteem',
    title: 'Test tự tin bản thân (Rosenberg)',
    description: 'Thang đo lòng tự trọng Rosenberg giúp đánh giá mức độ tự tin và tự đánh giá bản thân.',
    icon: '💪',
    questions: 10,
    time: '3-5 phút',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
    completions: 7654
  },
  {
    id: 'career',
    title: 'Khám phá hướng nghiệp (Holland)',
    description: 'Test Holland RIASEC giúp khám phá thiên hướng nghề nghiệp phù hợp với tính cách của bạn.',
    icon: '🎯',
    questions: 42,
    time: '10-15 phút',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
    completions: 18765
  },
  {
    id: 'learning',
    title: 'Phong cách học tập (VARK)',
    description: 'Tìm hiểu phong cách học tập của bạn: Visual, Auditory, Reading/Writing hay Kinesthetic.',
    icon: '📚',
    questions: 16,
    time: '5-7 phút',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #10B981)',
    completions: 5432
  }
]

const TestList = () => {
  return (
    <div className="tests-page">
      {/* Hero */}
      <section className="tests-hero">
        <div className="container">
          <div className="tests-hero__content">
            <span className="tests-hero__badge">🧠 Bài kiểm tra tâm lý</span>
            <h1 className="tests-hero__title">Tự đánh giá sức khỏe tinh thần</h1>
            <p className="tests-hero__description">
              Các bài test được xây dựng dựa trên thang đo khoa học quốc tế, 
              giúp bạn hiểu rõ hơn về bản thân và nhận được gợi ý phù hợp.
            </p>
          </div>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="tests-list section">
        <div className="container">
          {/* Info Banner */}
          <div className="tests-info">
            <div className="tests-info__icon">ℹ️</div>
            <div className="tests-info__content">
              <p><strong>Lưu ý quan trọng:</strong> Kết quả các bài test chỉ mang tính chất tham khảo và không thay thế cho chẩn đoán y khoa. Nếu bạn gặp vấn đề nghiêm trọng, hãy tìm kiếm sự hỗ trợ từ chuyên gia.</p>
            </div>
          </div>

          <div className="tests-grid">
            {tests.map((test) => (
              <Link 
                to={`/tests/${test.id}`} 
                key={test.id} 
                className="test-card-large"
                style={{ '--test-gradient': test.gradient, '--test-color': test.color }}
              >
                <div className="test-card-large__header">
                  <div className="test-card-large__icon">{test.icon}</div>
                  {test.popularity && (
                    <span className={`test-card-large__badge test-card-large__badge--${test.popularity}`}>
                      {test.popularity === 'hot' ? '🔥 Hot' : '⭐ Phổ biến'}
                    </span>
                  )}
                </div>
                
                <h3 className="test-card-large__title">{test.title}</h3>
                <p className="test-card-large__description">{test.description}</p>
                
                <div className="test-card-large__meta">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                    {test.questions} câu hỏi
                  </span>
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    {test.time}
                  </span>
                </div>
                
                <div className="test-card-large__footer">
                  <span className="test-card-large__completions">
                    {test.completions.toLocaleString()} người đã làm
                  </span>
                  <span className="test-card-large__btn">
                    Bắt đầu
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tests-cta section">
        <div className="container">
          <div className="tests-cta__card">
            <div className="tests-cta__content">
              <h2>Cần hỗ trợ chuyên sâu hơn?</h2>
              <p>Nếu kết quả test cho thấy bạn cần hỗ trợ, hãy đặt lịch tư vấn với chuyên gia của chúng tôi.</p>
              <Link to="/experts" className="btn btn-primary btn-lg">
                Tìm chuyên gia tư vấn
              </Link>
            </div>
            <div className="tests-cta__visual">
              <img src="/assets/images/counseling-illustration.png" alt="Tư vấn tâm lý" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestList
