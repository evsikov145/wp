import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({children, title='Next App'}){
    return (
        <>
            <Head>
                <title> {title} | Next Course</title>
                <meta name="description" content="Описание страницы"/>
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="ключ 1, ключ 2, ключ 3…" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <nav>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
                <Link href={'/about'}>
                    <a>About</a>
                </Link>
                <Link href={'/posts'}>
                    <a>Posts</a>
                </Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}