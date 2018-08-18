import React from 'react';
import { Link } from 'react-router-dom';
import contactStyles from './contact.css';

const Contactus = () => (
  <div id={contactStyles.header}>
    <div id={contactStyles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/contact">About</Link>
    </div>
    Nutanix India
  </div>
);

export default Contactus;
