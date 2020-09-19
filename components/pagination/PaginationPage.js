import React from "react";
import classes from './Pagination.module.scss'

function PaginationPage() {
    return(
        <section className={classes.pagination}>
            <div className={[classes["arrow"], classes["arrowLeft"]].join(" ")}>arrowLeft</div>
            <div className={classes.paginationBlock}>
                <div className={[classes["page"], classes["pageCurrent"]].join(" ")}>1</div>
                <div className={classes.page}>/</div>
                <div className={classes.page}>4</div>
            </div>
            <div className={[classes["arrow"], classes["arrowRight"]].join(" ")}>arrowRight</div>
        </section>
    )
}

export default PaginationPage;