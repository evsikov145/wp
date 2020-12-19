import Layout from "../../components/Layout";
import React from "react";
import AboutComponent from '../../components/about/About'
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Обо мне | About</title>
            </Head>
            <Layout isAboutPage={true}>
                <AboutComponent/>
            </Layout>
        </>
    )
}

export default About;