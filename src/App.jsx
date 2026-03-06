import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// --- 1. WELCOME SCREEN ---
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', height: '90%', justifyContent: 'flex-end' }}>
      <h1 style={{ marginBottom: '10px' }}>Welcome to PopX</h1>
      <p style={{ color: '#6d6d6d', marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="btn-primary" style={{ marginBottom: '10px' }} onClick={() => navigate('/signup')}>Create Account</button>
      <button className="btn-secondary" onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
};

// --- 2. SIGNIN SCREEN ---
const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Signin to your PopX account</h1>
      <p style={{ color: '#6d6d6d', marginBottom: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="input-group"><label>Email Address</label><input type="email" placeholder="Enter email address" /></div>
      <div className="input-group"><label>Password</label><input type="password" placeholder="Enter password" /></div>
      <button className="btn-primary" style={{ backgroundColor: '#cbcbcb' }} onClick={() => navigate('/profile')}>Login</button>
    </div>
  );
};

// --- 3. CREATE ACCOUNT SCREEN ---
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '30px' }}>Create your PopX account</h1>
      {[
        { label: 'Full Name*', val: 'Marry Doe' },
        { label: 'Phone number*', val: 'Marry Doe' },
        { label: 'Email address*', val: 'Marry Doe' },
        { label: 'Password*', val: 'Marry Doe' },
        { label: 'Company name', val: 'Marry Doe' }
      ].map((f, i) => (
        <div key={i} className="input-group">
          <label>{f.label}</label>
          <input type="text" defaultValue={f.val} />
        </div>
      ))}
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>Are you an Agency?*</p>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <label><input type="radio" name="agency" defaultChecked /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>
      <button className="btn-primary" onClick={() => navigate('/profile')}>Create Account</button>
    </div>
  );
};

// --- 4. ACCOUNT SETTINGS (Matches Screenshot Exactly) ---
const Profile = () => (
  <div style={{ background: '#f9f9f9', minHeight: '100%' }}>
    <div style={{ padding: '20px', backgroundColor: 'white', borderBottom: '1px solid #EAEAEA' }}>
      <h3 style={{ margin: 0, fontWeight: '400' }}>Account Settings</h3>
    </div>
    <div style={{ padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
      <div style={{ position: 'relative' }}>
        <img src="https://i.pravatar.cc/100?img=32" alt="p" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '0', right: '0', backgroundColor: '#6c25ff', borderRadius: '50%', width: '22px', height: '22px', border: '2px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: 'white', fontSize: '10px' }}>📷</span>
        </div>
      </div>
      <div>
        <h4 style={{ margin: '0 0 5px 0' }}>Marry Doe</h4>
        <p style={{ margin: 0, fontSize: '14px' }}>Marry@Gmail.Com</p>
      </div>
    </div>
    <div style={{ padding: '0 20px 30px 20px', fontSize: '14px', color: '#1d2226', lineHeight: '1.6' }}>
      Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
    </div>
    <div style={{ borderTop: '1px dashed #CBCBCB', margin: '0 20px' }}></div>
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

export default App; // THIS LINE FIXES THE VERCEL BUILD ERROR