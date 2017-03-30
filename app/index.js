import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import routes from './config/routes';
import { Router} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()


ReactDOM.render(
 <Router history={history}>
   {routes}
</Router>,
  document.getElementById('app')
);


