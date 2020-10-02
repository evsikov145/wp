import Head from 'next/head'
import AdminNav from "./admin/nav/AdminNav";
import Logout from "./logout/Logout";

export function AdminLayout({children, title='Home'}){

    return (
        <>
            <Head>
                <title> {title} | Admin </title>
            </Head>
            <main className="admin">
                <Logout/>
                <AdminNav/>
                {children}
            </main>
        </>
    )
}