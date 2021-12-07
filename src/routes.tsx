import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import ROUTER_CONFIG from './router/router-config';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        {Object.entries(ROUTER_CONFIG).map(([key, route]) => (
          <Route exact={route.exact} path={route.path} key={key}>
            {route.children}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
