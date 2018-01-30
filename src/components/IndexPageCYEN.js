import React from 'react';
import { StudentLink } from './StudentLink';


export const IndexPageCYEN = ({ students }) => (
  <div className="home">
  <h2><strong>Listing of CYEN Students</strong></h2>
    <div className="students-selector">
      {students.map(
        studentData => <StudentLink key={studentData.id} {...studentData} />,
      )}
    </div>
       <h2><strong>Filter By Major</strong></h2>
  </div>
);

export default IndexPageCYEN;