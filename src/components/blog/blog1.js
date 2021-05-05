import React from "react";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import BlogList from "./blog_single";
import Loaderpage from "../../components/LoaderPage";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      title: "",
      date: "",
      category: "",
      description: "",
      loading: false,
    };
  }
  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/Blog1s`)
      .then((res) => {
        const blogs = res.data;
        console.log(blogs);
        this.setState({ blogs });
      });
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
        <Header />

        <main className="layout">
          <section className="bg-white">
            <div className="container ">
              <div className="row m-0 blog-border-footer blog-space">
                <div className="col-lg-7 p-0">
                  <h1 className="main-head">
                    <span className="thin">Discover</span> Articles
                    <br />& Blogs <span className="thin">daily</span>
                  </h1>

                  <div className="sub-scribe">
                    <p>
                      Subscribe and get weekly email with{" "}
                      <span>latest articles</span>
                    </p>
                    <div className="sub-scribe-form">
                      <form>
                        <input
                          type="text"
                          name="text"
                          placeholder="Email address"
                        />
                        <button type="button" className="btn btn-default">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 p-0">
                  <img
                    src="/assets/images/blog/blog-img.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="blog-space2">
            <div className="container">
              <div className="row artcle-space">
                <div className="col-md-6">
                  <h1 className="txt-left main-head">Articles</h1>
                </div>
                {/* <div className="col-md-6">
                  <div className="input-group blog-search">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      name="search"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="blog_tabs">
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

                <div className="tab-content">
                  <div id="t1" className="tab-pane fade show active">
                    <div className="row">
                      {this.state.blogs &&
                        this.state.blogs.map((blog, index) => {
                          const timeElapsed = parseInt(blog.date);
                          const today = new Date(timeElapsed);
                          return (
                            <div
                              className="col-lg-4 col-md-6 col-sm-6"
                              key={index}
                            >
                              <div className="blog-artcle-box">
                                <div className="content">
                                  <div className="content-overlay"></div>
                                  <div className="blog-img">
                                    <img
                                      src={blog.image}
                                      className="img-fluid"
                                    />
                                  </div>
                                  <div className="content-details fadeIn-top">
                                    <p className="read-article">Read Article</p>

                                    <a
                                      href={`/blog_single/${
                                        blog._id
                                      }/${blog.title.replace(/\s/g, "_")}/${
                                        blog.category
                                      }`}
                                      className="team-social blog-link"
                                    >
                                      <i className="fas fa-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="blog-data">
                                  <p>
                                    <span className="txt-left">
                                      {blog.category}
                                    </span>
                                    <span className="txt-right">
                                      {today.toDateString()}
                                    </span>
                                  </p>
                                  <h5>{blog.title}</h5>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                ></div>
              </div>
            </div>
          </section>

          <Footer />
        </main>

        {/* <!-- Back to top --> */}
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <span className="fas fa-angle-up"></span>
          </span>
        </div>

        {/* <!-- Modal Video 01--> */}
        <div
          className="modal fade"
          id="modal-video-01"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" data-dismiss="modal">
            <div
              className="close-mo-video-01 trans-0-4"
              data-dismiss="modal"
              aria-label="Close"
            >
              &times;
            </div>

            <div className="wrap-video-mo-01">
              <div className="video-mo-01">
                <iframe
                  src="https://www.youtube.com/embed/A-xXMM_VOgY?rel=0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
