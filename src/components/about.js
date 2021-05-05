import React from "react";
import Header from "./header";
import Footer from "./footer";
import About2 from "../components/about/about2";
import About3 from "../components/about/about3";
import { Helmet } from "react-helmet";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Deep Thought - AboutUs</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />

        <main className="layout">
          <section className="about-space about-background">
            <div className="container">
              <div className="row m-0">
                <div className="col-md-12">
                  <h1 className="txt-center main-head">
                    Our Mission and Vision
                  </h1>
                </div>
                <div className="col-md-6 about-height p-0">
                  <div className="vision-mission-box one">
                    "to nurture thought leaders out of children, by exposing
                    them to Philosophy, so they could extrapolate out of textual
                    contents into inter-disciplinary cross functional real-life
                    problem solving"
                  </div>
                </div>
                <div className="col-md-6 about-height p-0">
                  <div className="vision-mission-box two">
                    "to lead the world into a heaven of freedom where everyone
                    is a researcher, where decision-making is thought through,
                    where knowledge creators are respected"
                  </div>
                </div>
              </div>
            </div>
          </section>
          <About2 />
          <About3 />
          {/* <section className="leadership">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="txt-left main-head">Leadership Team</h1>
                  <p className="leadership-para">
                    Meet the people behind Deep Thought, it takes a group of
                    enthusiastic leaders and innovators to make things happen
                  </p>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Tarun Sciensation</h5>
                    <p>CEO & Co-Founder</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Franco Lakin</h5>
                    <p>CTO & Co-Founder</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Jeramie Cremin</h5>
                    <p>Principal Group Producer</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Meggie Collins</h5>
                    <p>Chief Operations Agent</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Dock Abbott</h5>
                    <p>Coordinator</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Cleo Renner</h5>
                    <p>Manager</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Carolanne Bogan</h5>
                    <p>Product Metrics Designer</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Mazie Rowe</h5>
                    <p>Chief Creative Coordinator</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Dillan Turcotte</h5>
                    <p>Human Data Supervisor</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Delbert Effertz</h5>
                    <p>Chief Applications Developer</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Kayleigh Kovacek</h5>
                    <p>Chief Program Manager</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm- 6 col-md-4 col-lg-3">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img src="/assets/images/team/team.png" />
                    <h5>Cleo Renner</h5>
                    <p>Manager</p>
                    <div className="content-details fadeIn-top">
                      <a href="#" className="team-social">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="team-social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
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
    );
  }
}

export default About;
