import React from "react";

function HomePageCard({ card }) {
  return (
    <div className="std_home">
      <div className="std_card">
        <div className="card_body">
          <div className="card_icon">
            {/* <FaUserGraduate className="icon" /> */}
            {card.icon}
          </div>
          <div className="card-text">
            {/* <p>Take Exam</p> */}
            {card.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageCard;
