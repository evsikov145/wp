import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Error from "../../components/error/Error";
import {useState, useEffect} from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

const Work = ({works:serverWork}) => {

   /* const [works, setWork] = useState(serverWork);

    useEffect(() => {

        async function load(){
            const res = await fetch(`${process.env.API_URL}/work`);
            const data = await res.json()
            setWork(data)
        }
        if(!serverWork){
            load();
        }

    },[])

    if(!works){
        return <p>Loading....</p>
    }*/

    return (
        <>
            <Error statusCode={404}/>
            {/*<Head>
                <title>Портфолио | Portfolio</title>
            </Head>
            <Layout>
                <h1>Портфолио</h1>
                <ul>
                    {works && works.map((item, i) =>
                        <li key={i}>
                            <Link href={`/work/[id]`} as={`/work/${item.id}`}>{item.title}</Link>
                        </li>
                    )}
                </ul>
            </Layout>*/}

        </>
    )
}

export default Work;

/*
export async function getServerSideProps(){
    const res = await fetch(`${process.env.API_URL}/work`)
    const works = await res.json()
    return {props: {works} }
}*/
