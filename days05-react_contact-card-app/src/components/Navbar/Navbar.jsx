import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css'

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>

                {/* LOGO */}
                <NavLink to="/" className={styles.logo} onClick={closeMobileMenu}>
                    Andrian<span>Dev</span>
                </NavLink>

                {/* HAMBURGER ICON (Mobile) */}
                <div className={styles.hamburger} onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>

                {/* MENU LINKS */}
                <ul className={click ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/Latihan1"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                            onClick={closeMobileMenu}
                        >
                            Latihan1
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/latihan2"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                            onClick={closeMobileMenu}
                        >
                            Latihan2
                        </NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink
                            to="/latihan3"
                            className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                            onClick={closeMobileMenu}
                        >
                            Latihan3
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar