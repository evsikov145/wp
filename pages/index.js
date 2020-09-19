import {useState} from 'react'
import Head from 'next/head'
import Nav from "../components/nav/Nav";
import Social from "../components/social/Social";
import PaginationPage from "../components/pagination/PaginationPage";

export default function Index({data}) {

    const [mainText] = useState({
        h3: 'Свадебный фотограф',
        h2 : 'Елена',
        h1 : 'Рубцова',
        desc: 'Фотографии сделанные с душой'
    })

    return (
        <>
            <Head>
                <title> Главная | Wedding Photo</title>
                <meta name="description" content="Свадебный фотограф"/>
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="Свадьба, Свадебный, фотограф, свадебный фотограф, тула" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <section className="main">
                <Nav/>
               <Social/>
                <PaginationPage/>
                <div className="main-title">
                    <h3>{mainText.h3}</h3>
                    <h2>{mainText.h2}</h2>
                    <h1>{mainText.h1}</h1>
                    <p className="main-title__desc">{mainText.desc}</p>
                </div>
                <div className="main__line">line</div>
                <div className="main__photo">photo</div>
                <div className="main__circle">circle</div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/main`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }
}