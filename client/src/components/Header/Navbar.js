import React from 'react';
import { useSelector  } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {

    const userInfo = useSelector( state => state.user);

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("tokenUser", "");
        navigate("/login");
    }

    return (
        <nav className={styles.nav_app}>
            <h3>PlayList App</h3>
            <div className={styles.item_menu}>
                <Link to="/">
                    Songs
                </Link>
                <Link to="/playlist">
                    PlayList
                </Link>
            </div>
            <div>
                <span>Hi!, { userInfo.userInfo.name }</span>
                <button onClick={ () => logOut() }>
                    <span>Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;