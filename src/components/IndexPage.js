import React from 'react';
import { studentLink } from './StudentLink';

export const IndexPage = ({ students }) => (
  <div className="home">
    <div className="students-selector">
      {students.map(
        studentData => <studentLink key={studentData.id} {...studentData} />,
      )}
    </div>
  </div>
);

export default IndexPage;