import React from "react";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import renderHTML from "react-render-html";
import Loaderpage from "../../components/LoaderPage";
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/blogcategorys`)
      .then((res) => {
        const blogcategories = res.data;
        console.log(blogcategories);
        this.setState({ blogcategories });
      });
  }

  render() {
    return (
      <>
        <ul id="tabs" className="nav nav-tabs">
          {this.state.blogcategories &&
            this.state.blogcategories.map((blog, index) => {
              return (
                <li>
                  {/* className="active" */}
                  <a data-toggle="tab" href="#t1">
                    {blog.category}
                  </a>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default BlogList;
