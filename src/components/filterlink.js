import React from 'react';
import { Link } from 'react-router-dom';

export const filterLink = props => (
  <Link to={`/filters/${props.filterselection}`}>
    <div className="filter-preview">
     <img src={`img/${props.image}`} alt={`${props.filterselection}'} />
      <h2 className="name">{props.filterselection}</h2>
    </div>
  </Link>
);

export default filterLink;
