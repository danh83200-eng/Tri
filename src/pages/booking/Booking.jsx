import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './Booking.css'

const Booking = () => {
  const { expertId } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [counselingType, setCounselingType] = useState('online')
  const [notes, setNotes] = useState('')

  // Sample data
  const expert = {
    id: expertId,
    name: 'TS. Nguyễn Văn An',
    specialty: 'Tâm lý học đường',
    image: '/assets/images/experts/expert-1.jpg',
    price: 300000
  }

  const availableDates = [
    { date: '29/01', day: 'Hôm nay', slots: 3 },
    { date: '30/01', day: 'Thứ 5', slots: 5 },
    { date: '31/01', day: 'Thứ 6', slots: 2 },
    { date: '01/02', day: 'Thứ 7', slots: 4 },
    { date: '02/02', day: 'Chủ nhật', slots: 1 },
  ]

  const availableTimeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true },
  ]

  const handleConfirmBooking = () => {
    // In real app, would call API
    navigate('/booking/success')
  }

  return (
    <div className="booking-page">
      <div className="container">
        {/* Progress Steps */}
        <div className="booking-steps">
          <div className={`booking-step ${step >= 1 ? 'active' : ''}`}>
            <span className="booking-step__number">1</span>
            <span className="booking-step__label">Chọn thời gian</span>
          </div>
          <div className="booking-step__line"></div>
          <div className={`booking-step ${step >= 2 ? 'active' : ''}`}>
            <span className="booking-step__number">2</span>
            <span className="booking-step__label">Xác nhận</span>
          </div>
          <div className="booking-step__line"></div>
          <div className={`booking-step ${step >= 3 ? 'active' : ''}`}>
            <span className="booking-step__number">3</span>
            <span className="booking-step__label">Thanh toán</span>
          </div>
        </div>

        <div className="booking-layout">
          {/* Main Content */}
          <div className="booking-main">
            {step === 1 && (
              <div className="booking-card">
                <h2>Chọn ngày và giờ</h2>
                
                {/* Date Selection */}
                <div className="booking-section">
                  <h3>Chọn ngày</h3>
                  <div className="date-grid">
                    {availableDates.map((d) => (
                      <button
                        key={d.date}
                        className={`date-btn ${selectedDate === d.date ? 'selected' : ''}`}
                        onClick={() => setSelectedDate(d.date)}
                      >
                        <span className="date-btn__day">{d.day}</span>
                        <span className="date-btn__date">{d.date}</span>
                        <span className="date-btn__slots">{d.slots} slot trống</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                {selectedDate && (
                  <div className="booking-section">
                    <h3>Chọn giờ</h3>
                    <div className="time-grid">
                      {availableTimeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          className={`time-btn ${selectedTime === slot.time ? 'selected' : ''} ${!slot.available ? 'disabled' : ''}`}
                          onClick={() => slot.available && setSelectedTime(slot.time)}
                          disabled={!slot.available}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Counseling Type */}
                <div className="booking-section">
                  <h3>Hình thức tư vấn</h3>
                  <div className="counseling-types">
                    <label className={`counseling-type ${counselingType === 'online' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="type"
                        value="online"
                        checked={counselingType === 'online'}
                        onChange={(e) => setCounselingType(e.target.value)}
                      />
                      <div className="counseling-type__icon">🎥</div>
                      <div className="counseling-type__info">
                        <span>Online (Video call)</span>
                        <small>Qua Google Meet hoặc Zoom</small>
                      </div>
                    </label>
                    <label className={`counseling-type ${counselingType === 'inperson' ? 'selected' : ''}`}>
                      <input
                        type="radio"
                        name="type"
                        value="inperson"
                        checked={counselingType === 'inperson'}
                        onChange={(e) => setCounselingType(e.target.value)}
                      />
                      <div className="counseling-type__icon">🏢</div>
                      <div className="counseling-type__info">
                        <span>Trực tiếp</span>
                        <small>Tại phòng tư vấn</small>
                      </div>
                    </label>
                  </div>
                </div>

                <button 
                  className="btn btn-primary btn-lg booking-next"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                >
                  Tiếp tục
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="booking-card">
                <h2>Xác nhận thông tin</h2>
                
                <div className="booking-summary">
                  <div className="summary-item">
                    <span className="summary-label">Chuyên gia:</span>
                    <span className="summary-value">{expert.name}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Ngày:</span>
                    <span className="summary-value">{selectedDate}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Giờ:</span>
                    <span className="summary-value">{selectedTime}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Hình thức:</span>
                    <span className="summary-value">
                      {counselingType === 'online' ? 'Online (Video call)' : 'Trực tiếp'}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Thời lượng:</span>
                    <span className="summary-value">60 phút</span>
                  </div>
                </div>

                <div className="booking-section">
                  <h3>Ghi chú cho chuyên gia (không bắt buộc)</h3>
                  <textarea
                    className="booking-notes"
                    placeholder="Chia sẻ vấn đề bạn muốn được tư vấn..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="booking-actions">
                  <button className="btn btn-ghost" onClick={() => setStep(1)}>
                    Quay lại
                  </button>
                  <button className="btn btn-primary btn-lg" onClick={() => setStep(3)}>
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="booking-card">
                <h2>Thanh toán</h2>
                
                <div className="payment-methods">
                  <label className="payment-method selected">
                    <input type="radio" name="payment" defaultChecked />
                    <div className="payment-method__icon">💳</div>
                    <div className="payment-method__info">
                      <span>Thẻ tín dụng / Ghi nợ</span>
                      <small>Visa, Mastercard, JCB</small>
                    </div>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" />
                    <div className="payment-method__icon">🏦</div>
                    <div className="payment-method__info">
                      <span>Chuyển khoản ngân hàng</span>
                      <small>Vietcombank, Techcombank, ...</small>
                    </div>
                  </label>
                  <label className="payment-method">
                    <input type="radio" name="payment" />
                    <div className="payment-method__icon">📱</div>
                    <div className="payment-method__info">
                      <span>Ví điện tử</span>
                      <small>MoMo, ZaloPay, VNPay</small>
                    </div>
                  </label>
                </div>

                <div className="booking-actions">
                  <button className="btn btn-ghost" onClick={() => setStep(2)}>
                    Quay lại
                  </button>
                  <button className="btn btn-primary btn-lg" onClick={handleConfirmBooking}>
                    Xác nhận thanh toán - {expert.price.toLocaleString()}đ
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="booking-sidebar">
            <div className="booking-sidebar__card">
              <div className="expert-preview">
                <img src={expert.image} alt={expert.name} />
                <div>
                  <h4>{expert.name}</h4>
                  <p>{expert.specialty}</p>
                </div>
              </div>
              <div className="price-summary">
                <div className="price-row">
                  <span>Phí tư vấn</span>
                  <span>{expert.price.toLocaleString()}đ</span>
                </div>
                <div className="price-row total">
                  <span>Tổng cộng</span>
                  <span>{expert.price.toLocaleString()}đ</span>
                </div>
              </div>
            </div>

            <div className="booking-help">
              <h4>Cần hỗ trợ?</h4>
              <p>Liên hệ hotline: <strong>1900 xxxx</strong></p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Booking
