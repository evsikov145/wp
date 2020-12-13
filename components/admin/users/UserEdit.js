import classes from "./Users.module.scss";
import React, {useState} from 'react'

export default function UserEdit(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [oldLogin, setOldLogin] = useState('')

    const updateUser = () => {
        fetch(`http://localhost:3000/api/user/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({oldLogin: oldLogin, login: login, password: password})
        }).then();
    }

    return <>
        <div className={classes.edit}>
            <label className={classes.label}>Текущий логин
                <input
                    className={classes.input}
                    type="text"
                    onChange={(event)=> {
                        setOldLogin(event.target.value)
                    }}
                />
            </label>
            <label className={classes.label}>Новый логин
                <input
                    className={classes.input}
                    type="text"
                    onChange={(event)=> {
                        setLogin(event.target.value)
                    }}
                />
            </label>
            <label className={classes.label}>Новый пароль
                <input
                    className={classes.input}
                    type="text"
                    onChange={(event)=> {
                        setPassword(event.target.value)
                    }}
                />
            </label>
        </div>
        <button
            className={classes.button}
            onClick={()=> {
                updateUser()
            }}
        >Обновить данные</button>
    </>
}