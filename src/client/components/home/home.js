import React from 'react';
import { Link } from 'react-router-dom';
import homeStyles from './home.css';

console.log(homeStyles);

const Home = () => (
  <div id={homeStyles.header}>
    <div id={homeStyles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/contact">About</Link>
    </div>
    Welcome to Nutanix!
  </div>
);

export default Home;
