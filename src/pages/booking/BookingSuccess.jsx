import { Link } from 'react-router-dom'
import './Booking.css'

const BookingSuccess = () => {
  return (
    <div className="booking-success-page">
      <div className="container">
        <div className="success-card">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <h1>Đặt lịch thành công!</h1>
          <p>Cảm ơn bạn đã đặt lịch tư vấn. Chi tiết lịch hẹn đã được gửi đến email của bạn.</p>
          
          <div className="success-details">
            <div className="detail-item">
              <span className="detail-label">Mã đặt lịch:</span>
              <span className="detail-value">#TL-2026012900001</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Chuyên gia:</span>
              <span className="detail-value">TS. Nguyễn Văn An</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Thời gian:</span>
              <span className="detail-value">29/01/2026 lúc 15:00</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Hình thức:</span>
              <span className="detail-value">Online (Video call)</span>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/dashboard/student" className="btn btn-primary btn-lg">
              Về Dashboard
            </Link>
            <Link to="/" className="btn btn-ghost">
              Về trang chủ
            </Link>
          </div>

          <div className="success-help">
            <p>Có thắc mắc? Liên hệ hotline: <strong>1900 xxxx</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSuccess
