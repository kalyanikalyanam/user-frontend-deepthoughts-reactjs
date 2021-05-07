import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../header";
import Footer from "../footer";
import Loader from "react-loader-spinner";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
function Blog1() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [categorydata, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/Blog1s`)
      .then(function (response) {
        console.log(response.data);

        setData(response.data.reverse());
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/blog/blogcategorys`)
      .then(function (response) {
        console.log(response.data);

        setCategoryData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(data);
    else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

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
              <div className="col-md-6">
                <div className="input-group blog-search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog_tabs">
              <ul id="tabs" className="nav nav-tabs">
                {categorydata &&
                  categorydata.map((blog, index) => {
                    return (
                      <li>
                        {/* href={`/articles/${blog.category}`} */}
                        <a
                          // className={
                          //   this.isPathActive(`/articles/${blog.category}`)
                          //     ? "active"
                          //     : null
                          // }
                          href={`/articles/${blog.category}`}
                          className="active"
                        >
                          {blog.category}
                        </a>
                      </li>
                    );
                  })}
              </ul>

              <div className="tab-content">
                <div id="t1" className="tab-pane fade show active">
                  <div className="row">
                    {loading ? (
                      <>
                        {data.map((blog, index) => {
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
                                        }/${blog.title.replace(/\s/g, "_")}/${
                                          blog.category
                                        }`}
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

      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <span className="fas fa-angle-up"></span>
        </span>
      </div>
    </>
  );
}

export default Blog1;
