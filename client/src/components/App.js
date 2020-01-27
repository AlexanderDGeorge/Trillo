import React from "react";
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Login from './session/login';
import Register from './session/register';
import Home from './home/home';

export default () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} />
    <AuthRoute exact path="/register" component={Register} />
    <Route path="/" component={Home} />
  </Switch>
);