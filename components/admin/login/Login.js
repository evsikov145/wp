import {useState} from 'react'
import classes from './Login.module.scss'
import Router from 'next/router'

export default function Login(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Для доступа введите логин и пароль')

    const submitData = () => {
        findUser(login)
            .then( res => {
                console.clear();
                const {password:pass} = res;

                if(pass === password){
                    document.cookie = 'wp=token125438797435345234235235657___2342'
                    Router.push('/admin');
                }else {
                    setPassword('')
                    setTitle('Неправильный пароль! Повторите ещё раз!');
                }
            })
            .catch( err => {
                console.log(err)
                setPassword('');
                setLogin('');
                setTitle('Неправильный логин или пароль! Повторите ещё раз!');
            })
    }

    const findUser = async(user) => {
        const res = await fetch(`http://localhost:3000/api/user/read`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        return res.json();
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
                        type="password"
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