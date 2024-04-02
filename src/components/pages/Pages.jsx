import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header } from "../common/Header";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </>
  );
};

export default Pages;
