import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// --- STYLES (Inline to ensure they work 100%) ---
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    margin: 0,
    fontFamily: 'sans-serif'
  },
  mobileContainer: {
    width: '375px',
    height: '812px',
    backgroundColor: 'white',
    borderRadius: '30px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
    overflowY: 'auto',
    position: 'relative',
    border: '8px solid #333'
  },
  inputGroup: {
    position: 'relative',
    marginBottom: '25px',
  }
};

// --- COMPONENTS ---
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', height: '90%', justifyContent: 'flex-end' }}>
      <h1>Welcome to PopX</h1>
      <p style={{ color: '#6d6d6d', marginBottom: '30px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button style={{ width: '100%', padding: '15px', backgroundColor: '#6c25ff', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }} onClick={() => navigate('/signup')}>Create Account</button>
      <button style={{ width: '100%', padding: '15px', backgroundColor: '#cebafe', color: '#1d2226', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/login')}>Already Registered? Login</button>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '30px 20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '30px' }}>Create your PopX account</h1>
      {[
        { label: 'Full Name*', val: 'Marry Doe' },
        { label: 'Phone number*', val: 'Marry Doe' },
        { label: 'Email address*', val: 'Marry Doe' },
        { label: 'Password*', val: 'Marry Doe' },
        { label: 'Company name', val: 'Marry Doe' }
      ].map((field, i) => (
        <div key={i} style={styles.inputGroup}>
          <label style={{ position: 'absolute', top: '-10px', left: '12px', background: 'white', padding: '0 5px', fontSize: '12px', color: '#6c25ff' }}>{field.label}</label>
          <input type="text" defaultValue={field.val} style={{ width: '100%', padding: '15px', border: '1px solid #dcdcdc', borderRadius: '6px', boxSizing: 'border-box' }} />
        </div>
      ))}
      <p style={{ fontSize: '14px', marginBottom: '10px' }}>Are you an Agency?*</p>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
        <label><input type="radio" name="agency" defaultChecked /> Yes</label>
        <label><input type="radio" name="agency" /> No</label>
      </div>
      <button style={{ width: '100%', padding: '15px', backgroundColor: '#6c25ff', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }} onClick={() => navigate('/profile')}>Create Account</button>
    </div>
  );
};

// ... (Login and Profile components would go here, simplified for this step)
const Login = () => <div style={{padding: '20px'}}><h1>Login Page</h1><button onClick={() => window.location.href='/profile'}>Login</button></div>;
const Profile = () => <div style={{padding: '20px'}}><h1>Account Settings</h1><p>Marry Doe</p></div>;

export default function App() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.mobileContainer}>
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