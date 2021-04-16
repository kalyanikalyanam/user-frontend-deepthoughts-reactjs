import React from "react";
import Header from "./header";
import Footer from "./footer";
class Programmes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <main className="layout">
          <section className="deep-space">
            <div className="container">
              <div className="row m-0">
                <div className="col-md-12">
                  <h1 className="txt-center main-head">Programmes</h1>
                  <p>
                    Hic molestiae vel temporibus doloremque occaecati. Quasi in
                    quos quasi quia dicta ea ut adipisci quis. Ut eum possimus
                    autem est temporibus iste beatae autem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="deep-space-question">
            <div className="container">
              {/* <!-- Entertainment --> */}
              <div className="tab01 p-b-20">
                <div className="tab01-head">
                  {/* <!-- Brand tab --> */}

                  {/* 
<!-- Nav tabs --> */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab1-1"
                        role="tab"
                      >
                        QuizApp
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab1-2"
                        role="tab"
                      >
                        Workshops
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab1-3"
                        role="tab"
                      >
                        Questionnaires
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab1-4"
                        role="tab"
                      >
                        Socratic Dialogue
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#tab1-5"
                        role="tab"
                      >
                        Design Thinking
                      </a>
                    </li>

                    <li className="nav-item-more dropdown dis-none">
                      <a
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i className="fa fa-ellipsis-h"></i>
                      </a>

                      <ul className="dropdown-menu"></ul>
                    </li>
                  </ul>

                  {/* <!--  --> */}
                </div>

                <div className="tab-content p-t-35">
                  <div
                    className="tab-pane fade show active"
                    id="tab1-1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab1-2" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab1-3" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab1-4" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="tab1-5" role="tabpanel">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="video-box-stream">
                          <div className="video-wrapper">
                            <video className="video">
                              <source
                                src="/assets/images/video/video.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <div className="playpause"></div>
                          </div>

                          <h4>Programme Header</h4>
                          <p>
                            What are numbers? Are they labels for quantities? Do
                            you say one cake, two cakes, and so on? What if you
                            have one piece of the cake, one part out of the
                            whole? How would you then represent it? So, do you
                            need new labels for quantities less than 1? Are
                            these called fractions?
                          </p>
                          <p>
                            <i className="fas fa-file-pdf"></i>
                            <a
                              href="https://deepthought.education/questions-pack-12.pdf"
                              target="_blank"
                            >
                              {" "}
                              https://deepthought.education/questions-pack-12.pdf
                            </a>
                          </p>
                        </div>
                      </div>
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
    );
  }
}

export default Programmes;
