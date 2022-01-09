import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Navbar } from "react-bootstrap";
import { Header } from "Header";
import { Footer } from "Footer";
import { AuthPage } from "Pages/AuthPage";
import { BrowserRouter } from "react-router-dom";
import { getAllUsers } from "common/api";

const Application: React.FC = () => {


  return (
    <BrowserRouter>
      <Header />
      <AuthPage />
      <Footer />
    </BrowserRouter>
  );
};

export default Application;
