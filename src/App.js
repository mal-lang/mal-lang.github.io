import React from 'react';
import Layout from './components/layout';
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
          <Route path="/">
            <Layout />
          </Route>
        </Switch>
    </Router>
  );
}
