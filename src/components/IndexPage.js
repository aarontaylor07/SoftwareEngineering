import React from 'react';
import { StudentLink } from './StudentLink';

export const IndexPage = ({ students }) => (
  <div className="home">
  <h2><strong>Listing of Students</strong></h2>
    <div className="students-selector">
      {students.map(
        studentData => <StudentLink key={studentData.id} {...studentData} />,
      )}
    </div>
        <div><p>HEllo</p></div>
  </div>
);

export default IndexPage;
