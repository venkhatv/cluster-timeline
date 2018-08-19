import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './redux/appStore';

import Timeline from './bundles/timeline';
import Contact from './components/contactus';
import Notfound from './components/notfound';

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: Timeline,
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
  <Provider store={AppStore}>
    <BrowserRouter>
      <Switch>
        {routes.map(route => <Route key={route.id} {...route} />)}
      </Switch>
    </BrowserRouter>
  </Provider>

);


export default App;
