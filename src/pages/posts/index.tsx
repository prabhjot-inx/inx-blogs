import Post from "@/components/Post/Post";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Head from 'next/head'
import mockPosts from "@/data/mockPosts";

export default function App() {
  return (
    <>
    <Head>
        <title>Posts | iBlogs</title>
        <meta name="description" content='Explore the latest posts from Insonix Blogs' />
      </Head>
    <Grid.Container gap={2}>
      {mockPosts.map((item:any) => <Post key={item.id} post={item}/>)}
    </Grid.Container>
    </>
  );
}
