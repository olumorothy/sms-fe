import Timer from "./Timer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const questions = [
  {
    id: 1,
    question: "What is the full meaning of CSS?",
    optionA: "optionA",
    optionB: "optionB",
    optionC: "optionC",
    optionD: "optionD",
  },
  {
    id: 2,
    question: "What is the full meaning of OOP?",
    optionA: "optionA",
    optionB: "optionB",
    optionC: "optionC",
    optionD: "optionD",
  },
  {
    id: 3,
    question: "What is the full meaning of HTML?",
    optionA: "optionA",
    optionB: "optionB",
    optionC: "optionC",
    optionD: "optionD",
  },
];
function Questions() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [questionNos, setQuestionNos] = useState(0);

  const onOptionChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleNext = () => {
    //check if questionNos is the last,if yes then submit
    if (questionNos + 1 === questions.length) {
      alert("Question Submited");
      navigate("/exams");
      //then redirect to exam pages
    } else {
      setQuestionNos(questionNos + 1);
    }
  };
  return (
    <div className="question_container">
      <Timer />
      <div className="question_body">
        <h2>Course Title</h2>
        <p>
          Question {questionNos + 1} of {questions.length}
        </p>
        <h3>{questions[questionNos].question}</h3>
        <div className="options">
          <div className="options_body">
            <div className="radio_alignment">
              <input
                type="radio"
                name="options"
                value="optionA"
                id="optionA"
                checked={answer === "optionA"}
                onChange={onOptionChange}
              />
              <label htmlFor="optionA">option A</label>
            </div>
            <div className="radio_alignment">
              <input
                type="radio"
                name="options"
                value="optionB"
                id="optionB"
                checked={answer === "optionB"}
                onChange={onOptionChange}
              />
              <label htmlFor="optionB">option B</label>
            </div>
            <div className="radio_alignment">
              <input
                type="radio"
                name="options"
                value="optionC"
                id="optionC"
                checked={answer === "optionC"}
                onChange={onOptionChange}
              />
              <label htmlFor="optionC">option C</label>
            </div>
            <div className="radio_alignment">
              <input
                type="radio"
                name="options"
                value="optionD"
                id="optionD"
                checked={answer === "optionD"}
                onChange={onOptionChange}
              />
              <label htmlFor="optionD">option D</label>
            </div>

            <p>
              selected answer <strong>{answer}</strong>
            </p>
          </div>
        </div>
        <button onClick={handleNext}>
          {questionNos + 1 === questions.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Questions;
