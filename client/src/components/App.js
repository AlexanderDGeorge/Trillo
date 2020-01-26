import React from "react";
import { Route, Switch } from 'react-router-dom';

import AuthRoute from '../util/route_util';
import Login from './session/login';
import Register from './session/register';
import Home from './Home';

export default () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} routeType="auth" />
    <AuthRoute exact path="/register" component={Register} routeType="auth" />
    <Route path="/" component={Home} />
  </Switch>
);