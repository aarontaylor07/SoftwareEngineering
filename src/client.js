import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';

// use arrow functions instead of the pretty ugly looking functions 
const Client = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render(<Client />, document.getElementById('main'));
};