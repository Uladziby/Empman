import { Constants, emptyUser } from "common/constants";
import { IStore } from "common/interfaces";
import { Loader } from "common/loader";
import React, { SyntheticEvent } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ActionChangeLogonType, ActionSetCurrentUser } from "redux/actions";
import { logoutThunks } from "redux/thunks";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state: IStore) => state.start.isLogin);
  const user = useSelector((state: IStore) => state.start.user);

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
    dispatch(ActionSetCurrentUser(emptyUser));
  };

  if (isAuth) {
    return (
      <>
        <Navbar bg="dark" variant="dark" className="py-0">
          <Container>
            <Loader />
            <Navbar.Brand href="/" onClick={handler}>
              Empman
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button className="my-0" variant="secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                Hello , {`${user.firstName} ${user.lastName}`}!
              </Button>
              <Button variant="warning" className="m-2" onClick={logout}>
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
