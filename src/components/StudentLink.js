import React from 'react';
import { Link } from 'react-router-dom';

export const StudentLink = props => (
  <Link to={`/student/${props.id}`}>
    <div className="student-link">
      <img src={`img/${props.image}`}/>
    </div>
  </Link>
);

export default StudentLink;