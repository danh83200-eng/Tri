import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'

const Register = ({ onLogin }) => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1) // 1: Info, 2: Role selection
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreeTerms: false
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const roles = [
    {
      id: 'student',
      icon: '👨‍🎓',
      title: 'Học sinh',
      description: 'Tìm kiếm hỗ trợ tâm lý và phát triển bản thân'
    },
    {
      id: 'parent',
      icon: '👨‍👩‍👧',
      title: 'Phụ huynh',
      description: 'Theo dõi và hỗ trợ con em trong việc học'
    },
    {
      id: 'expert',
      icon: '👨‍⚕️',
      title: 'Chuyên gia',
      description: 'Cung cấp dịch vụ tư vấn tâm lý chuyên nghiệp'
    }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên'
    }
    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ'
    }
    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Mật khẩu phải có ít nhất 8 ký tự'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.role) {
      newErrors.role = 'Vui lòng chọn vai trò'
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Bạn phải đồng ý với điều khoản sử dụng'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep2()) return

    setIsLoading(true)
    setTimeout(() => {
      const userData = {
        id: 1,
        name: formData.name,
        email: formData.email,
        role: formData.role,
        avatar: null
      }
      onLogin(userData)
      setIsLoading(false)
      navigate(`/dashboard/${formData.role}`)
    }, 1500)
  }

  const getPasswordStrength = () => {
    const password = formData.password
    if (password.length === 0) return null
    if (password.length < 6) return 'weak'
    if (password.length < 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return 'medium'
    if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) return 'strong'
    return 'medium'
  }

  const passwordStrength = getPasswordStrength()

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
          <div className="auth-card__header">
            <Link to="/" className="auth-card__logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="url(#regLogoGradient)" />
                <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="20" r="4" fill="white"/>
                <path d="M26 14L30 10M30 10L26 10M30 10L30 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="regLogoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1"/>
                    <stop offset="1" stopColor="#A855F7"/>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <h1 className="auth-card__title">
              {step === 1 ? 'Tạo tài khoản mới' : 'Chọn vai trò của bạn'}
            </h1>
            <p className="auth-card__subtitle">
              {step === 1 ? 'Bắt đầu hành trình chăm sóc sức khỏe tinh thần' : 'Để chúng tôi cá nhân hóa trải nghiệm cho bạn'}
            </p>
          </div>

          {/* Step indicators */}
          <div className="auth-steps">
            <div className={`auth-step ${step >= 1 ? 'active' : ''}`}>
              <span className="auth-step__number">1</span>
              <span className="auth-step__label">Thông tin</span>
            </div>
            <div className="auth-step__line"></div>
            <div className={`auth-step ${step >= 2 ? 'active' : ''}`}>
              <span className="auth-step__number">2</span>
              <span className="auth-step__label">Vai trò</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {step === 1 && (
              <>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Họ và tên</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`input input--with-icon ${errors.name ? 'input-error' : ''}`}
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

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
                      name="email"
                      className={`input input--with-icon ${errors.email ? 'input-error' : ''}`}
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="password">Mật khẩu</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <circle cx="12" cy="16" r="1"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`input input--with-icon ${errors.password ? 'input-error' : ''}`}
                      placeholder="Tối thiểu 8 ký tự"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {passwordStrength && (
                    <div className={`password-strength password-strength--${passwordStrength}`}>
                      <div className="password-strength__bar"></div>
                      <div className="password-strength__bar"></div>
                      <div className="password-strength__bar"></div>
                    </div>
                  )}
                  {errors.password && <span className="form-error">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <circle cx="12" cy="16" r="1"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`input input--with-icon ${errors.confirmPassword ? 'input-error' : ''}`}
                      placeholder="Nhập lại mật khẩu"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.confirmPassword && <span className="form-error">{errors.confirmPassword}</span>}
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary btn-lg auth-submit"
                  onClick={handleNext}
                >
                  Tiếp tục
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="role-selection">
                  {roles.map((role) => (
                    <div
                      key={role.id}
                      className={`role-card ${formData.role === role.id ? 'active' : ''}`}
                      onClick={() => {
                        setFormData(prev => ({ ...prev, role: role.id }))
                        setErrors(prev => ({ ...prev, role: '' }))
                      }}
                    >
                      <div className="role-card__icon">{role.icon}</div>
                      <div className="role-card__content">
                        <h4 className="role-card__title">{role.title}</h4>
                        <p className="role-card__description">{role.description}</p>
                      </div>
                      <div className="role-card__check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M5 12l5 5L20 7"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.role && <span className="form-error">{errors.role}</span>}

                <div className="form-group">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label">
                      Tôi đồng ý với{' '}
                      <Link to="/terms" className="auth-link--primary">Điều khoản sử dụng</Link>
                      {' '}và{' '}
                      <Link to="/privacy" className="auth-link--primary">Chính sách bảo mật</Link>
                    </span>
                  </label>
                  {errors.agreeTerms && <span className="form-error">{errors.agreeTerms}</span>}
                </div>

                <div className="auth-form__actions">
                  <button 
                    type="button" 
                    className="btn btn-ghost btn-lg"
                    onClick={handleBack}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Quay lại
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner spinner--sm"></span>
                        Đang tạo...
                      </>
                    ) : (
                      'Hoàn tất đăng ký'
                    )}
                  </button>
                </div>
              </>
            )}
          </form>

          <p className="auth-footer">
            Đã có tài khoản?{' '}
            <Link to="/login" className="auth-link auth-link--primary">Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
