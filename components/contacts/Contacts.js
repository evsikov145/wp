import React from "react";
import classes from "./Contacts.module.scss"

const Contacts = ({contacts}) => {
    return (
        <>
            <div className={classes.title}>
                <h1>{contacts.title}</h1>
            </div>
            <div className={classes.block}>
                <h2>{contacts.secondTitle}</h2>
                <div className={classes.form}>
                    <div className={classes.item}>
                        <label htmlFor="name">Ваше имя</label>
                        <input id="name" type="text" placeholder="Мария"/>
                    </div>
                    <div className={classes.item}>
                        <label htmlFor="tel">Номер телефона</label>
                        <input id="tel" type="text" placeholder="+7 (999) 999 99 99"/>
                    </div>
                    <div className={classes.item}>
                        <label htmlFor="text">Сообщение</label>
                        <textarea id="text" placeholder="Не могу как хочу новогоднюю фотосессию! Лена, когда у Вас свободна дата?"></textarea>
                    </div>
                    <button className={classes.btn}>Отправить</button>
                </div>
            </div>
            <div className={classes.desc}>
                <div className={classes.pic}>
                    <img src="/static/images/contacts/photo.jpg" alt=""/>
                </div>
                <div className={classes.text}>
                    <h3>{contacts.name}</h3>
                    <h4>{contacts.profession}</h4>
                    <p>{contacts.address}</p>
                    <p>{contacts.phone}</p>
                    <p>{contacts.email}</p>
                </div>
            </div>
        </>
    )
}

export default Contacts