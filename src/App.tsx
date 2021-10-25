import React from 'react';
import 'assets/css/index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Login} from 'page/Login';
import { Register } from 'page/Register';
import { AuthenticationContext, useAuthenticationHooks } from 'context/AuthenticationContext';

function AppRouter() {
  const authState = useAuthenticationHooks();

  return (
    <AuthenticationContext.Provider value={authState}>
      <Router basename="/investimentos">
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register" component={Register} />
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default AppRouter;
