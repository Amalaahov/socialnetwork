import React from 'react';

import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/800px-Logo_TV_2015.svg.png' />
            <div className={classes.loginBlock}>   {props.isAuth ? props.login : <NavLink to='login'>LOGIN</NavLink>} </div>


      </header>
    )
}

export default Header;