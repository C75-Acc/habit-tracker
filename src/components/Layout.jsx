import { useNavigate, useLocation } from 'react-router-dom'
import { FaHome, FaUser, FaBullseye, FaBell, FaCog, FaUserPlus } from 'react-icons/fa'
import '../App.css'

const navItems = [
  { label: 'Home',      Icon: FaHome,     path: '/home'      },
  { label: 'Profile',   Icon: FaUser,     path: '/profile'   },
  { label: 'Goals',     Icon: FaBullseye, path: '/goals'     },
  { label: 'Reminders', Icon: FaBell,     path: '/reminders' },
  { label: 'Settings',  Icon: FaCog,      path: '/settings'  },
]

function Layout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-placeholder" />
          <span className="brand">HabitatYourDoor</span>
        </div>
        <div className="navbar-right">
          <button className="btn" onClick={() => navigate('/login')}>Log in</button>
          <button className="btn btn-primary btn-signup" onClick={() => navigate('/login')}>
            <FaUserPlus />
            Sign up
          </button>
        </div>
      </nav>

      <div className="body">
        <aside className="sidebar">
          {navItems.map(({ label, Icon, path }) => (
            <button
              key={label}
              className={`sidebar-btn${location.pathname === path ? ' active' : ''}`}
              onClick={() => navigate(path)}
            >
              {Icon && <Icon className="sidebar-icon" />}
              {label}
            </button>
          ))}
        </aside>

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
