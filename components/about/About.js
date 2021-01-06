import React, {useState, useEffect} from "react";
import classes from './About.module.scss'
import {useDispatch, useSelector} from "react-redux";

const About = () => {

   const {about} = useSelector(state => state);
   const dispatch = useDispatch;

   const updateTitle = () => {
       const newTitle = 'Обновлён!'
       dispatch({
           type: 'UPDATE_ABOUT_TITLE',
           payload: newTitle
       });
    }

    return (
        <>
            {about && <section className={classes.about}>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <h1>{about.title}</h1>
                    </div>
                    <div className={classes.desc}>
                        <h2>{about.secondTitle}</h2>
                        <p>{about.desc}</p>
                    </div>
                    <div className={classes.specialization}>
                        <h2>{about.thirdTitle}</h2>
                        <div className={classes.block}>
                            {about.items.map((item, i) => (
                                <div className={classes.item} key={item.id}>
                                    <div className={classes.img}>
                                        <img className={classes.images} src={item.img1} alt=""/>
                                        <img className={i===0 ? `${classes.first}`: i===1 ? `${classes.second}` : `${classes.third}`} src={item.img2} alt=""/>
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                        <button className={classes.btn} onClick={() => updateTitle()}>{about.btnText}</button>
                    </div>

                </div>
                <div className={classes.pic}>
                    <img src={about.pic} alt=""/>
                </div>


            </section>}
        </>
    )
}

export default About;