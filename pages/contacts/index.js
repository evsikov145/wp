import React from "react";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import ContactsComponent from '../../components/contacts/Contacts'
import {useSelector} from "react-redux";

const Contacts = () => {

    const {contacts} = useSelector(state => state)

    return (
        <>
            <Head>
                <title>Контакты | Contacts</title>
            </Head>
            <Layout isContactsPage={true}>
                { contacts && <ContactsComponent contacts={contacts}/>}
            </Layout>
        </>
    )
}

export default Contacts;