import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";

const Login = () => {
  const [sign, setSign] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (sign === false) {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  const handleSign = () => {
    setSign(!sign);
  };

  return (
    <div className="login">
      <img src={logo} alt="netflix logo" className="login-logo" width={150} />
      <div className="login-form">
        <h1>{sign === false ? "Sign In" : "Sign Up"}</h1>
        <form>
          {sign === false ? (
            <></>
          ) : (
            <div className="form-group">
              <label htmlFor="name"></label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={user_auth} type="submit">
            {sign === false ? "Sign In" : "Sign Up"}
          </button>
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
              New to Netflix? <span onClick={handleSign}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={handleSign}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
