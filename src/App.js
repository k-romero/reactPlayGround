import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import Home from "./components/portfolio/Home";
import Projects from "./components/portfolio/Projects";
import Contact from "./components/portfolio/Contact";
import About from "./components/portfolio/About";
import UserCards from "./components/github_card/UserCards";
import Jokes from "./components/jokes/Jokes";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/usercards" component={UserCards} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/jokes" component={Jokes} />
      </div>
    </Router>
  );
}
export default App;
