import React from "react";
import HomePageCard from "../../components/teacher/HomePageCard";
import {
  FcDatabase,
  FcDocument,
  FcPlus,
  FcReading,
  FcServices,
  FcViewDetails,
} from "react-icons/fc";

const cards = [
  {
    id: 1,
    title: "Create Exam",
    icon: <FcDatabase className="icon" />,
  },
  {
    id: 2,
    title: "View Exams",
    icon: <FcViewDetails className="icon" />,
  },
  {
    id: 3,
    title: "Set Exam Questions",
    icon: <FcPlus className="icon" />,
  },
  {
    id: 4,
    title: "Subjects",
    icon: <FcDocument className="icon" />,
  },
  {
    id: 5,
    title: "My Profile",
    icon: <FcServices className="icon" />,
  },
  {
    id: 6,
    title: "Student Results",
    icon: <FcReading className="icon" />,
  },
];
function TeacherPage() {
  return (
    <div className="teacher_main">
      <div className="teacher_container">
        {cards.map((card) => (
          <HomePageCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default TeacherPage;
