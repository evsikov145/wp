import React from 'react';
import classes from './Nav.module.scss'
import Link from 'next/link'

function Nav() {
    return (
        <nav className={classes.nav}>
            <Link href={'/'}><a className={`${classes.anim1} ${classes.nav__link} ${classes.nav__linkActive}`}>Главная</a></Link>
            <Link href={'/about'}><a className={`${classes.anim2} ${classes.nav__link}`}>Обо мне</a></Link>
            <Link href={'/work'}><a className={`${classes.anim3} ${classes.nav__link}`}>Портфолио</a></Link>
            <Link href={'/contacts'}><a className={`${classes.anim4} ${classes.nav__link}`}>Контакты</a></Link>
        </nav>
    );
}

export default Nav;