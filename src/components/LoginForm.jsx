import React, { useState } from "react";
import { studentLogin } from "../api";
import { useNavigate } from "react-router";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    //call the backend api
    const result = await studentLogin(email, password);
    console.log(result);
    if (result.token) {
      //login successful
      console.log(result.status);
      setPassword("");
      setEmail("");
      localStorage.setItem("user_token", JSON.stringify(result.token));
      navigate("/student");
    } else {
      alert(result.message);
    }
  };
  return (
    <div className="login-container">
      <h2 className="title">Already registered?</h2>
      <form className="form" onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="username"
          className="input"
          autoComplete="off"
          required
          placeholder="Enter Email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input"
          id="password"
          autoComplete="off"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
