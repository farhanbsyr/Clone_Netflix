import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
const Login = () => {
  const [sign, setSign] = useState(false);

  const handleSign = () => {
    setSign(!sign);
  };

  return (
    <div className="login">
      <img src={logo} alt="netflix logo" className="login-logo" />
      <div className="login-form">
        <h1>{sign === false ? "Sign Up" : "Sign In"}</h1>
        <form>
          {sign === false ? (
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
              />
            </div>
          ) : (
            <></>
          )}

          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button>{sign === false ? "Sign Up" : "Sign In"}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === false ? (
            <p>
              Already have account? <span onClick={handleSign}>Sign In</span>
            </p>
          ) : (
            <p>
              New to Netflix? <span onClick={handleSign}>Sign Up Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
