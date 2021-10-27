import React from 'react';
import 'assets/css/index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from 'page/Login';
import { Register } from 'page/Register';
import { AuthenticationContext, useAuthenticationHooks } from 'context/AuthenticationContext';
import { Dashboard } from 'page/Dashboard';

function AppRouter() {
  const authState = useAuthenticationHooks();

  return (
    <AuthenticationContext.Provider value={authState}>
      <Router basename="/investimentos">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Dashboard} />
        </Switch>
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default AppRouter;
