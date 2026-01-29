import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './TakeTest.css'

// Sample questions for stress test
const stressQuestions = [
  { id: 1, text: 'Trong tháng qua, bạn có thường xuyên cảm thấy khó chịu vì điều gì đó bất ngờ xảy ra không?' },
  { id: 2, text: 'Trong tháng qua, bạn có thường xuyên cảm thấy không thể kiểm soát những điều quan trọng trong cuộc sống không?' },
  { id: 3, text: 'Trong tháng qua, bạn có thường xuyên cảm thấy căng thẳng và lo lắng không?' },
  { id: 4, text: 'Trong tháng qua, bạn có thường xuyên cảm thấy tự tin về khả năng xử lý các vấn đề cá nhân không?' },
  { id: 5, text: 'Trong tháng qua, bạn có thường xuyên cảm thấy mọi thứ đang diễn ra theo ý muốn không?' },
]

const answerOptions = [
  { value: 0, label: 'Không bao giờ' },
  { value: 1, label: 'Hiếm khi' },
  { value: 2, label: 'Thỉnh thoảng' },
  { value: 3, label: 'Thường xuyên' },
  { value: 4, label: 'Rất thường xuyên' },
]

const TakeTest = () => {
  const { testId } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = stressQuestions
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Calculate result and navigate
      navigate(`/tests/${testId}/result`, { state: { answers } })
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="take-test-page">
      <div className="container">
        <div className="take-test-card">
          {/* Progress */}
          <div className="test-progress">
            <div className="test-progress__bar">
              <div 
                className="test-progress__fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="test-progress__text">
              Câu {currentQuestion + 1} / {questions.length}
            </span>
          </div>

          {/* Question */}
          <div className="test-question">
            <h2 className="test-question__text">{currentQ.text}</h2>
          </div>

          {/* Answer Options */}
          <div className="test-answers">
            {answerOptions.map((option) => (
              <button
                key={option.value}
                className={`test-answer ${answers[currentQuestion] === option.value ? 'selected' : ''}`}
                onClick={() => handleAnswer(option.value)}
              >
                <span className="test-answer__radio"></span>
                <span className="test-answer__label">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="test-navigation">
            <button 
              className="btn btn-ghost"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Câu trước
            </button>
            <button 
              className="btn btn-primary btn-lg"
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'Hoàn thành' : 'Câu tiếp theo'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeTest
