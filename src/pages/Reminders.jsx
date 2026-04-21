import Layout from '../components/Layout'
import { useState } from "react";
import "./Reminders.css";


function Reminders() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <Layout>
      <div className="reminders-container">
        <h1>Reminders</h1>
        <p className="subtitle">Configure your habit reminders.</p>

        <div className="card">
          <h2>Notification Settings</h2>
          <p className="card-subtitle">
            Configure how you want to receive reminders
          </p>

          {/* Push */}
          <div className="setting">
            <div>
              <h3>Push Notifications</h3>
              <p>Receive alerts on your device</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={push}
                onChange={() => setPush(!push)}
              />
              <span className="slider"></span>
            </label>
          </div>

          {/* Email */}
          <div className="setting">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive reminders via email</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={email}
                onChange={() => setEmail(!email)}
              />
              <span className="slider"></span>
            </label>
          </div>

          {/* SMS */}
          <div className="setting">
            <div>
              <h3>SMS Notifications</h3>
              <p>Receive text message reminders</p>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={sms}
                onChange={() => setSms(!sms)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Reminders
