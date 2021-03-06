import Head from 'next/head'
import Layout from "../components/Layout";
import Main from "../components/main/Main";
import React from "react";
import {useSelector} from "react-redux";

const Index = () => {

    const {main} = useSelector(state => state)

    return (
        <>
            <Head>
                <title> Свадебный фотограф | Wedding Photo</title>
                <meta name="description" content="Свадебный фотограф"/>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="keywords" content="Свадьба, Свадебный, фотограф, свадебный фотограф, тула" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <Layout isMainPage={true}>
                {main && <Main main={main}/>}
            </Layout>

        </>
    )
}

export default Index;


