import React from "react";
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Login from './session/login';
import Register from './session/register';
import Home from './home/home';
import Board from './board/board';
export default () => (
  <Switch>
<<<<<<< HEAD
    <AuthRoute exact path="/login" component={Login} routeType="auth" />
    <AuthRoute exact path="/register" component={Register} routeType="auth" />
    <Route exact path="/boards" component={Board} />
=======
    <AuthRoute exact path="/login" component={Login} />
    <AuthRoute exact path="/register" component={Register} />
>>>>>>> 1e61388336efb93e75b01a91dbde2fc351cafb1b
    <Route path="/" component={Home} />
  </Switch>
);