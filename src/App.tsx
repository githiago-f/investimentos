import React from 'react';
import 'assets/css/index.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Home} from 'page/Home';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default AppRouter;
