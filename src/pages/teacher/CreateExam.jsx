import React, { useState } from "react";

function CreateExam() {
  const [subject, setSubject] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const createExam = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="new_exam_container">
      <h2>Create New Exam</h2>
      <div className="new_exam_box">
        <form className="form">
          <select
            name="subject"
            id="subject"
            onChange={handleSubjectChange}
            className="form-select"
            required
            value={subject}
          >
            <option value="" defaultValue hidden="hidden">
              Choose a Subject --
            </option>
            <option value="csc 200">CSC 200</option>
            <option value="csc 201">CSC 201</option>
          </select>
          <label htmlFor="email">Exam Name</label>
          <input
            type="text"
            id="name"
            className="input"
            autoComplete="off"
            required
            placeholder="Enter Exam name"
          />
          <label htmlFor="passmark">Pass Mark</label>
          <input
            type="number"
            className="input"
            id="passmark"
            autoComplete="off"
            defaultValue={50}
          />
          <label htmlFor="totalmark">Total Mark</label>
          <input
            type="number"
            className="input"
            id="totalmark"
            autoComplete="off"
            placeholder="Default is 100"
            defaultValue={100}
          />
          <label htmlFor="duration">Total Mark</label>
          <input
            type="number"
            className="input"
            id="duration"
            autoComplete="off"
            placeholder="Duration in mins"
            required
          />
          <button type="submit" onClick={(e) => createExam(e)}>
            Create New Exam
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateExam;
