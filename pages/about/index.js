import Router from 'next/router'
import {MainLayout} from "../../components/MainLayout";

export default function About(){

    const linkClickHandler = () => {
        Router.push('/posts');
    }

    return (
    <MainLayout title={'About Page'}>
        <h1>About Page</h1>
        <button onClick={linkClickHandler}>Go to posts</button>
        <button onClick={() => Router.push('/')}>Go back to home</button>
    </MainLayout>
    )
}