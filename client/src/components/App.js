import React from "react";
import { Switch, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Login from './session/login';
import Register from './session/register';
import Home from './home/home';
import Board from './board/board';
import BoardDetail from'./board/board-details';
export default () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} routeType="auth" />
    <AuthRoute exact path="/register" component={Register} routeType="auth" />
    <Route path="/boards/:boardId" component={BoardDetail} />
    <Route  path="/boards" component={Board} />

    <Route path="/" component={Home} />
  </Switch>
);