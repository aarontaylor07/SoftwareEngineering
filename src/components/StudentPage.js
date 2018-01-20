import React from 'react';
import { Link } from 'react-router-dom';
import {StudentMenu } from './StudentMenu';

export const StudentPage = ({ student, students }) => {
  const headerStyle = { backgroundImage: `url(/img/${student.cover})` };
  return (
    <div className="student-page">
    <StudentMenu students={students} />
      <div className="student">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${student.name}'s profile`} src={`/img/${student.image}`} />
          <h2 className="name">{student.name}</h2>
        </div>
        <section className="description">
          {student.description}
        </section>
      </div>
    </div>
  );
};

export default StudentPage;