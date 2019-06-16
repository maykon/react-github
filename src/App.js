import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Projects from "./components/Projects";
import User from "./components/User";

import "./global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header title="Meu header" />
        <Route path="/" exact component={Projects} />
        <Route path="/projects" component={Projects} />
        <Route path="/user" component={User} />
      </BrowserRouter>
    </>
  );
}

export default App;
