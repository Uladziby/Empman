import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "Footer";
import { useRoutes } from "common/routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "Header";

const Application: React.FC = () => {
  const routes = useRoutes();

  return (
    <Router>
      <Header />
      {routes}
      <Footer />
    </Router>
  );
};

export default Application;
