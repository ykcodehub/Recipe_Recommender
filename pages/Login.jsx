
import React from 'react';
import "./styles.css"
import { useState } from "react";

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);
  const login = () => {

  };

  const signup = () => {

  };

  const toggleForm = (formId) => {
    setIsLogin(false)
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form id="loginForm" className="active" style={{ display: (!isLogin) ? "none" : "block" }}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input type="email" id="loginEmail" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input type="password" id="loginPassword" placeholder="Enter your password" required />
            </div>
            <button type="button" onClick={login}>Login</button>
            {/* <p className="toggle-form">Don't have an account? <span onClick={ () => toggleForm('signupForm')}>Sign Up</span></p> */}
            <p className="toggle-form">Don't have an account? <button className='btnSwitchForm' onClick={() => toggleForm()}>Sign Up</button></p>
          </form>

          <form id="signupForm" style={{ display: (isLogin) ? "none" : "block" }}>
            <h2>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="signupEmail">Email</label>
              <input type="email" id="signupEmail" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="signupPassword">Password</label>
              <input type="password" id="signupPassword" placeholder="Enter your password" required />
            </div>
            <button type="button" onClick={signup}>Sign Up</button>
            <p className="toggle-form">Already have an account? <button className='btnSwitchForm' onClick={() => toggleForm()}>Login</button></p>
          </form> 
        </div>
      </div>
      {/* <script src="script.js"></script> */}
    </>
  );
};

export default Login;
