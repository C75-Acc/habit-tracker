import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaHome, FaUser, FaBullseye, FaBell, FaCog, FaUserPlus, FaSignOutAlt } from 'react-icons/fa'
import '../App.css'
import { DoorOpen } from "lucide-react";
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

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
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/login')
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-icon">
  <DoorOpen size={20} />
</div>
          <span className="brand">HabitatYourDoor</span>
        </div>
        <div className="navbar-right">
          {currentUser ? (
            <>
              <span className="navbar-username">
                {currentUser.displayName || currentUser.email}
              </span>
              <button className="btn btn-logout" onClick={handleLogout}>
                <FaSignOutAlt />
                Log out
              </button>
            </>
          ) : (
            <>
              <button className="btn" onClick={() => navigate('/login')}>Log in</button>
              <button className="btn btn-primary btn-signup" onClick={() => navigate('/signup')}>
                <FaUserPlus />
                Sign up
              </button>
            </>
          )}
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
