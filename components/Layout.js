import Nav from "./nav/Nav";
import Social from "./social/Social";
import PaginationPage from "./pagination/PaginationPage";
import React from "react";

const Layout = ({isMainPage,isAboutPage,isContactsPage, children}) => {
    return (
        <section className={isMainPage ? 'layout main' : isContactsPage ? "layout contacts" : 'layout'}>
            <Nav/>
            <Social dark={isAboutPage}/>
            <PaginationPage main={isMainPage} about={isAboutPage} contacts={isContactsPage}/>
            {children}
        </section>
    )
}

export default Layout;