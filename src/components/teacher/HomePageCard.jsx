import React from "react";
import { useNavigate } from "react-router-dom";

function HomePageCard({ card }) {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    if (id === 1) {
      navigate("/examAdder");
    } else if (id === 2) {
      navigate("/allExams");
    }
  };
  return (
    <div className="teacher_box">
      <div className="teacher_content" onClick={() => handleCardClick(card.id)}>
        <div className="teacher_card_icon">{card.icon}</div>
        <div className="teacher_text">
          <h3>{card.title}</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePageCard;
