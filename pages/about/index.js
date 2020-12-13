import Head from "next/head";
import Layout from "../../components/Layout";
import Error from "../../components/error/Error";

const About = () => {
    return (
        <>
            <Error statusCode={404}/>
            {/*<Head>
                <title>Обо мне | About</title>
            </Head>
            <Layout>
                <h1>Обо мне</h1>
            </Layout>*/}
        </>
    )
}

export default About;