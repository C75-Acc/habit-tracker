import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { getAdminUser } from '../adminAuth'

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  useEffect(() => {
    // Check for admin user first
    const adminUser = getAdminUser()
    if (adminUser) {
      setUser(adminUser)
      setIsCheckingAuth(false)
      return
    }

    // Otherwise check Firebase auth
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setIsCheckingAuth(false)
    })

    return () => unsubscribe()
  }, [])

  if (isCheckingAuth) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p> {/* You can replace this with a CSS spinner */}
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute