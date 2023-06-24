import React from "react";

function ViewExams() {
  return (
    <div>
      <h3>All Exams</h3>
      <div className="exam_table_container">
        <table className="exam_table">
          <tr>
            <th>Subject Name</th>
            <th>Code</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>Intro to CSS</td>
            <td>CSS 213</td>
            <td>
              <button style={{ width: "60px" }}>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Intro to Java</td>
            <td>CSS 212</td>
            <td>
              <button>Edit/Delete</button>
            </td>
          </tr>
          <tr>
            <td>OOP Fundamentals</td>
            <td>CSS 204</td>
            <td>
              <button>Edit/Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ViewExams;
