import Nav from "./nav/Nav";
import Social from "./social/Social";
import PaginationPage from "./pagination/PaginationPage";
import React from "react";

const Layout = ({isMainPage,isAboutPage, children}) => {
    return (
        <section className={isMainPage ? 'layout main' : 'layout'}>
            <Nav/>
            <Social dark={isAboutPage}/>
            <PaginationPage main={isMainPage} about={isAboutPage}/>
            {children}
        </section>
    )
}

export default Layout;