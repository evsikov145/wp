import classes from "./Work.module.scss";
import Link from "next/link";
import React from "react";

const Work = () => {

    return (
        <section className={classes.section}>
            <div className={classes.title}>
                <h1>Свадебная фотосессия</h1>
                <Link href={'/portfolio'}><a className={classes.back}>Вернуться назад</a></Link>
            </div>
            <div className={classes.gallery}>
                <div className={`${classes.item} ${classes.item1} ${classes.cover}`}>
                    <div className={classes.desc}>
                        <h2>Анастасия & Олег</h2>
                        <h3>21/09/2019</h3>
                    </div>
                    <img src="/static/images/works/wedding/1/promo.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item2}`}>
                    <img src="/static/images/works/wedding/1/1.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item3}`}>
                    <img src="/static/images/works/wedding/1/2.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item4}`}>
                    <img src="/static/images/works/wedding/1/3.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item5}`}>
                    <img src="/static/images/works/wedding/1/4.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item6}`}>
                    <img src="/static/images/works/wedding/1/4.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item7}`}>
                    <img src="/static/images/works/wedding/1/3.jpg" alt=""/>
                </div>
                <div className={`${classes.item} ${classes.item8}`}>
                    <img src="/static/images/works/wedding/1/3.jpg" alt=""/>
                </div>

                <div className={`${classes.item} ${classes.item9}`}>
                    <img src="/static/images/works/wedding/1/promo.jpg" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Work