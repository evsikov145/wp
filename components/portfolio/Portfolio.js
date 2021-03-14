import React, {useState} from 'react'
import classes from './Portfolio.module.scss'
import Link from "next/link";

const Portfolio = () => {

    const category = [
        {id:1, img: '/static/images/portfolio/wedding.jpg', title: 'Свадебная фотосессия', hover: '/static/images/portfolio/wedding-big.jpg'}
    ]

    return (
        <>
            <div className={classes.title}>
                <h1>Мои работы</h1>
            </div>

            <div className={classes.desc}>
                <h2>Что для меня значит быть вашим свадебным фотографом?</h2>
                <p>Быть вашим другом, помощником и даже немного наставником, ведь фотограф - это ключевой человек,
                    который сохранит важные моменты в вашей жизни на долгую, долгую память).
                    Для меня свадьба - это больше, чем просто съемка.
                    Это прекрасный повод побывать в центре такого события, ощутить все эмоции, которые вы испытываете
                    единожды в своей жизни.</p>
            </div>
            <div className={classes.list}>
                {category.map(item => (
                    <Link href={`/portfolio/${item.id}`} key={item.id}>
                        <a className={classes.item}>
                            <h3>{item.title}</h3>
                            <img src={item.img} alt=""/>
                        </a>
                    </Link>
                ))}
            </div>



            <div className={classes.pic}>
                <img src="/static/images/portfolio/wedding-big.jpg" alt=""/>
            </div>
        </>


    )
}

export default Portfolio