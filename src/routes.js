import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Home from './views/home';
import About from './views/about';
import References from './views/references';
import Notfound from './views/notfound';

const pages = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: false,
  },
  {
    name: 'References',
    path: '/references',
    component: References,
    exact: false,
  }
]

export default () => (
  <Router>
    <Navbar pages={pages} />
    <div className="contentWrapper mainContent">
    <Switch>
      {pages.map(page =>
        <Route exact={page.exact} path={page.path} component={page.component} />
      )}
      <Route component={Notfound} />
    </Switch>
    </div>
  </Router>
);


