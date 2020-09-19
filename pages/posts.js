
import {MainLayout} from "../components/MainLayout";


export default function Posts({ posts }){

    return (
        <MainLayout title={'Posts page'}>
        <h1>Posts Page!</h1>
            <ul>
                {  posts.map(post => (
                    <li key={post.id}>
                        <a href={`/post/${post.id}`}>{post.title}</a>
                    </li>
                ))}
            </ul>

        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();
    return {posts}
}
