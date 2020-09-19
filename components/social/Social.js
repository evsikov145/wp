import React from 'react';
import classes from './Social.module.scss'

function Social() {

    return(
        <section className={classes.social}>
            <a href="#" className={classes.social__link}>inst</a>
            <a href="#" className={classes.social__link}>vk</a>
        </section>
    )

}

export default Social;