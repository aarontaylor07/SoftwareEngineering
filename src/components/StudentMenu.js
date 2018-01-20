import React from 'react';
import { Route, Link } from 'react-router-dom';

const studentMenuLink = ({ id, to, label }) => (
  <Route path={`/student/${id}`}>
    {({ match }) => (
      <Link 
        to={to} 
        className={match ? 'active' : ''}
      >
        {label}
      </Link>
    )}
  </Route>
);

export const StudentMenu = ({ students }) => (
  <nav className="student-menu">
    {
      students.map(student =>
        <StudentMenuLink 
          key={student.id} 
          id={student.id} 
          to={`/student/${student.id}`} 
          label={student.name} />,
      )
    }
  </nav>
);

export default StudentMenu;