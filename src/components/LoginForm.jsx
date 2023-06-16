import React from "react";

function LoginForm() {
  return (
    <div className="login-container">
      <h2 className="title">Already registered?</h2>
      <form className="form">
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
          className="input"
          id="password"
          autoComplete="off"
          placeholder="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
