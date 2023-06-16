import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FcCommandLine } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
function ExamsCard({ exam }) {
  const navigate = useNavigate();
  const handleClick = (code) => {
    console.log(code);
    navigate("/questions");
  };
  return (
    <div className="exam_box">
      <div className="exam_content">
        <div className="exam_icon">
          <FaUserGraduate className="icon" />
        </div>
        <div className="exam_text">
          <h3>{exam.title}</h3>
          <p>
            <FcCommandLine /> {exam.code}
          </p>
          <p>
            <FcCalendar /> {exam.date}
          </p>
          <p>
            <FcAlarmClock /> {exam.duration}
          </p>
          <input
            type="submit"
            placeholder="Take Exam"
            value="Take Exam"
            onClick={() => handleClick(exam.code)}
          />
        </div>
      </div>
    </div>
  );
}

export default ExamsCard;
