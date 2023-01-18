// import { Content } from "./Content.js"
import { Container, Spacer } from "@nextui-org/react";

export const Layout = ({ children }: any) => (
  <Container>
    <Spacer y={1}/>
    {children}
  </Container>
);