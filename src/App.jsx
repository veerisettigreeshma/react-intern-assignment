import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// --- PROFILE PAGE (Matches Screenshot #4 Exactly) ---
const Profile = () => {
  return (
    <div style={{ background: '#f9f9f9', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ padding: '20px', backgroundColor: 'white', borderBottom: '1px solid #EAEAEA' }}>
        <h3 style={{ margin: 0, fontWeight: '400', color: '#1d2226' }}>Account Settings</h3>
      </div>

      {/* Profile Section */}
      <div style={{ padding: '30px 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="https://i.pravatar.cc/100?img=32" 
            alt="profile" 
            style={{ width: '80px', height: '80px', borderRadius: '50%' }} 
          />
          <div style={{ 
            position: 'absolute', bottom: '0', right: '0', 
            backgroundColor: '#6c25ff', borderRadius: '50%', 
            width: '24px', height: '24px', border: '2px solid white',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
            <span style={{ color: 'white', fontSize: '10px' }}>📷</span>
          </div>
        </div>
        <div>
          <h4 style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Marry Doe</h4>
          <p style={{ margin: 0, fontSize: '14px', color: '#1d2226' }}>Marry@Gmail.Com</p>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: '0 20px 30px 20px', fontSize: '14px', color: '#1d2226', lineHeight: '1.6' }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

      <div style={{ borderTop: '1px dashed #CBCBCB', margin: '0 20px' }}></div>
    </div>
  );
};

// --- OTHER PAGES (Placeholders for Navigation) ---
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', height: '80%', justifyContent: 'flex-end' }}>
      <h1>Welcome to PopX</h1>
      <button className="btn-primary" onClick={() => navigate('/signup')}>Create Account</button>
      <button style={{marginTop: '10px', padding: '15px', borderRadius: '6px', border: 'none', backgroundColor: '#cebafe'}} onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  return <div style={{padding: '20px'}}><h1>Signup</h1><button onClick={() => navigate('/profile')}>Go to Profile</button></div>;
};

const Login = () => {
  const navigate = useNavigate();
  return <div style={{padding: '20px'}}><h1>Login</h1><button onClick={() => navigate('/profile')}>Go to Profile</button></div>;
};

// --- THE MAIN APP COMPONENT ---
function App() {
  return (
    <div className="main-wrapper">
      <div className="mobile-container">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

// THIS IS THE LINE THAT WAS MISSING AND CAUSED THE ERROR:
export default App;