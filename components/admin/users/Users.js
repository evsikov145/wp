import {useState} from 'react'
import classes from './Users.module.scss'
import UserNew from "./UserNew";
import UserEdit from "./UserEdit";
import UserDelete from "./UserDelete";

export default function Users(){

    const [newUserVisible, setNewUserVisible] = useState(false);
    const [editUserVisible, setEditUserVisible] = useState(false);
    const [deleteUserVisible, setDeleteUserVisible] = useState(false);


    return <>
            <section className={classes.users}>
                <div className={classes.action}>
                    <button
                        className={classes.button}
                        onClick={() => {
                            setNewUserVisible(true);
                            setEditUserVisible(false);
                            setDeleteUserVisible(false);
                        }}
                    >Добавить нового пользователя</button>
                    <button
                        className={classes.button}
                        onClick={() => {
                            setNewUserVisible(false);
                            setEditUserVisible(true);
                            setDeleteUserVisible(false);
                        }}
                    >Изменить данные пользователя</button>
                    <button
                        className={classes.button}
                        onClick={() => {
                            setNewUserVisible(false);
                            setEditUserVisible(false);
                            setDeleteUserVisible(true);
                        }}
                    >Удалить пользователя</button>
                </div>
                { newUserVisible && <UserNew/>}
                { editUserVisible && <UserEdit/>}
                { deleteUserVisible && <UserDelete/>}

            </section>
        </>
}