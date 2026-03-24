import { useState } from 'react'
import { FaHome, FaUser, FaBullseye, FaBell, FaCog, FaUserPlus, FaMedal } from 'react-icons/fa'
import './App.css'

const navItems = [
  { label: 'Home',      Icon: FaHome      },
  { label: 'Profile',   Icon: FaUser      },
  { label: 'Goals',     Icon: FaBullseye  },
  { label: 'Reminders', Icon: FaBell      },
  { label: 'Settings',  Icon: FaCog       },
]

const TODAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]

function HabitCard({ title, subtitle, initialDays }) {
  const [checked, setChecked] = useState(true)
  const [days] = useState(initialDays)

  const effectiveDays = { ...days, [TODAY]: checked }
  const pct = Math.round(Object.values(effectiveDays).filter(Boolean).length / Object.values(effectiveDays).length * 100)

  return (
    <div className="habit-card">
      <label className="habit-row">
        <input
          type="checkbox"
          className="habit-checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        />
        <div>
          <span className={`habit-title${checked ? ' struck' : ''}`}>{title}</span>
          <span className="habit-sub">{subtitle}</span>
        </div>
      </label>
      <div className="habit-footer">
        <FaMedal className="habit-medal" />
        <span className="habit-sub">Weekly progress</span>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-days">
        {Object.entries(effectiveDays).map(([d, on]) => (
          <div key={d} className="progress-day-col">
            <span>{d}</span>
            <span className={`day-circle${on ? ' on' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('Home')

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo-placeholder" />
          <span className="brand">HabitatYourDoor</span>
        </div>
        <div className="navbar-right">
          <button className="btn-login">Log in</button>
          <button className="btn-signup">
            <FaUserPlus />
            Sign up
          </button>
        </div>
      </nav>

      <div className="body">
        <aside className="sidebar">
          {navItems.map(({ label, Icon }) => (
            <button
              key={label}
              className={`sidebar-btn${active === label ? ' active' : ''}`}
              onClick={() => setActive(label)}
            >
              <Icon className="sidebar-icon" />
              {label}
            </button>
          ))}
        </aside>

        <main className="content">
          <div className="content-header">
            <div>
              <h1>Home</h1>
              <p>Track your daily habits and streaks</p>
            </div>
            <button className="btn-add-habit">+ Add Habit</button>
          </div>

          <HabitCard
            title="Morning exercise"
            subtitle="45 minutes of cardio or strength training"
            initialDays={{ Mon: true, Tue: true, Wed: true, Thu: false, Fri: true, Sat: false, Sun: false }}
          />
          <HabitCard
            title="Morning exercise"
            subtitle="45 minutes of cardio or strength training"
            initialDays={{ Mon: true, Tue: true, Wed: true, Thu: false, Fri: true, Sat: false, Sun: false }}
          />
          <HabitCard
            title="Morning exercise"
            subtitle="45 minutes of cardio or strength training"
            initialDays={{ Mon: true, Tue: true, Wed: true, Thu: false, Fri: true, Sat: false, Sun: false }}
          />
        </main>
      </div>
    </div>
  )
}

export default App
