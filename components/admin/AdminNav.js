import classes from './AdminNav.module.scss'

export default function AdminNav() {
    return (
        <>
            <section className={classes.adminNav}>
                <div className={classes.logo}>
                    <img src="" alt=""/>
                </div>
                <nav className={classes.nav}>
                    <a className={`${classes.nav__link} ${classes.nav__linkActive}`} href="/">Home</a>
                    <a className={classes.nav__link} href="">Main Page</a>
                </nav>
            </section>
        </>
    )
}