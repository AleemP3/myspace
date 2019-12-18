import React from "react";
import { Container, Header } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const NoMatch = () => (
  <Container>
    <Header as="h1" textAlign="center">
      Invalid page go back to { " " }
      <Link to="/">Home</Link>
    </Header>
  </Container>
)

export default NoMatch;