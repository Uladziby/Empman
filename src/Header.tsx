import { Constants } from "common/constants";
import React, { SyntheticEvent } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeLogonType } from "redux/actions";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  
  function handleShow(e: SyntheticEvent) {
    let target = e.target as HTMLElement;
    switch (target.textContent) {
      case "Log In":
        dispatch(changeLogonType(Constants.SHOW_SIGNUP))
        console.log(target.textContent);

        break;
      case "Sign Up":
        dispatch(changeLogonType(Constants.SHOW_LOGIN))
        console.log(target.textContent);

        break;
      default:
        break;
    }
  }
//в зависимости от нажатия изменять класс нужен ли юз эфект при юз селекторе

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Empman</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" className="m-2" onClick={(e: SyntheticEvent) => handleShow(e)}>
              Log In
            </Button>
            <Button variant="warning" className="m-2" onClick={(e: SyntheticEvent) => handleShow(e)}>
              Sign Up
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
