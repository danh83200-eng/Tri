import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import Library from './pages/library/Library'
import Article from './pages/library/Article'
import TestList from './pages/tests/TestList'
import TakeTest from './pages/tests/TakeTest'
import TestResult from './pages/tests/TestResult'
import ExpertList from './pages/experts/ExpertList'
import ExpertProfile from './pages/experts/ExpertProfile'
import Booking from './pages/booking/Booking'
import BookingSuccess from './pages/booking/BookingSuccess'
import CourseList from './pages/courses/CourseList'
import CourseDetail from './pages/courses/CourseDetail'
import Community from './pages/community/Community'
import Profile from './pages/profile/Profile'
import Settings from './pages/settings/Settings'
import StudentDashboard from './pages/dashboard/StudentDashboard'
import ParentDashboard from './pages/dashboard/ParentDashboard'
import ExpertDashboard from './pages/dashboard/ExpertDashboard'
import AdminDashboard from './pages/dashboard/AdminDashboard'
import AIChatbot from './components/AIChatbot'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate checking for logged in user
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Đang tải...</p>
      </div>
    )
  }

  return (
    <Router>
      <div className="app">
        <Header user={user} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Knowledge Library */}
            <Route path="/library" element={<Library />} />
            <Route path="/library/:articleId" element={<Article />} />
            
            {/* Psychology Tests */}
            <Route path="/tests" element={<TestList />} />
            <Route path="/tests/:testId" element={<TakeTest />} />
            <Route path="/tests/:testId/result" element={<TestResult />} />
            
            {/* Experts & Booking */}
            <Route path="/experts" element={<ExpertList />} />
            <Route path="/experts/:expertId" element={<ExpertProfile />} />
            <Route path="/booking/:expertId" element={<Booking />} />
            <Route path="/booking/success" element={<BookingSuccess />} />
            
            {/* Courses */}
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            
            {/* Community */}
            <Route path="/community" element={<Community />} />
            
            {/* User Profile & Settings */}
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/settings" element={<Settings user={user} onLogout={handleLogout} />} />
            
            {/* Dashboards */}
            <Route path="/dashboard/student" element={<StudentDashboard user={user} />} />
            <Route path="/dashboard/parent" element={<ParentDashboard user={user} />} />
            <Route path="/dashboard/expert" element={<ExpertDashboard user={user} />} />
            <Route path="/dashboard/admin" element={<AdminDashboard user={user} />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  )
}

export default App


