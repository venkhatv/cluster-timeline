import React from 'react';
import { Layout } from 'antd';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppStore from './redux/appStore';
import styles from './bundles/timeline/app.css';
import Timeline from './bundles/timeline';
import AppHeader from './bundles/header';
import Contact from './components/contactus';
import Notfound from './components/notfound';

const { Header, Content } = Layout;

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
      <Layout className={styles.main}>
        <Header className={styles.header}>
          <AppHeader />
        </Header>
        <Layout className={styles.layoutContent}>
          <Content className={styles.content}>
            <Switch>
              {routes.map(route => <Route key={route.id} {...route} />)}
            </Switch>
          </Content>
        </Layout>
      </Layout>


    </BrowserRouter>
  </Provider>

);


export default App;
