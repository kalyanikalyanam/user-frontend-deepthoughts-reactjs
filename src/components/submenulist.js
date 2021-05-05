import React from "react";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import renderHTML from "react-render-html";
import { Helmet } from "react-helmet";
import { Link, withRouter } from "react-router-dom";
class SubMenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { plpID: "" };
  }

  componentDidMount() {
    const { plpID } = this.props.match.params;
    this.menusDetails(plpID);
    this.viewmenusDetails(plpID);
    this.allPostDetails(plpID);
  }
  componentWillReceiveProps(nextProps, prevState) {
    console.log(nextProps);
    const { plpID } = nextProps.match.params;
    this.menusDetails(plpID);
    this.viewmenusDetails(plpID);
    this.allPostDetails(plpID);
  }

  menusDetails(plpID) {
    console.log(plpID);
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/submenuvalues/${plpID}`
      )
      .then((res) => {
        const submenus = res.data;
        console.log(submenus);
        this.setState({ submenus });
      });
  }
  viewmenusDetails(plpID) {
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/getmenudescription/${plpID}`
      )
      .then((res) => {
        console.log(res.data);
        const menu = {
          menu: res.data.menu,
          description: res.data.description,
          date: res.data.date,
        };

        this.setState({
          menu: menu.menu,
          description: menu.description,
          date: menu.date,
        });
      });
  }

  allPostDetails(plpID) {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/allpostvalues/${plpID}`)
      .then((res) => {
        const postvalues = res.data;
        console.log(postvalues);
        this.setState({ postvalues });
      });
  }

  render() {
    const { plpID } = this.props.match.params;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.state.menu}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />

        <main className="layout">
          <section className="deep-space">
            <div className="container">
              <div className="row m-0">
                <div className="col-md-12">
                  <h1 className="txt-center main-head">{plpID}</h1>
                  <p>{this.state.description}</p>
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

        <a href="#">
          <div className="btn-back-to-top" id="myBtn">
            <span className="symbol-btn-back-to-top">
              <span className="fas fa-angle-up"></span>
            </span>
          </div>
        </a>
      </>
    );
  }
  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
export default withRouter(SubMenuList);
// export default SubMenuList;
