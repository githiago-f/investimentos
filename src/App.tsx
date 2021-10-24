import React from 'react';
import 'assets/css/index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Login} from 'page/Login';
import { Register } from 'page/Register';
import { AuthenticationContext } from 'context/AuthenticationContext';

function AppRouter() {
  return (
    <AuthenticationContext.Provider value={{}}>
      <Router basename="/investimentos">
        <Route path="/" exact>
          <Login onAuthenticate={} />
        </Route>
        <Route path="/register" component={Register} />
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default AppRouter;
