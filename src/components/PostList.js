import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
// import DocumentMeta from "react-document-meta";
import { Helmet } from "react-helmet";
import renderHTML from "react-render-html";
import { Link, withRouter } from "react-router-dom";

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plpID: "",

      title: "",
      keywords: "",
      description: "",
      keywordsLists: [],
    };
  }

  componentDidMount() {
    const { plpID } = this.props.match.params;
    const { menu } = this.props.match.params;

    this.menusDetails(menu);
    this.postDetails(plpID);
    this.viewsubmenusDetails(plpID);
  }
  componentWillReceiveProps(nextProps, prevState) {
    console.log(nextProps);
    const { plpID } = nextProps.match.params;
    const { menu } = nextProps.match.params;
    this.menusDetails(menu);
    this.postDetails(plpID);
    this.viewsubmenusDetails(plpID);
  }

  menusDetails(menu) {
    console.log(menu);
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/submenuvalues/${menu}`
      )
      .then((res) => {
        const submenus = res.data;
        console.log(submenus);
        this.setState({ submenus });
      });
  }

  postDetails(plpID) {
    console.log(plpID);
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/postvalues/${plpID}`)
      .then((res) => {
        const postvalues = res.data;
        console.log(postvalues);
        this.setState({ postvalues });
      });
  }

  viewsubmenusDetails(plpID) {
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/getsubmenudescription/${plpID}`
      )
      .then((res) => {
        console.log(res.data);
        const submenu = {
          submenu: res.data.submenu,
          description: res.data.description,
          description1: res.data.description1,
          // image: res.data.image,
          menu: res.data.menu,
          date: res.data.date,
        };
        console.log(submenu.sub_menu);
        this.setState({
          submenu: submenu.submenu,
          description: submenu.description,
          description1: submenu.description1,
          // image: submenu.image,
          menu: submenu.menu,
          date: submenu.date,
        });
      });
  }

  render() {
    // const meta = {
    //   title: this.state.title,
    //   description: this.state.description1,
    //   canonical: "http://idlimachine.com/Contact",
    //   meta: {
    //     charset: "utf-8",
    //     name: {
    //       keywords: "react,meta,document,html,tags",
    //     },
    //   },
    // };
    const { plpID } = this.props.match.params;
    return (
      <>
        {" "}
        {/* <DocumentMeta {...meta}> */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.submenu}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <>
          <Header />

          <main className="layout">
            <section className="deep-space">
              <div className="container">
                <div className="row m-0">
                  <div className="col-md-12">
                    <h1 className="txt-center main-head">{plpID}</h1>
                    <p>{this.state.description1}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="deep-space-question">
              <div className="container">
               
                <div className="tab01 p-b-20">
                  <div className="tab01-head">
                   
                  
                    <ul className="nav nav-tabs" role="tablist">
                      {this.state.submenus &&
                        this.state.submenus.map((data, index) => {
                          return (
                            <li className="nav-item" key={index}>
                              <a
                                className="nav-link "
                                data-toggle="tab"
                                role="tab"
                                href={`/PostList/${data.submenu}/${data.menu}`}
                                className={
                                  this.isPathActive(
                                    `/PostList/${data.submenu}/${data.menu}`
                                  )
                                    ? "active"
                                    : null
                                }
                              >
                                {data.submenu}
                              </a>
                            </li>
                          );
                        })}
                    </ul>

                   
                  </div>

                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab1-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        {this.state.postvalues &&
                          this.state.postvalues.map((data, index) => {
                            return (
                              <div className="col-md-6" key={index}>
                                <div className="video-box-stream">
                                  <h4>{data.title}</h4>
                                  <p>{renderHTML(data.description)}</p>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className="deep-space-question">
              <div className="container">
                <div className="deep_tabs">
                  <ul id="tabs" className="nav nav-tabs">
                    {this.state.submenus &&
                      this.state.submenus.map((data, index) => {
                        return (
                          <li>
                            <a
                              // data-toggle="tab"
                              className={
                                this.isPathActive(
                                  `/PostList/${data.submenu}/${data.menu}`
                                )
                                  ? "active"
                                  : null
                              }
                              href={`/PostList/${data.submenu}/${data.menu}`}
                            >
                              {data.submenu}
                            </a>
                          </li>
                        );
                      })}
                  </ul>

                  <div className="tab-content p-t-35">
                    <div
                      className="tab-pane fade show active"
                      id="tab1-1"
                      role="tabpanel"
                    >
                      <div className="row">
                        {this.state.postvalues &&
                          this.state.postvalues.map((data, index) => {
                            return (
                              <div className="col-md-6">
                                <div className="video-box-stream">
                                  <h4> {data.title}</h4>
                                  <p>{renderHTML(data.description)}</p>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </main>

          {/* <!-- Back to top --> */}
          <a href="#">
            <div className="btn-back-to-top" id="myBtn">
              <span className="symbol-btn-back-to-top">
                <span className="fas fa-angle-up"></span>
              </span>
            </div>
          </a>
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
        {/* </DocumentMeta> */}
      </>
    );
  }
  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
export default withRouter(PostList);
// }

// export default PostList;
