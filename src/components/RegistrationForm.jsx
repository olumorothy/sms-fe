import React from "react";
import { Link } from "react-router-dom";

function RegistrationForm() {
  return (
    <>
      <section className="register">
        <div className="login-container">
          <h2 className="title">Sign Up</h2>
          <form className="form">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="input"
              autoComplete="off"
              required
              placeholder="Enter Full Name here"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="username"
              className="input"
              autoComplete="off"
              required
              placeholder="Enter Email here"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input"
              autoComplete="off"
              required
              placeholder="Enter Passwword"
            />
            <label htmlFor="c_password">Confirm Password</label>
            <input
              type="password"
              className="input"
              id="c_password"
              autoComplete="off"
              placeholder="confirm password"
              required
            />
            <button type="submit">Create Account</button>
            <p>
              Already have an account? click <Link to="/student">here</Link> to
              login
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegistrationForm;
