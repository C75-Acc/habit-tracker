import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-layout">
      <div className="login-card">
        <h1 className="login-title">HabitatYourDoor</h1>
        <p className="login-sub">Welcome back</p>

        <div className="login-fields">
          <input className="login-input" type="email" placeholder="Email" />
          <input className="login-input" type="password" placeholder="Password" />
        </div>

        <button className="login-btn" onClick={() => navigate('/home')}>Log in</button>

        <div className="login-footer">
          <button className="text-btn">Forgot password?</button>
          <button className="text-btn" onClick={() => navigate('/signup')}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
