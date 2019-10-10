import React from 'react';
import Layout from './components/layout';
import NotFound from './views/404';
import ScrollHandler from './components/scrollhandler';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <ScrollHandler />
        <Switch>
          <Route path="/" component={Layout} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}
