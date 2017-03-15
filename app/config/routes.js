import React from 'react';
import App from '../App';
import Service from '../components/service/listservice';
import { Route } from 'react-router'

export default (
  <div>
    <Route path="/" component={App}/>
    <Route path="/data" component={Service}/>
  </div>

);