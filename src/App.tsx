import React from 'react';
import 'assets/css/index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login } from 'page/Login';
import { Register } from 'page/Register';
import { AuthenticationContext, useAuthenticationHooks } from 'context/AuthenticationContext';
import { Dashboard } from 'page/Dashboard';

function AppRouter() {
  const authState = useAuthenticationHooks();

  return (
    <AuthenticationContext.Provider value={authState}>
      <Router basename="/investimentos">
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default AppRouter;
