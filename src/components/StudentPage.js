import React from 'react';
import { Link } from 'react-router-dom';
import {StudentMenu } from './StudentMenu';

export const StudentPage = ({ student, students }) => {
  const headerStyle = { backgroundImage: `url(/img/${student.cover})` };
  return (
    <div className="student-full">
    <StudentMenu students={students} />
      <div className="student">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${student.name}'s profile`} src={`/img/${student.image}`} />
          <h2 className="name">{student.name}</h2>
        </div>
        <div className="description">
          <strong>Major : </strong>{student.degree}<br />
          <strong>Classification : </strong>{student.classification}<br />
          <strong>Graduation Date : </strong>{student.graduationDate}<br />
          <strong>Experience : </strong>{student.experience} <br />
          <strong>Resume : </strong><br />
          <img alt={`${student.name}'s resume`} src={`/resumes/${student.resume}`} /><br />
        </div>
      </div>
      <br />
      <div className="navigateBack">
        <Link to="/">« Back to the index of Students</Link>
      </div>
    </div>
  );
};

export default StudentPage;
