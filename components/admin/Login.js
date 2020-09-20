import {useState} from 'react'
import classes from './Login.module.scss'
import Router from 'next/router'

export default function Login(){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Для доступа введите логин и пароль')

    const submitData = () => {
        if(login !== "admin" || password !== "admin"){
            setLogin('');
            setPassword('');
            setTitle('Введите корректный логин и пароль!')
            return false;
        }
        Router.push('/admin');
    }

    return (
        <section className={classes.login}>
            <div className={classes.loginBody}>
                <h1 className={classes.loginTitle}>{title}</h1>
                <label className={classes.loginLabel}>
                    Логин
                    <input
                        className={classes.loginInput}
                        type="text"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                    />
                </label>
                <label className={classes.loginLabel}>
                    Пароль
                    <input
                        className={classes.loginInput}
                        type="text"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button
                    className={classes.loginBtn}
                    onClick={() => submitData()}
                >Войти</button>
            </div>
        </section>
    )
}