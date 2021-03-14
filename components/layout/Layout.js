import Nav from "./nav/Nav";
import Social from "./social/Social";
import PaginationPage from "./pagination/PaginationPage";
import React from "react";
import css from './Layout.module.scss'

const Layout = ({isMainPage,isAboutPage,isContactsPage,isPortfolioPage,isCategoryPage, children}) => {
    return (
        <section className={isMainPage ? `${css.layout} ${css.main}` : isPortfolioPage ? `${css.layout} ${css.portfolio}` : isAboutPage ? `${css.layout} ${css.about}` : isContactsPage ? `${css.layout} ${css.contacts}` : isCategoryPage ? `${css.layout} ${css.category}` : `${css.layout}`}>
            <Nav category={isCategoryPage}/>
            <Social dark={isAboutPage || isCategoryPage}/>
            <PaginationPage main={isMainPage} about={isAboutPage} contacts={isContactsPage} portfolio={isPortfolioPage}/>
            {children}
        </section>
    )
}

export default Layout;