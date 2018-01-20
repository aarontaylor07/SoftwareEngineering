import React from 'react';
import { Link } from 'react-router-dom';

export const StudentLink = props => (
  <Link to={`/student/${props.id}`}>
    <div className="student-preview">
     <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default StudentLink;