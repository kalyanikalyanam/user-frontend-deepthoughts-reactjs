import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//auth
import Register from "./auth/register";
import Login from "./auth/login";
//Components
import Home from "./components/home";
import About from "./components/about";
import SubMenuList from "./components/submenulist";
import PostList from "./components/PostList";

import Blog from "./components/blog/blog";
import Articles from "./components/blog/articles";
import BlogSingle from "./components/blog/blog_single";

import Reacttabs from "./components/react_tabs";

import Privatepage from "./components/privatepages/privatepage";
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
        <Route path="/SubMenuList/:plpID" component={SubMenuList} />
        <Route path="/PostList/:plpID/:menu" component={PostList} />
        <Route path="/blog" component={Blog} />
        <Route path="/articles/:plpID" component={Articles} />
        <Route
          path="/blog_single/:_id/:title/:category"
          component={BlogSingle}
        />
        <Route path="/Reacttabs" component={Reacttabs} />
        <Route path="/Privatepage/:_id/:title" component={Privatepage} />
      </Router>
    );
  }
}
