import React from "react";
import { Switch, Route } from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import Login from './session/login';
import Register from './session/register';
import Home from './home/home';
import BoardDetail from'./board/board-detail';

export default () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} />
    <AuthRoute exact path="/register" component={Register} />
    <Route path="/boards/:boardId" component={BoardDetail} />
    <Route path="/" component={Home} />
  </Switch>
);