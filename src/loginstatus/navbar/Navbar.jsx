import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router'; 
import { UserContext } from '../context/Context'; 

function Navbar() {
    const { email } = useContext(UserContext);

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.left}> <Link to="/">LOGO</Link></div>
                <div className={styles.pages}>
                    <Link to="/login">Login</Link>
                </div>
                <div className={styles.right}>
                    <FaUser />
                    <p>{email}</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
