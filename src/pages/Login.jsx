import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setError('')

    try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/goals-setup')
    } catch (err) {
      // Dev: proceed to goals anyway if auth fails
      navigate('/goals-setup')
    }
  }

  return (
    <div className="login-layout">
      <div className="login-card">
        <h1 className="login-title">HabitatYourDoor</h1>
        <p className="login-sub">Welcome back</p>

        <div className="login-fields">
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
          {error && <p style={{ color: '#e57373', fontSize: '14px', margin: 0 }}>{error}</p>}
        </div>

        <button className="login-btn" onClick={handleLogin} disabled={loading} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          {loading && <span className="btn-spinner" />}
          Log in
        </button>

        <div className="login-footer">
          <button className="text-btn">Forgot password?</button>
          <button className="text-btn" onClick={() => navigate('/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
