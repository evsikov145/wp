import classes from './AdminHome.module.scss'

export default function AdminHome() {
    return (
        <section className={classes.adminHome}>
            <h1 className={classes.adminTitle1}>Добро пожаловать!</h1>
            <h2 className={classes.adminTitle2}>Здесь Вы можете поменять контент на страницах, а также добавить новый!</h2>
            <h3 className={classes.adminTitle3}>Приятной работы!</h3>
        </section>
    )
}