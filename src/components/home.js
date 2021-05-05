import React from "react";

import { Helmet } from "react-helmet";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import Loaderpage from "./LoaderPage";
import Header from "./header";
import Footer from "./footer";
import Home1 from "../components/home/home1";
import Home2 from "../components/home/home2";
import Home3 from "../components/home/home3";
import Home4 from "../components/home/home4";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home2s: [], loading: false };
  }
  componentDidMount() {
    this.setState({ loading: false });
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/home/home1_1s`)
      .then((res) => {
        const home1_1s = res.data;
        console.log(home1_1s);
        this.setState({ home1_1s, loading: true });
      });
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/home/update_home1/608b912efcc7860015dce5b1`
      )
      .then((res) => {
        console.log(res.data);
        const home1_1 = {
          title: res.data.title,
          subtitle: res.data.subtitle,
        };
        console.log(home1_1.title);
        this.setState({
          title: home1_1.title,
          subtitle: home1_1.subtitle,
        });
      });
  }
  render() {
    return (
      <>
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Deep Thought - Home</title>
            <link rel="canonical" href="https://mysite.com/example" />
          </Helmet>
          <Header />
          <main className="layout">
            {/* <Home1 /> */}
            <section className="hero-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h1>
                      <span>{this.state.title}</span>
                    </h1>

                    <p>{this.state.subtitle}</p>
                  </div>
                  <div className="col-lg-6 top-scroll-video">
                    <div id="owl-demo3" className="owl-carousel scroll-hero">
                      <Carousel temsToShow={1} showArrows={false}>
                        {this.state.home1_1s &&
                          this.state.home1_1s.map((home1, index) => {
                            return (
                              <div className="item ">
                                <iframe
                                  src={home1.video}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </div>
                            );
                          })}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="hero-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h1>
                      <span>{this.state.title}</span>
                    </h1>

                    <p>{this.state.subtitle}</p>
                  </div>
                  <div className="col-lg-6 ">
                    <div id="owl-demo3" className="owl-carousel scroll-hero">
                      <Carousel temsToShow={1} showArrows={false}>
                        {this.state.home1_1s &&
                          this.state.home1_1s.map((home1, index) => {
                            return (
                              <>
                                <div className="item ">
                                  <img
                                    src="/assets/images/hero-slide.jpg"
                                    onClick={() => {
                                      this.setState({ show: true });
                                    }}
                                  />
                                </div>
                                <Modal
                                  show={this.state.show}
                                  onHide={() => {
                                    this.setState({ show: false });
                                  }}
                                >
                                  <iframe
                                    src={home1.video}
                                    allowfullscreen
                                  ></iframe>
                                </Modal>
                              </>
                            );
                          })}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <Home2 />

            <Home3 />
            <Home4 />

            <section className="revolution-bg">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-7 col-lg-8">
                    <div className="revolution-block">
                      <div className="revolution-head">
                        <h1>Join the revolution</h1>
                        <h3>Let’s dialogue</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4">
                    <div className="revolution-join">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-field2"
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-field2"
                          placeholder="sample@mail.com"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-field2"
                          placeholder="intent"
                        />
                      </div>

                      <div className="form-group m-0">
                        <button className="join-btn">
                          Join <i className="fas fa-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Footer --> */}
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
          {/* <div
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
          </div> */}
        </>
      </>
    );
  }
}

export default Home;
