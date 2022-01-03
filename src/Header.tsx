import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

export const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Empman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" className="m-2">
              Log In
            </Button>
            <Button variant="warning" className="m-2">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
