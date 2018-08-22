import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './_header.css';

/**
 * HEADER BUNDLE - Bundle used to create the Header of the application
 * @returns {JSX}
 *  <input type="text"
 * className={headerStyles['header-searchbox']} placeholder="Search Anything" autoComplete="off" />
 */
const Header = props => (
  <header id={styles.header}>
    <div className={styles.logo} />
    {/* <h1 className={styles.logo}> UNIVERSAL TIMELINE</h1> */}
  </header >
);

Header.propTypes = {
  // isNutanixUser: PropTypes.bool,
};

export default Header;
{ /* <div className={headerStyles.title}>
      <div id={headerStyles.appLogo}>
      <Link to="/">
      <div className={headerStyles.logo}>

      </div>
      </Link>
      </div>
    </div> */ }
