import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/800px-Logo_TV_2015.svg.png' />
      

         <NavLink className={classes.item} activeClassName={classes.activeLink} to='/content'>Главная</NavLink> <NavLink className={classes.item} activeClassName={classes.activeLink} to='/dialogs'>Диалоги</NavLink> <NavLink className={classes.item} activeClassName={classes.activeLink} to='/news'>Новости</NavLink> <NavLink className={classes.item} activeClassName={classes.activeLink} to='/music'>Аудиозаписи</NavLink> <NavLink className={classes.item} activeClassName={classes.activeLink} to='/settings'>Настройки</NavLink>
      </header>
    )
}

export default Header;