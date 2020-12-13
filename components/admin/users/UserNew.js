import classes from "./Users.module.scss";
import {useState} from 'react'

export default function UserNew(){

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const createNewUser = () => {
        fetch('http://localhost:3000/api/user/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        }).then();
    }

    return <>
        <div className={classes.new}>
            <label className={classes.label}>Логин
                <input
                    className={classes.input}
                    type="text"
                    onChange={(event)=> {
                        setLogin(event.target.value)
                    }}
                />
            </label>
            <label className={classes.label}>Пароль
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
                createNewUser()
            }}
        >Создать</button>
        </>
}