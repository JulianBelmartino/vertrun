import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.bar}>
    <Link className={styles.link} to={`/`}>ACTIVITIES</Link>
    <Link  className={styles.link} to={`/monthStats`}>MONTHLY STATS</Link>
      </div>
    );
};

export default Navbar;