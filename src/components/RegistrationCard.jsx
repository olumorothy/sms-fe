import React from "react";
import { Link } from "react-router-dom";

function RegistrationCard() {
  return (
    <div className="login-container">
      <h2 className="title">Not Registered?</h2>
      <p>Please proceed to the registration process</p>
      <Link to="/signup">
        <button type="submit" className="btn-reg">
          Register
        </button>
      </Link>
    </div>
  );
}

export default RegistrationCard;
