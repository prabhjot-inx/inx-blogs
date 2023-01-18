import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Link from "next/link";

const Post = ({ post, sm=12, md=6} : any) => {
  return (
      <Grid sm={sm} md={md}>
        <Card>
          <Card.Header>
            <Text b>{post.title}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              {post.description}
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button as={Link} href={`/posts/${post.id}`} size="sm">Read More</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
  );
}

export default Post;
