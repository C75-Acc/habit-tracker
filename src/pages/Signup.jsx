import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import './Login.css'

function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignup() {
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/goals-setup')
    } catch (err) {
      setLoading(false)
      
      // Handle specific Firebase error codes
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('This email is already registered. Please log in.')
          break
        case 'auth/invalid-email':
          setError('Please enter a valid email address.')
          break
        case 'auth/weak-password':
          setError('Password must be at least 6 characters long.')
          break
        case 'auth/network-request-failed':
          setError('Network error. Please check your internet connection.')
          break
        case 'auth/operation-not-allowed':
          setError('Email/password accounts are not enabled. Contact support.')
          break
        default:
          setError('Failed to create account. Please try again later.')
          break
      }
    }
  }

  return (
    <div className="login-layout">
      <div className="login-card signup-card">
        <h1 className="login-title">Create account</h1>
        <p className="login-sub">Start building your habits</p>

        <div className="login-fields">
          <div className="name-row">
            <input className="login-input" type="text" placeholder="First name" />
            <input className="login-input" type="text" placeholder="Last name" />
          </div>
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {error && <p style={{ color: '#e57373', fontSize: '14px', margin: 0 }}>{error}</p>}
        </div>

        <button 
          className="login-btn" 
          onClick={handleSignup} 
          disabled={loading}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
          {loading && <span className="btn-spinner" />}
          Sign up
        </button>

        <div className="login-footer">
          <span style={{ fontSize: '17px', color: '#888' }}>Already have an account?</span>
          <button className="text-btn" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Signup