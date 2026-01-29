import { Link, useParams } from 'react-router-dom'
import './TestResult.css'

const TestResult = () => {
  const { testId } = useParams()

  // Sample result data
  const result = {
    score: 18,
    maxScore: 40,
    level: 'moderate',
    levelLabel: 'Mức độ stress trung bình',
    description: 'Kết quả cho thấy bạn đang trải qua mức độ stress trung bình. Đây là mức độ phổ biến và có thể được cải thiện bằng các kỹ thuật quản lý stress phù hợp.',
    recommendations: [
      'Thực hành các bài tập thở sâu 5-10 phút mỗi ngày',
      'Dành thời gian cho hoạt động thể chất như đi bộ, yoga',
      'Đảm bảo ngủ đủ 7-8 tiếng mỗi đêm',
      'Chia sẻ cảm xúc với người thân hoặc bạn bè tin tưởng'
    ],
    suggestedArticles: [
      { id: 1, title: 'Cách đối mặt với áp lực học tập hiệu quả' },
      { id: 2, title: 'Kỹ thuật thư giãn giảm stress' },
      { id: 3, title: 'Quản lý thời gian hiệu quả cho học sinh' }
    ]
  }

  const getScoreColor = () => {
    if (result.level === 'low') return '#10B981'
    if (result.level === 'moderate') return '#F59E0B'
    return '#EF4444'
  }

  const scorePercentage = (result.score / result.maxScore) * 100

  return (
    <div className="result-page">
      <div className="container">
        <div className="result-card">
          {/* Header */}
          <div className="result-header">
            <div className="result-icon">📊</div>
            <h1>Kết quả bài kiểm tra</h1>
            <p>Thang đo mức độ stress (PSS-10)</p>
          </div>

          {/* Score Circle */}
          <div className="result-score">
            <div className="score-circle" style={{ '--score-color': getScoreColor() }}>
              <svg viewBox="0 0 100 100">
                <circle className="score-circle__bg" cx="50" cy="50" r="45" />
                <circle 
                  className="score-circle__progress" 
                  cx="50" 
                  cy="50" 
                  r="45"
                  style={{ 
                    strokeDasharray: `${scorePercentage * 2.83} 283`,
                    stroke: getScoreColor()
                  }}
                />
              </svg>
              <div className="score-circle__content">
                <span className="score-circle__value">{result.score}</span>
                <span className="score-circle__max">/ {result.maxScore}</span>
              </div>
            </div>
            <div className="result-level" style={{ color: getScoreColor() }}>
              {result.levelLabel}
            </div>
          </div>

          {/* Description */}
          <div className="result-description">
            <p>{result.description}</p>
          </div>

          {/* Recommendations */}
          <div className="result-section">
            <h3>💡 Gợi ý cải thiện</h3>
            <ul className="result-recommendations">
              {result.recommendations.map((rec, index) => (
                <li key={index}>
                  <span className="rec-number">{index + 1}</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Articles */}
          <div className="result-section">
            <h3>📚 Bài viết đề xuất</h3>
            <div className="result-articles">
              {result.suggestedArticles.map((article) => (
                <Link to={`/library/${article.id}`} key={article.id} className="result-article">
                  <span>{article.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="result-actions">
            <Link to="/tests" className="btn btn-ghost">
              Làm bài test khác
            </Link>
            <Link to="/experts" className="btn btn-primary btn-lg">
              Tư vấn với chuyên gia
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="result-disclaimer">
            <p>
              ⚠️ <strong>Lưu ý:</strong> Kết quả này chỉ mang tính chất tham khảo và không thay thế cho 
              chẩn đoán y khoa. Nếu bạn cảm thấy cần hỗ trợ, hãy liên hệ với chuyên gia tâm lý.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestResult
