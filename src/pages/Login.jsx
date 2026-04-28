import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { verifyAdminCredentials, setAdminUser } from '../adminAuth'
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
      
      // Check for admin credentials first
      if (verifyAdminCredentials(email, password)) {
        const adminUser = {
          uid: 'admin-user',
          email: email,
          isAdmin: true
        }
        setAdminUser(adminUser)
        navigate('/goals-setup')
        return
      }

      // Try Firebase login
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/goals-setup')
    } catch (err) {
      setError('Invalid email or password. Please try again.')
      setLoading(false) 
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
            value={email} // Fixed missing curly braces
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password} // Fixed missing curly braces
            onChange={e => setPassword(e.target.value)}
          />
          {/* Fixed missing curly braces around {error} so it displays the actual variable */}
          {error && <p style={{ color: '#e57373', fontSize: '14px', margin: 0 }}>{error}</p>}
        </div>

        <button 
          className="login-btn" 
          onClick={handleLogin} // Fixed missing curly braces
          disabled={loading} // Fixed missing curly braces
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        >
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