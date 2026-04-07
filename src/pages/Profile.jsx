import Layout from '../components/Layout'
import './Profile.css'

function Profile() {
  return (
    <Layout>
      <div className="profile-page-wrapper">

        <div className="profile-layout">

          <h1 className="profile-title">Profile</h1>
          <p className="profile-sub">Manage your account and preferences.</p>

          {/* PROFILE CARD */}
          <div className="profile-card">

            <div className="profile-top">
              <div className="profile-avatar">AJ</div>

              <div>
                <h2 className="profile-name">Alex Johnson</h2>
                <p className="profile-date">Member since January 2024</p>
              </div>
            </div>

            <button className="profile-edit-btn">Edit Profile</button>

            {/* FORM */}
            <div className="profile-fields">

              <div className="profile-group">
               <label>Full Name</label>
               <input defaultValue="Alex Johnson" readOnly />
             </div>

             <div className="profile-group">
               <label>Email Address</label>
               <input defaultValue="alex.johnson@email.com" readOnly />
             </div>

             <div className="profile-group full">
               <label>Location</label>
               <input defaultValue="San Francisco, CA" readOnly />
             </div>

             <div className="profile-group full">
               <label>Bio</label>
               <textarea rows="3" defaultValue="Building better habits one day at a time." readOnly />
             </div>

           </div>
         </div>

       {/* STATS */}
         <div className="stats-card">
           <h3>Statistics</h3>

           <div className="stats-grid">
             <div className="stat-box">
               <h2>43</h2>
               <p>Total Days</p>
             </div>

              <div className="stat-box">
                <h2>12</h2>
               <p>Best Streak</p>
             </div>

             <div className="stat-box">
               <h2>4</h2>
               <p>Active Habits</p>
             </div>

             <div className="stat-box">
               <h2>87%</h2>
               <p>Completion Rate</p>
             </div>
           </div>
         </div>

       </div>
    </div>

    </Layout>
  )
}

export default Profile