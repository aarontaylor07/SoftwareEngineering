import React from 'react';
import { StudentLink } from './StudentLink';
import { FilterLink } from './FilterLink';


export const IndexPage = ({ students, filters }) => (
  <div className="home">
  <h2><strong>Listing of Students</strong></h2>
    <div className="students-selector">
      {students.map(
        studentData => <StudentLink key={studentData.id} {...studentData} />,
      )}
    </div>
      <h2><strong>Filter By Major</strong></h2>
     
      {filters.map(
        filterData => <FilterLink key={filterData.name}{...filterData} />,
      )}

    </div>
);

export default IndexPage;
