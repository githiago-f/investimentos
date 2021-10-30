import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { AuthenticationContext, useAuthenticationHooks } from 'context/AuthenticationContext';

import 'assets/css/index.css';

import Login from 'page/Login';
import Register from 'page/Register';
import Dashboard from 'page/Dashboard';
import { ReservedRightsIcons } from 'components/ReservedRightsIcons';

function AppRouter() {
  const {redirect,user} = useAuthenticationHooks();

  return (
    <Router basename="/investimentos">
      <AuthenticationContext.Provider value={{user}}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {redirect && <Redirect to={'/login'}/>}
      </AuthenticationContext.Provider>
      <ReservedRightsIcons/>
    </Router>
  );
}

export default AppRouter;
