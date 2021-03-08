import React from "react";
import classes from './Category.module.scss'
import Link from "next/link";

const Category = () => {
    return (
       <section className={classes.section}>
           <div className={classes.title}>
               <h1>Свадебная фотосессия</h1>
               <Link href={'/portfolio'}><a className={classes.back}>Вернуться назад</a></Link>
           </div>
           <div className={classes.block}>
               <Link href={'/portfolio/work/1'}>
                   <a className={classes.item}>
                       <h2>Евгения & Евгений</h2>
                       <img src="/static/images/category/wedding/1.jpg" alt=""/>
                   </a>
               </Link>
               <Link href={'/portfolio/work/1'}>
                   <a className={classes.item}>
                       <h2>Анастасия & Олег</h2>
                       <img src="/static/images/category/wedding/2.jpg" alt=""/>
                   </a>
               </Link>
               <Link href={'/portfolio/work/1'}>
                   <a className={classes.item}>
                       <h2>Анастасия & Алексей</h2>
                       <img src="/static/images/category/wedding/3.jpg" alt=""/>
                   </a>
               </Link>
               <Link href={'/portfolio/work/1'}>
                   <a className={classes.item}>
                       <h2>Алёна & Дмитрий</h2>
                       <img src="/static/images/category/wedding/4.jpg" alt=""/>
                   </a>
               </Link>
           </div>
       </section>
    )
}

export default Category