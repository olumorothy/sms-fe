import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StaffLoginCard() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    //console.log(role);
  }, [role]);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("I am clicked");
    navigate("/teachers");
  };
  const handleRole = (e) => {
    const value = e.target.value;
    setRole(value);
  };
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
        <div className="roles_container">
          <select
            name="roles"
            id="roles"
            onChange={handleRole}
            className="form-select"
            required
            value={role}
          >
            <option value="" defaultValue hidden="hidden">
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit" onClick={(e) => handleLogin(e)}>
          Login
        </button>
      </form>
    </div>
  );
}

export default StaffLoginCard;
