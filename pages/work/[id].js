import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const CurrentWork = ({work: serverWork}) => {

    /*const [work, setWork] = useState(serverWork);
    const router = useRouter();
    useEffect(() => {

        async function load(){
            const res = await fetch(`${process.env.API_URL}/work/${router.query.id}`);
            const data = await res.json()
            setWork(data)
        }
        if(!serverWork){
            load();
        }

    },[])

    if(!work){
        return <p>Loading....</p>
    }*/

    return (
        <>
           {/* {work && <section className='work'>
                <h1>{work.title}</h1>
                <p>{work.body}</p>
                <Link href={'/work'}>Вернуться к портфолио</Link>
            </section>}*/}
        </>
    )
}

export default CurrentWork;

/*
export async function getServerSideProps({query}){
    const res = await fetch(`${process.env.API_URL}/work/${query.id}`)
    const work = await res.json()
    return {props: {work} }
}*/
