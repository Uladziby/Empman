import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Navbar } from "react-bootstrap";
import { Header } from "Header";
import { Footer } from "Footer";
import { StartPage } from "Pages/StartPage";

const Application: React.FC = () => {
  return (
    <>
      <Header />
      <StartPage />
      <Footer />
    </>
  );
};

export default Application;
