import React from "react";
import ExamsCard from "../../components/student/ExamsCard";

const exams = [
  {
    title: "Intro to CSS",
    code: "CSS 213",
    date: "20/04/2022",
    duration: "30mins",
  },
  {
    title: "Intro to Java",
    code: "CSS 212",
    date: "20/04/2022",
    duration: "30mins",
  },
  {
    title: "Intro to Java",
    code: "CSS 212",
    date: "20/04/2022",
    duration: "30mins",
  },
  {
    title: "Intro to HTML",
    code: "CSS 200",
    date: "20/04/2022",
    duration: "30mins",
  },
  {
    title: "OOP Fundamentals",
    code: "CSS 204",
    date: "20/04/2022",
    duration: "130mins",
  },
  {
    title: "Machine Learning",
    code: "CSS 200",
    date: "20/04/2022",
    duration: "30mins",
  },
  {
    title: "Machine Learning",
    code: "CSS 200",
    date: "20/04/2022",
    duration: "30mins",
  },
];

function ExamsPage() {
  return (
    <div className="exam_card_container">
      {exams.map((exam, index) => (
        <ExamsCard exam={exam} key={index} />
      ))}
    </div>
  );
}

export default ExamsPage;
