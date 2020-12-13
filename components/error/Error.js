import Link from "next/link";
import classes from './Error.module.scss'

const Error = ({statusCode}) => {
    return (
        <section className={classes.error}>
            <h1>{statusCode}</h1>
            <h2>Ая-яй у Вас ошибка</h2>
            <Link href={'/'}>Вернуться на главную!</Link>
        </section>
    )
}

export default Error;