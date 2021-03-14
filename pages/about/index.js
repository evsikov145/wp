import Layout from "../../components/layout/Layout";
import React from "react";
import AboutComponent from '../../components/about/About'
import Head from "next/head";

const About = () => {

    const info = {
        title: 'Познакомимся?',
        secondTitle: 'Привет!',
        thirdTitle: 'Моя специализация',
        desc: "Меня зовут Лена Рубцова. Более 5 лет я увлекаюсь фотографией.\n" +
            "И уже давно увлечение переросло в профессию и смысл жизни. Я поняла, что мечтаю быть профессиональным свадебным фотографом, поэтому начала развиваться именно в этом направлении.",
        items: [
            {id:1, title: 'Свадебная съёмка', img1: '/static/images/svg/wedding-1.svg', img2: '/static/images/svg/wedding-2.svg'},
            {id:2, title: 'Love Story', img1: '/static/images/svg/story-1.svg', img2: '/static/images/svg/story-2.svg'},
            {id:3, title: 'Портретная съёмка', img1: '/static/images/svg/portrait-1.svg', img2: '/static/images/svg/portrait-2.svg'},
        ],
        btnText: 'Обсудим Вашу фотосессию?',
        pic: '/static/images/about/about-bg.jpg'
    }

    return (
        <>
            <Head>
                <title>Обо мне | About</title>
            </Head>
            <Layout isAboutPage={true}>
                <AboutComponent info={info}/>
            </Layout>
        </>
    )
}

export default About;