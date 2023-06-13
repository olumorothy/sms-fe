import React from "react";
import LoginForm from "../components/LoginForm";

import RegistrationCard from "../components/RegistrationCard";
import ForgottenPasswordCard from "../components/ForgottenPasswordCard";

function Home() {
  return (
    <div className="container">
      <p className="text-login">Login/ Registration</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
        officiis vel provident, hic, atque vitae id sed quia eaque nostrum fugit
        cupiditate quo molestiae dignissimos possimus, sit suscipit delectus.
      </p>
      <div className="staff-login-card">
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse
          omnis nobis quam explicabo laudantium cumque porro eum voluptatem,
          similique accusantium quis culpa doloribus eaque qui molestias hic
          magni ratione!
        </p>
        <button className="card-btn">Staff Login</button>
      </div>
      <div className="home-cards">
        <div className="login-card">
          <LoginForm />
          <RegistrationCard />
          <ForgottenPasswordCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
