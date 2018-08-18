import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contactus';
import Notfound from './components/notfound';

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: 2,
    path: '/contact',
    component: Contact,
  },
  {
    id: 3,
    component: Notfound,
  },
];

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => <Route key={route.id} {...route} />)}
    </Switch>
  </BrowserRouter>
);

export default App;
