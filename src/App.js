import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/portfolio/home/Home";
import Projects from "./components/portfolio/projects/Projects";
import ProjectDetail from "./components/portfolio/projects/ProjectDetail";
import Contact from "./components/portfolio/contact/Contact";
import About from "./components/portfolio/about/About";
import UserCards from "./components/github_card/UserCards";
import Jokes from "./components/jokes/Jokes";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="">
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/usercards" component={UserCards} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/jokes" component={Jokes} />
      </div>
    </Router>
  );
}
export default App;
