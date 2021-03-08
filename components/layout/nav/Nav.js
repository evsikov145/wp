import React from 'react';
import classes from './Nav.module.scss'
import LinkCustom from "./LinkCustom";

function Nav({category}) {
    return (
        <nav className={classes.nav}>
            <LinkCustom href={'/'} ><a className={`${classes.anim1} ${classes.link}`}>Главная</a></LinkCustom>
            <LinkCustom href={'/about'}><a  className={`${classes.anim2} ${classes.link}`}>Обо мне</a></LinkCustom>
            <LinkCustom href={'/portfolio'} active={category}><a  className={`${classes.anim3} ${classes.link}`}>Портфолио</a></LinkCustom>
            <LinkCustom href={'/contacts'}><a  className={`${classes.anim4} ${classes.link}`}>Контакты</a></LinkCustom>
        </nav>
    );
}

export default Nav;