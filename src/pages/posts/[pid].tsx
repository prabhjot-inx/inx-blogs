import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Spacer, Text, Row } from "@nextui-org/react";
import ErrorPage from 'next/error'
import mockPosts from "@/data/mockPosts";

// /posts/123?q=test
// pid = 123, q = test
const Post = () => {
  const router = useRouter();
  const { pid, q } = router.query;
  const post = mockPosts.find((item:any) => item.id.toString()=== pid )
  if (!post) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Text css={{textAlign: 'center'}} h2>{post.title}</Text>
      <Spacer y={1}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={0.5}/>
      <Text>{post.description}</Text>
      <Spacer y={1}/>
      <Row justify="center"> 
        <Button bordered as={Link} href='/posts'>View All Posts</Button>
      </Row>
    </>

    // <h1>
    //   Post Id = {pid}
    //   <br/>
    //   Query Parameter  Id = {q}
    // </h1>
  );
};

export default Post;
