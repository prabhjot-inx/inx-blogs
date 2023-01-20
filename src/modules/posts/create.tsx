import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Grid,
  Textarea,
} from "@nextui-org/react";
import Head from "next/head";
import { useState } from "react";
import PostServices from './services';

export default function CreatePost() {
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const postServices = new PostServices()
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
    };

    const res = await postServices.create(data)
    const result = await res.json();
    if (res.status === 200) {
      setMessage(result.message);
      setError(undefined);
    } else {
      setMessage(undefined);
      setError(result.message);
    }
  };

  return (
    <Grid.Container justify="center">
      <Head>
        <title>Create Post | iBlogs</title>
        <meta name="description" content='Create new posts for your application' />
      </Head>
      <Grid sm={8} xl={8} xs={12} md={10}>
        <Card css={{ padding: "$10" }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: "center",
              mb: "20px",
            }}
          >
            Create Post
          </Text>
          {message && (
            <>
              <Text
                color="secondary"
                css={{
                  as: "center",
                  mb: "20px",
                }}
              >
                {message}
              </Text>
            </>
          )}
          {error && (
            <>
              <Text
                color="error"
                css={{
                  as: "center",
                  mb: "20px",
                }}
              >
                {error}
              </Text>
            </>
          )}
          <form onSubmit={handleSubmit} method="post">
            <Grid.Container justify="center">
              <Grid sm={12} xl={12}>
                <Input
                  clearable
                  bordered
                  fullWidth
                  required
                  color="primary"
                  size="lg"
                  name="title"
                  placeholder="Title"
                />
              </Grid>
              <Spacer y={1} />
              <Grid sm={12} xl={12}>
                <Textarea
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  required
                  minRows={10}
                  name="description"
                  placeholder="Description"
                />
              </Grid>
              <Grid>
                <Spacer y={1} />
                <Button type="submit">Submit</Button>
              </Grid>
            </Grid.Container>
          </form>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
