import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { IndexPage } from './IndexPage';
import { IndexPageCYEN } from './IndexPageCYEN';
import { StudentPage } from './StudentPage';
import { NotFoundPage } from './NotFoundPage';
import students from '../data/students';
import studentsCYEN from '../data/studentsCYEN';
import filters from '../data/filters';
import { print } from 'util';


// render index, student, and not found pages
// match a select id to a student, otherwise go to 404 page
const renderIndex = () => <IndexPage students={students} filters={filters} />;
const renderFilter = ({ match, staticContext }) => {
  const name = match.params.name;
  
  const filter = filters.find(current => current.name === name);
  if (name == "Mathematics") 
  {
    return <IndexPageCYEN students={studentsCYEN} />;

  }
  if (name == null)
  {
    return <NotFoundPage staticContext={staticContext} />;
  }
 
};
const renderStudent = ({ match, staticContext }) => {
  const id = match.params.id;
  const degree = match.params.degree;
  const student = students.find(current => current.id === id);
  if (student == null) 
  {
    return <NotFoundPage staticContext={staticContext} />;
  }
  return <StudentPage student={student} students={students} />;
};




// app is an arrow function bc i'm lazy and have used these lines forever
// also put header and footer in here, bc lazy
export const App = () => (
  <div className="app-container">
  <header>
    <Link to="/">
      <img className="logo" src="/img/laTechLogo.png" alt="Louisiana Tech "/>
    </Link>
  </header>
  <div className="app-content">
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/student/:id" render={renderStudent} />
      <Route exact path="/filter/:name" render={renderFilter} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  <footer>
    <p>
      <strong>Disclaimer : </strong> No information on this application is real.
    </p>
  </footer>
</div>
);

export default App;
