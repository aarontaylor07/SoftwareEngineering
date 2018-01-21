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
        <section className="description">
          Major : {student.degree}<br />
          Classification : {student.classification}<br />
          Graduation Date : {student.graduationDate}<br />
          Experience : {student.experience}
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index of Students</Link>
      </div>
    </div>
  );
};

export default StudentPage;
