import { useNavigate } from 'react-router-dom'
import './Login.css'

function Signup() {
  const navigate = useNavigate()

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
          <input className="login-input" type="email" placeholder="Email" />
          <input className="login-input" type="password" placeholder="Password" />
          <input className="login-input" type="password" placeholder="Confirm password" />
        </div>

        <button className="login-btn" onClick={() => navigate('/goals-setup')}>Sign up</button>

        <div className="login-footer">
          <span style={{ fontSize: '17px', color: '#888' }}>Already have an account?</span>
          <button className="text-btn" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Signup
