import { useState } from 'react'
import './AIChatbot.css'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Xin chào! Mình là trợ lý AI của Tâm Lý Học Đường. Mình có thể giúp gì cho bạn?',
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    'Tôi đang cảm thấy stress',
    'Làm sao để tập trung học?',
    'Tìm chuyên gia tư vấn',
    'Các bài test tâm lý'
  ]

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      type: 'user',
      content: inputValue,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: 'Cảm ơn bạn đã chia sẻ! Đây là tính năng AI đang được phát triển. Trong thời gian chờ đợi, bạn có thể tham khảo thư viện kiến thức hoặc đặt lịch với chuyên gia của chúng tôi.',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply) => {
    setInputValue(reply)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button 
        className={`chatbot-trigger ${isOpen ? 'chatbot-trigger--hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Mở chatbot"
      >
        <div className="chatbot-trigger__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </div>
        <span className="chatbot-trigger__badge">AI</span>
        <div className="chatbot-trigger__pulse"></div>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'chatbot-window--open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <div>
              <h4>Trợ lý AI</h4>
              <span className="chatbot-status">
                <span className="status-dot"></span>
                Online
              </span>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message chat-message--${msg.type}`}>
              {msg.type === 'bot' && (
                <div className="chat-message__avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                  </svg>
                </div>
              )}
              <div className="chat-message__content">
                <p>{msg.content}</p>
                <span className="chat-message__time">{msg.time}</span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-message chat-message--bot">
              <div className="chat-message__avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <div className="chat-message__content chat-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies */}
        {messages.length === 1 && (
          <div className="chatbot-quick-replies">
            {quickReplies.map((reply, i) => (
              <button key={i} onClick={() => handleQuickReply(reply)}>
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Nhập tin nhắn..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend} disabled={!inputValue.trim()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>

        {/* Disclaimer */}
        <div className="chatbot-disclaimer">
          <p>⚠️ AI đang ở giai đoạn beta. Không thay thế tư vấn chuyên gia.</p>
        </div>
      </div>
    </>
  )
}

export default AIChatbot
