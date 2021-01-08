import React from "react";
import classes from './Pagination.module.scss'
import Link from "next/link";

function PaginationPage({main, about, contacts, portfolio}) {
    return(
        <>
            {main && <section className={classes.pagination}>
               <div className={classes.block}>
                    <div className={`${classes.page} ${classes.current}`}>1</div>
                    <div className={classes.page}>/</div>
                    <div className={classes.page}>4</div>
                </div>
                <Link href={'/about'}><a className={`${classes.arrow} ${classes.right}`}>arrowRight</a></Link>
            </section>}
            {about && <section className={`${classes.about} ${classes.pagination}`}>
                <Link href={'/'}><a className={`${classes.arrow} ${classes.left}`}>arrowLeft</a></Link>
                <div className={classes.block}>
                    <div className={`${classes.page} ${classes.current}`}>2</div>
                    <div className={classes.page}>/</div>
                    <div className={classes.page}>4</div>
                </div>
                <Link href={'/portfolio'}><a className={`${classes.arrow} ${classes.right}`}>arrowRight</a></Link>
            </section>}
            {portfolio && <section className={`${classes.about} ${classes.pagination}`}>
                <Link href={'/about'}><a className={`${classes.arrow} ${classes.left}`}>arrowLeft</a></Link>
                <div className={classes.block}>
                    <div className={`${classes.page} ${classes.current}`}>3</div>
                    <div className={classes.page}>/</div>
                    <div className={classes.page}>4</div>
                </div>
                <Link href={'/contacts'}><a className={`${classes.arrow} ${classes.right}`}>arrowRight</a></Link>
            </section>}
            {contacts && <section className={classes.pagination}>
                <Link href={'/about'}><a className={`${classes.arrow} ${classes.left}`}>arrowLeft</a></Link>
                <div className={classes.block}>
                    <div className={classes.page}>3</div>
                    <div className={classes.page}>/</div>
                    <div className={`${classes.page} ${classes.current}`}>4</div>
                </div>
            </section>}

    </>
    )
}

export default PaginationPage;