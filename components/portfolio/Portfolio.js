import React from 'react'
import classes from './Portfolio.module.scss'
import Link from "next/link";

const Portfolio = () => {
    return(
        <section className={classes.section}>
            <div className={classes.content}>
                <div className={`${classes.title} title`}>
                    <h1>Мои работы</h1>
                </div>
                <div className={classes.desc}>
                    <h2>Что для меня значит быть вашим свадебным фотографом?</h2>
                    <p>Быть вашим другом, помощником и даже немного наставником, ведь фотограф - это ключевой человек,
                        который сохранит важные моменты в вашей жизни на долгую, долгую память).
                        Для меня свадьба - это больше, чем просто съемка.
                        Это прекрасный повод побывать в центре такого события, ощутить все эмоции, которые вы испытываете единожды в своей жизни.</p>
                </div>
                <div className={classes.slider}>
                    <Link href={'/portfolio/1'}>
                        <a className={classes.item}>
                            <h3>Свадебная фотосессия</h3>
                            <img src="/static/images/portfolio/wedding.jpg" alt=""/>
                        </a>
                    </Link>

                    <div className={classes.item}>
                        <h3>Портретная фотосъемка</h3>
                        <img src="/static/images/portfolio/portrait.jpg" alt=""/>
                    </div>
                    <div className={classes.item}>
                        <h3>Love Story</h3>
                        <img src="/static/images/portfolio/love.jpg" alt=""/>
                    </div>
                    <div className={classes.item}>
                        <h3>Экспресс-фотосессия</h3>
                        <img src="/static/images/portfolio/express.jpg" alt=""/>
                    </div>
                    <div className={classes.item}>
                        <h3>Новогодняя фотосессия</h3>
                        <img src="/static/images/portfolio/new-year.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className={classes.pic}>
                <img src="/static/images/portfolio/wedding-big.jpg" alt=""/>
            </div>
        </section>
    )
}

export default Portfolio