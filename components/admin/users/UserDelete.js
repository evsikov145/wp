import classes from "./Users.module.scss";
import {useState} from 'react'

export default function UserDelete(){

    const [login, setLogin] = useState('')

    const deleteUser = () => {
        fetch(`http://localhost:3000/api/user/delete`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: login})
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
        </div>
        <button
            className={classes.button}
            onClick={()=> {
                deleteUser()
            }}
        >Удалить</button>
    </>
}