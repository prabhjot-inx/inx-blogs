import Head from 'next/head';
import Posts from './posts/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>iBlogs</title>
        <meta name="description" content="Blog Site for Insonix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts/>
    </>
  )
}
