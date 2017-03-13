var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./config/routes');
// import { browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


ReactDOM.render(
  <Router  history={createBrowserHistory()}>{routes}</Router>,
  document.getElementById('app')
)