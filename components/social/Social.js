import React from 'react';
import classes from './Social.module.scss'

function Social({dark}) {

    return(
        <section className={dark ? `${classes.dark} ${classes.social}` : `${classes.social}`}>
            <a href="#" className={classes.link}>inst</a>
            <a href="#" className={classes.link}>vk</a>
        </section>
    )

}

export default Social;