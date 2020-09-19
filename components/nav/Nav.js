import React from 'react';
import classes from './Nav.module.scss'

function Nav() {
    return (
        <nav className={classes.nav}>
            <a href="#" className={`${classes.anim1} ${classes.nav__link} ${classes.nav__linkActive}`}>Главная</a>
            <a href="#" className={`${classes.anim2} ${classes.nav__link}`}>Обо мне</a>
            <a href="#" className={`${classes.anim3} ${classes.nav__link}`}>Портфолио</a>
            <a href="#" className={`${classes.anim4} ${classes.nav__link}`}>Контакты</a>
        </nav>
    );
}

export default Nav;