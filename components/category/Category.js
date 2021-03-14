import React from "react";
import classes from './Category.module.scss'
import Link from "next/link";

const Category = () => {

    const data = [
        {id: 1, title: 'Евгения & Евгений', img: '/static/images/category/wedding/1.jpg'},
        {id: 2, title: 'Анастасия & Олег', img: '/static/images/category/wedding/2.jpg'},
        {id: 3, title: 'Анастасия & Алексей', img: '/static/images/category/wedding/3.jpg'},
        {id: 4, title: 'Алёна & Дмитрий', img: '/static/images/category/wedding/4.jpg'},
    ]

    return (
        <>
            <div className={classes.title}>
                <h1>Свадебная фотосессия</h1>
                <Link href={'/portfolio'}><a className={classes.back}>Вернуться назад</a></Link>
            </div>
            <div className={classes.block}>
                {data.map(item => (
                    <Link href={`/portfolio/work/${item.id}`} key={item.id}>
                        <a className={classes.item}>
                            <h2>{item.title}</h2>
                            <img src={item.img} alt=""/>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Category