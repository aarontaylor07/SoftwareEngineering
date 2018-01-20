/* eslint no-console: "off" */

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { App } from './components/App';

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// TODO : maybe change this into something that isn't universal redirecting, so we can add other functionality
// TODO : create basic login page route for students and recruiters
// universal routing and rendering, just renders the app, no real backend
app.get('*', (req, res) => {
  var markup = '';
  // status is always good, bc we don't care
  var status = 200;

    const context = {};
    markup = renderToString(
        <Router location={req.url} context={context}>
            <App />
        </Router>
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }

  return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info("Server running on http://localhost:" + port);
});