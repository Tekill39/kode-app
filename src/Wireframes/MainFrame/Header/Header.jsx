import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerBlock}>
                
            </div>
            <div className={classes.loginBlock}>
                <button onClick={props.logout}>Logout</button></div>
        </header>
    );
}
export default Header;