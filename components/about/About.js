import React from "react";
import classes from './About.module.scss'

const About = () => {
    return (
        <>
            <section className={classes.about}>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <h1>Познакомимся?</h1>
                    </div>
                    <div className={classes.desc}>
                        <h2>Что для меня значит быть вашим свадебным фотографом?</h2>
                        <p>Быть вашим другом, помощником и даже немного наставником, ведь фотограф - это ключевой человек,
                            который сохранит важные моменты в вашей жизни на долгую, долгую память). Для меня свадьба - это больше, чем просто съемка.
                            Это прекрасный повод побывать в центре такого события, ощутить все эмоции, которые вы испытываете единожды в своей жизни.</p>
                    </div>
                    <div className={classes.specialization}>
                        <h2>Моя специализация</h2>
                        <div className={classes.block}>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img className={classes.images} src="/static/images/svg/wedding-1.svg" alt=""/>
                                    <img className={classes.first} src="/static/images/svg/wedding-2.svg" alt=""/>
                                </div>
                                <h3>Свадебная съемка</h3>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img className={classes.images} src="/static/images/svg/story-1.svg" alt=""/>
                                    <img className={classes.second} src="/static/images/svg/story-2.svg" alt=""/>
                                </div>
                                <h3>Love Story</h3>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.img}>
                                    <img className={classes.images} src="/static/images/svg/portrait-1.svg" alt=""/>
                                    <img className={classes.third} src="/static/images/svg/portrait-2.svg" alt=""/>
                                </div>
                                <h3>Портретная съемка</h3>
                            </div>
                        </div>
                        <button className={classes.btn}>Обсудим Вашу фотосессию?</button>
                    </div>

                </div>
                <div className={classes.pic}>
                    <img src="/static/images/about/about-bg.jpg" alt=""/>
                </div>


            </section>
        </>
    )
}

export default About;