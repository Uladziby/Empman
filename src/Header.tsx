import { Constants } from "common/constants";
import { IStore } from "common/interfaces";
import { Loader } from "common/loader";
import React, { SyntheticEvent, useEffect } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ActionChangeLogonType } from "redux/actions";
import { logoutThunks } from "redux/thunks";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state: IStore) => state.start.isLogin);

  function handleShow(e: SyntheticEvent) {
    let target = e.target as HTMLElement;
    switch (target.textContent) {
      case "Log In":
        dispatch(ActionChangeLogonType(Constants.SHOW_LOGIN));
        break;
      case "Sign Up":
        dispatch(ActionChangeLogonType(Constants.SHOW_SIGNUP));
        break;
      default:
        break;
    }
  }

  const handler = () => {
    history.push("/main");
  };

  const logout = () => {
    history.push("/");
    dispatch(logoutThunks(false));
  };
  if (isAuth) {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Loader />
            <Navbar.Brand href="/" onClick={handler}>
              Empman
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button variant="warning" className="m-2" onClick={(e: SyntheticEvent) => logout()}>
                Log out
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Loader />
          <Navbar.Brand href="/" onClick={handler}>
            Empman
          </Navbar.Brand>
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
