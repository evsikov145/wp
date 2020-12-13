import Nav from "./nav/Nav";
import Social from "./social/Social";
import PaginationPage from "./pagination/PaginationPage";

const Layout = ({isMainPage, children}) => {
    return (
        <section className={isMainPage ? 'layout main' : 'layout'}>
            <Nav/>
            <Social/>
            <PaginationPage/>
            {children}
        </section>
    )
}

 export default Layout;