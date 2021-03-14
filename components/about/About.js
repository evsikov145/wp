import React from "react";
import classes from './About.module.scss'

const About = ({info}) => {

    return (
        <>

            <div className={classes.title}>
                <h1>{info.title}</h1>
            </div>

            <div className={classes.content}>
                <div className={classes.desc}>
                    <h2>{info.secondTitle}</h2>
                    <p>{info.desc}</p>
                </div>

                <div className={classes.specialization}>
                    <h2>{info.thirdTitle}</h2>
                    <div className={classes.block}>
                        {info.items.map((item, i) => (
                            <div className={classes.item} key={item.id}>
                                <div className={classes.img}>
                                    <img className={classes.images} src={item.img1} alt=""/>
                                    <img
                                        className={i === 0 ? `${classes.first}` : i === 1 ? `${classes.second}` : `${classes.third}`}
                                        src={item.img2} alt=""/>
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <button className={classes.btn}>{info.btnText}</button>
                </div>
            </div>

            <div className={classes.pic}>
                <img src={info.pic} alt=""/>
            </div>
        </>
    )
}

export default About;