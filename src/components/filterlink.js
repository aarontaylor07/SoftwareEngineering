import React from 'react';
import { Link } from 'react-router-dom';

export const FilterLink = props => (
  <Link to={`/filter/${props.name}`}>
    <div className="Filter-preview">
     <src alt={`${props.name}`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default FilterLink;