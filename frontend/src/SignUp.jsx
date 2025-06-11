import React, { useState } from 'react';
import './SignUp.css';
import googleLogo from './new_google_logo.jpg';
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2>Create Account</h2>
        <p id='p1'>Unlock your campus community buy,sell and connect smarter.</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter username'
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email <span className='s1'>(email id given by institute)</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter institute mail id'
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password <span className='s1'>(password given by institute)</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              required
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <div className='divider'>
            <hr className='hr1'/>
            <span>or</span>
            <hr className="hr2"/>
          </div>

           <button className='ggl-btn'>
            <img src={googleLogo} alt="google-logo" className='google-logo'/>
             Sign Up with Google
           </button>
           
        </form>
      </div>
    </div>
  );
};

export default SignUp;