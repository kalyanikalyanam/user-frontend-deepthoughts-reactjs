import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//auth
import Register from "./auth/register";
import Login from "./auth/login";
//Components
import Home from "./components/home";
import About from "./components/about";
import Programmes from "./components/programmes";
export default class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        {/* Auth */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />

        <Route exact strict path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programmes" component={Programmes} />
      </Router>
    );
  }
}
