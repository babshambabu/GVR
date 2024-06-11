import React from 'react';
import styles from './navbar.module.css';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Navbar({ OpenSidebar }) {
  return (
    <header className={styles.header}>
        <div className={styles.menuIcon}>
            <BsJustify className={styles.icon} onClick={OpenSidebar}/>
        </div>
        <div className={styles.headerLeft}>
            <BsSearch className={styles.icon}/>
        </div>
        <div className={styles.headerRight}>
            <BsFillBellFill className={styles.icon}/>
            <BsFillEnvelopeFill className={styles.icon}/>
            <BsPersonCircle className={styles.icon}/>
        </div>
    </header>
  );
}

export default Navbar;
