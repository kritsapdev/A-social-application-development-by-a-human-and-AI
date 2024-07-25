// src/components/AuthForm.js
import React, { useState } from 'react';
import './AuthForm.css'; // We'll create this CSS file next

function AuthForm() {
  const [activeTab, setActiveTab] = useState('signup');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically handle form submission
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === 'signup' ? 'active' : ''}`}>
          <a href="#signup" onClick={() => setActiveTab('signup')}>Sign Up</a>
        </li>
        <li className={`tab ${activeTab === 'login' ? 'active' : ''}`}>
          <a href="#login" onClick={() => setActiveTab('login')}>Log In</a>
        </li>
      </ul>
      
      <div className="tab-content">
        {activeTab === 'signup' && (
          <div id="signup">   
            <h1>Sign Up for Free</h1>
            <form onSubmit={handleSubmit}>
              <div className="top-row">
                <div className="field-wrap">
                  <label className={formData.firstName ? 'active' : ''}>
                    First Name<span className="req">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="field-wrap">
                  <label className={formData.lastName ? 'active' : ''}>
                    Last Name<span className="req">*</span>
                  </label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="field-wrap">
                <label className={formData.email ? 'active' : ''}>
                  Email Address<span className="req">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field-wrap">
                <label className={formData.password ? 'active' : ''}>
                  Set A Password<span className="req">*</span>
                </label>
                <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="button button-block">Get Started</button>
            </form>
          </div>
        )}
        
        {activeTab === 'login' && (
          <div id="login">   
            <h1>Welcome Back!</h1>
            <form onSubmit={handleSubmit}>
              <div className="field-wrap">
                <label className={formData.email ? 'active' : ''}>
                  Email Address<span className="req">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="field-wrap">
                <label className={formData.password ? 'active' : ''}>
                  Password<span className="req">*</span>
                </label>
                <input 
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <p className="forgot"><a href="#">Forgot Password?</a></p>
              <button className="button button-block">Log In</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;