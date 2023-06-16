import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";

import { FcCalendar, FcAddRow } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function StudentHomePage() {
  const navigate = useNavigate();
  const handleCardClick = (cardName) => {
    console.log(`Clicked on ${cardName}`);
    // Add your custom logic here for handling the click event
    //<Navigate to={cardName} replace={true} />;
    navigate("/exams");
  };

  return (
    <div className="std_home">
      <div className="std_card" onClick={() => handleCardClick("/exams")}>
        <div className="card_body">
          <div className="card_icon">
            <FaUserGraduate className="icon" />
          </div>
          <div className="card-text">
            <p>Take Exam</p>
          </div>
        </div>
      </div>

      <div className="std_card" onClick={() => handleCardClick("Results")}>
        <div className="card_body">
          <div className="card_icon">
            <GrScorecard className="icon" />
          </div>
          <div className="card-text">
            <p>Results</p>
          </div>
        </div>
      </div>
      <div className="std_card" onClick={() => handleCardClick("Time table")}>
        <div className="card_body">
          <div className="card_icon">
            <FcCalendar className="icon" />
          </div>
          <div className="card-text">
            <p>Time Table</p>
          </div>
        </div>
      </div>
      <div className="std_card" onClick={() => handleCardClick("Exams")}>
        <div className="card_body">
          <div className="card_icon">
            <FaUserGraduate className="icon" />
          </div>
          <div className="card-text">
            <p>Exams</p>
          </div>
        </div>
      </div>
      <div
        className="std_card"
        onClick={() => handleCardClick("Course Registration")}
      >
        <div className="card_body">
          <div className="card_icon">
            <FcAddRow className="icon" />
          </div>
          <div className="card-text">
            <p>Course Registration</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentHomePage;

// import React from "react";
// import { FaUserGraduate } from "react-icons/fa";
// import { GrScorecard } from "react-icons/gr";

// import { FcCalendar, FcAddRow } from "react-icons/fc";
// import HomePageCard from "../../components/student/HomePageCard";

// const cards = [
//   {
//     name: "Take Exam",
//     icon: <FaUserGraduate className="icon" />,
//   },
//   {
//     name: "Results",
//     icon: <GrScorecard className="icon" />,
//   },
//   {
//     name: "Time Table",
//     icon: <FcCalendar className="icon" />,
//   },
//   {
//     name: "Exam",
//     icon: <FaUserGraduate className="icon" />,
//   },
//   {
//     name: "Course Registration",
//     icon: <FcAddRow className="icon" />,
//   },
// ];
// const onCardClick = (index) => {
//   const selectedCard = cards[index];
//   console.log(selectedCard);
//   console.log("Card clicked: " + selectedCard);
// };
// function StudentHomePage() {
//   return (
//     <>
//       {cards.map((card, index) => (
//         <HomePageCard
//           onClick={() => onCardClick(index)}
//           card={card}
//           key={index}
//         />
//       ))}
//     </>
//   );
// }

// export default StudentHomePage;
