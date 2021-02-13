import React from 'react';
import state from "../../redux/state";
import classes from './Header2.module.css';
import {NavLink} from "react-router-dom";

const Header2 = () => {
    return(
        <header className={classes.header}>

            <div className={classes.hello}><b><h3>Привет {state._state.ProfileInfo[0].Firstname}!</h3></b></div>
<div>
    <h4>
              <NavLink className={classes.item} activeClassName={classes.activeLink} to='/Photos'>Мои фото </NavLink>
                   <NavLink className={classes.item} activeClassName={classes.activeLink} to='/Friends'>Мои друзья </NavLink>
    <NavLink className={classes.item} activeClassName={classes.activeLink} to='/findusers'>Найти друзей </NavLink>
    </h4>
</div>


      </header>
    )
}

export default Header2;