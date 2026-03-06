import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// 1. WELCOME SCREEN
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', height: '90%', justifyContent: 'flex-end' }}>
      <h1 style={{ marginBottom: '10px' }}>Welcome to PopX</h1>
      <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="btn-primary" style={{ marginBottom: '10px' }} onClick={() => navigate('/signup')}>Create Account</button>
      <button className="btn-secondary" onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
};

// 2. LOGIN SCREEN
const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1>Signin to your PopX account</h1>
      <p style={{ color: 'var(--text-gray)', marginBottom: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="input-group">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>
      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>
      <button className="btn-primary" style={{ backgroundColor: '#cbcbcb' }} onClick={() => navigate('/profile')}>Login</button>
    </div>
  );
};

// 3. SIGNUP SCREEN
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '30px' }}>Create your PopX account</h1>
      
      <div className="input-group">
        <label>Full Name*</label>
        <input type="text" defaultValue="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Phone number*</label>
        <input type="text" defaultValue="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Email address*</label>
        <input type="email" defaultValue="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Password *</label>
        <input type="password" defaultValue="Marry Doe" />
      </div>

      <div className="input-group">
        <label>Company name</label>
        <input type="text" defaultValue="Marry Doe" />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '14px', fontWeight: '500', marginBottom: '10px' }}>Are you an Agency?*</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="radio" name="agency" defaultChecked style={{ accentColor: 'var(--primary-purple)' }} /> Yes
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input type="radio" name="agency" style={{ accentColor: 'var(--primary-purple)' }} /> No
          </label>
        </div>
      </div>

      {/* Spacing to push button to bottom */}
      <div style={{ flexGrow: 1 }}></div>

      <button className="btn-primary" onClick={() => navigate('/profile')}>
        Create Account
      </button>
    </div>
  );
};

// 4. PROFILE SCREEN
const Profile = () => (
  <div>
    <div style={{ padding: '20px', borderBottom: '1px solid #eee' }}><h3>Account Settings</h3></div>
    <div style={{ padding: '20px', display: 'flex', alignItems: 'center', backgroundColor: '#f9f9f9' }}>
      <div style={{ position: 'relative' }}>
        <img src="https://via.placeholder.com/80" alt="profile" style={{ borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--primary-purple)', borderRadius: '50%', width: '20px', height: '20px' }}></div>
      </div>
      <div style={{ marginLeft: '15px' }}>
        <h4 style={{ margin: 0 }}>Marry Doe</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Marry@Gmail.Com</p>
      </div>
    </div>
    <div style={{ padding: '20px', fontSize: '14px', color: '#444' }}>
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
    </div>
  </div>
);

function App() {
  return (
    <div className="main-wrapper">
      <div className="mobile-container">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;