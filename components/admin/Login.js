export React from 'react'
import classes from 'Login.module.scss'

export default function Login(){
    return (
        <section className="login">
            <div className="login-body">
                <h1>Для доступа введите логин и пароль</h1>
                <label>
                    Логин
                    <input type="text"/>
                </label>
                <label>
                    Пароль
                    <input type="text"/>
                </label>
            </div>
        </section>
    )
}