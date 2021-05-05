import React from "react";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import renderHTML from "react-render-html";
import Loaderpage from "../../components/LoaderPage";
import Loader from "react-loader-spinner";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
class BlogSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
      blogs: [],
      blogwithcategory: [],
      loading: false,
      loading1: false,
    };
  }

  componentDidMount() {
    this.viewBlog();
  }

  viewBlog() {
    const { _id } = this.props.match.params;

    console.log(_id);

    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/update_blog1/${_id}`)
      .then((res) => {
        console.log(res.data);
        const post = {
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          image: res.data.image,
          date: res.data.date,
        };
        console.log(post.title);
        this.setState({
          title: post.title,
          description: post.description,
          category: post.category,
          image: post.image,
          date: post.date,
          loading: true,
        });
      });

    // axios
    //   .get(`https://deepthoughts-nodejs.herokuapp.com/blog/Blog1s`)
    //   .then((res) => {
    //     const blogs = res.data.reverse();
    //     console.log(blogs);
    //     this.setState({ blogs, loading1: true });
    //   });
    const { category } = this.props.match.params;

    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/blog/blogwithcategory/${category}`
      )
      .then((res) => {
        const blogs = res.data.reverse();
        console.log(blogs);
        this.setState({ blogs, loading1: true });
      });
  }

  render() {
    const timeElapsed = parseInt(this.state.date);
    const today = new Date(timeElapsed);
    return (
      <>
        {this.state.loading ? (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title> {this.state.title}</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Header />

            <main className="layout">
              <section className="blog-space2">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="blog-details">
                        <>
                          <p>
                            <a href="/blog">
                              <i className="fas fa-arrow-left font-13"></i> All
                              Articles
                            </a>
                          </p>
                          <h1 className="main-head blog-single-headspce">
                            {this.state.title}
                          </h1>
                          <p> {today.toDateString()}</p>

                          <div className="blog-single-img">
                            {renderHTML(this.state.description)}
                          </div>
                        </>
                      </div>
                    </div>
                  </div>

                  <div className="blog_tabs">
                    <h1 className="txt-left sub-head">Recent Articles</h1>

                    <div className="row">
                      {this.state.loading1 ? (
                        <>
                          {this.state.blogs &&
                            this.state.blogs.map((blog, index) => {
                              const timeElapsed = parseInt(blog.date);
                              const today = new Date(timeElapsed);
                              return (
                                <>
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
                                          <p className="read-article">
                                            Read Article
                                          </p>
                                          <Link
                                            to={`/blog_single/${
                                              blog._id
                                            }/${blog.title.replace(
                                              /\s/g,
                                              "_"
                                            )}/${blog.category}`}
                                            className="team-social blog-link"
                                          >
                                            <i className="fas fa-arrow-right"></i>
                                          </Link>
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
                                </>
                              );
                            })}
                        </>
                      ) : (
                        <div style={{ marginLeft: "500px" }}>
                          {" "}
                          <Loader
                            type="Circles"
                            color="#0029ff"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>

              <Footer />
            </main>

            <div className="btn-back-to-top" id="myBtn">
              <span className="symbol-btn-back-to-top">
                <span className="fas fa-angle-up"></span>
              </span>
            </div>
          </>
        ) : (
          <div className="divLoader1">
            <Loaderpage />
          </div>
        )}
      </>
    );
  }
}

export default BlogSingle;
