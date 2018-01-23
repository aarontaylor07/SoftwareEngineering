import React from 'react';
import { StudentLink } from './StudentLink';
import { filterLink } from './filterLink';

export const IndexPage = ({ students }) => (
  <div className="home">
  <h2><strong>Listing of Students</strong></h2>
    <div className="students-selector">
      {students.map(
        studentData => <StudentLink key={studentData.id} {...studentData} />,
      )}
  <h2><strong>Filter By Major</strong></h2>
    <div className="filter-selector">
      {filters.map(
         filterdata => <filterlink key={filterdata.filterselection} />,
      )}
    </div>
        
       
  </div>
);

export default IndexPage;
