import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setError('Vui lòng nhập email')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email không hợp lệ')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="auth-page">
      <div className="auth-page__background">
        <div className="auth-page__gradient"></div>
        <div className="auth-page__shapes">
          <div className="auth-page__shape auth-page__shape--1"></div>
          <div className="auth-page__shape auth-page__shape--2"></div>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-card animate-scaleIn">
          {!isSubmitted ? (
            <>
              <div className="auth-card__header">
                <div className="auth-card__icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                </div>
                <h1 className="auth-card__title">Quên mật khẩu?</h1>
                <p className="auth-card__subtitle">
                  Đừng lo, chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu qua email của bạn.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                    </svg>
                    <input
                      type="email"
                      id="email"
                      className={`input input--with-icon ${error ? 'input-error' : ''}`}
                      placeholder="Nhập email đã đăng ký"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError('')
                      }}
                    />
                  </div>
                  {error && <span className="form-error">{error}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg auth-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner spinner--sm"></span>
                      Đang gửi...
                    </>
                  ) : (
                    'Gửi hướng dẫn'
                  )}
                </button>
              </form>

              <p className="auth-footer">
                <Link to="/login" className="auth-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Quay lại đăng nhập
                </Link>
              </p>
            </>
          ) : (
            <div className="auth-success">
              <div className="auth-success__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
              </div>
              <h1 className="auth-card__title">Kiểm tra email của bạn</h1>
              <p className="auth-card__subtitle">
                Chúng tôi đã gửi hướng dẫn đặt lại mật khẩu đến <strong>{email}</strong>. 
                Vui lòng kiểm tra hộp thư (bao gồm cả thư rác).
              </p>
              <div className="auth-success__actions">
                <Link to="/login" className="btn btn-primary btn-lg">
                  Quay lại đăng nhập
                </Link>
                <button 
                  className="btn btn-ghost"
                  onClick={() => setIsSubmitted(false)}
                >
                  Không nhận được? Gửi lại
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
