import React from "react";
import Header from "./header";
import Footer from "./footer";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <main className="layout">
          <section className="hero-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <h1>
                    <span>Deep thought</span>
                    <span>teachers for a</span>
                    <span>Deep tech future</span>
                  </h1>

                  <p>
                    You need more than just studying - something bigger to
                    achieve your dreams so we provide all of these great things
                    for you and more!
                  </p>
                </div>
                <div className="col-lg-5">
                  <div id="owl-demo3" className="owl-carousel scroll-hero">
                    <div className="item">
                      <span
                        className="play-icon"
                        data-toggle="modal"
                        data-target="#modal-video-01"
                      >
                        <img
                          src="/assets/images/icons/play-icon.svg"
                          alt="Deep thought"
                        />
                      </span>
                      <img
                        src="/assets/images/hero-slide.jpg"
                        alt="Deep thought"
                      />
                    </div>

                    <div className="item">
                      <span
                        className="play-icon"
                        data-toggle="modal"
                        data-target="#modal-video-01"
                      >
                        <img
                          src="/assets/images/icons/play-icon.svg"
                          alt="Deep thought"
                        />
                      </span>
                      <img
                        src="/assets/images/hero-slide.jpg"
                        alt="Deep thought"
                      />
                    </div>

                    <div className="item">
                      <span
                        className="play-icon"
                        data-toggle="modal"
                        data-target="#modal-video-01"
                      >
                        <img
                          src="/assets/images/icons/play-icon.svg"
                          alt="Deep thought"
                        />
                      </span>
                      <img
                        src="/assets/images/hero-slide.jpg"
                        alt="Deep thought"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white scrolls-space">
            <div className="container">
              <div className="row m-0">
                <div id="owl-demo" className="owl-carousel scroll-one">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>

                        <p>
                          DeepThought is repositioning the very concept of
                          education- as an attitude, as a mindset, just as how
                          Tesla has repositioned the otherwise not so profitable
                          automobile industry.
                          <br />
                          <br />
                          We are changing the meaning of education - life-long
                          learning demonstrated with Zero-to-One Innovation
                          demonstrated from the First Principles.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>
                        <p>
                          We bring PhD level research-based learning to school
                          level.<br></br>
                          We nurture thought leaders for the society, for the
                          economy
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>
                        <p>
                          We had VI class students do a skit on Differential
                          Calculus - October 8th 2017.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>
                        <p>
                          We had VII Class students defeat engineering students
                          in a competition on Lean Startup, with a jury of
                          investors, CEOs and a senior bureaucrat
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>
                        <p>
                          School students advised school principals, bureaucrats
                          and scientists on future of education at CBS
                          Extrapolate – Future of Education, Student Research
                          Conference 2016.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 slider-text">
                        <h1 className="main-head">Who we are?</h1>
                        <h5>DeepThought - India's answer to Tesla</h5>
                        <p>
                          III grade students of The Sun School, Vijayanagaram,
                          discovered addition of binary numbers, on their own,
                          on stage- December 2018
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder.jpg"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white scrolls-space">
            <div className="container">
              <div className="row m-0">
                <div id="owl-demo2" className="owl-carousel scroll-two">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder-2.jpg"
                          alt="Deep thought"
                        />
                      </div>

                      <div className="col-lg-6 slider-text right">
                        <h1 className="main-head">What we do?</h1>
                        <h5>Design Thinking Hackathons</h5>
                        <p>
                          Real world problem solving through analysis +
                          synthesis, scientific diagnosis + prototyping.
                          Students learn how a CEO approaches a real world, with
                          in-depth analysis and creative execution of intuitive
                          insights.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder-2.jpg"
                          alt="Deep thought"
                        />
                      </div>

                      <div className="col-lg-6 slider-text right">
                        <h1 className="main-head">What we do?</h1>
                        <h5>Socratic Dialogues</h5>
                        <p>
                          Deepthought (Sciensation) conducts Socratic Dialogue
                          competitions to expose students to diverse topics and
                          enable students to extrapolate out of textual context,
                          through interesting wrong answers, collaborative
                          questions, future CXOs build ideas and perspectives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder-2.jpg"
                          alt="Deep thought"
                        />
                      </div>

                      <div className="col-lg-6 slider-text right">
                        <h1 className="main-head">What we do?</h1>
                        <h5>Collaborative DeepQuiz Making</h5>
                        <p>
                          We collabiare with Thought Leaders across the world,
                          scientifically capture the insights they offer
                          pertaining to their domain of passion and epxertise.
                          We then extrapolate them into quizzes using our
                          constantly evolving Content Engines. The quizzes thus
                          developed give a balanced diet of mindsets aimed to
                          nurture body, mind and spirit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6">
                        <img
                          src="/assets/images/Placeholder-2.jpg"
                          alt="Deep thought"
                        />
                      </div>

                      <div className="col-lg-6 slider-text right">
                        <h1 className="main-head">What we do?</h1>
                        <h5>Digital DeepLearning communities</h5>
                        <p>
                          DeepThought Learning Communities engage Children of
                          grades 3-12 and people from different walks of life
                          with Thought Leaders and Mentors. We share content
                          that is thought provoking and impactful on a daily
                          basis on these learning communities, to trigger and
                          gradually develop reasoning of the learners.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Latest --> */}
          <section className="media-resence">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <h1 className="main-head txt-center pb-20">Media Presence</h1>
                </div>

                <div className="col-lg-8">
                  <div id="sync1" className="owl-carousel">
                    <div className="item">
                      <div>
                        <h4 className="main-head4 txt-center  pb-20 question-media">
                          ‘Why should we remain silent in class?’
                        </h4>
                        <p className="para-txt  txt-center pb-50">
                          What is the purpose of sitting in the class if I am
                          unable to raise questions and clarify the doubts?
                        </p>
                        <p className="para-txt txt-center">
                          <a
                            href="https://www.thehindu.com/news/cities/Hyderabad/why-should-we-remain-silent-in-class/article19824590.ece"
                            target="_blank"
                          >
                            <span className="blue-round-bg">
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="item">
                      <div>
                        <h4 className="main-head4 txt-center  pb-20 question-media">
                          Brand for Science
                        </h4>
                        <p className="para-txt  txt-center pb-50">
                          Paying attention to detail and providing metaphysical
                          insights to people, is a vital aspect of sicence
                          communication and that is what Sciensation precisely
                          does.
                        </p>
                        <p className="para-txt txt-center">
                          <a
                            href="http://www.sciensation.tv/images/hansindiatarun.jpg"
                            target="_blank"
                          >
                            <span className="blue-round-bg">
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="item">
                      <div>
                        <h4 className="main-head4 txt-center  pb-20 question-media">
                          Hyderabad: Media firm holds debate on parenting
                        </h4>
                        <p className="para-txt  txt-center pb-50">
                          The skills that are relevant today may not be relevant
                          tomorrow. Teachers should teach how to learn and that
                          is more important.
                        </p>
                        <p className="para-txt txt-center">
                          <a
                            href="https://telanganatoday.com/media-firm-holds-debate-parenting "
                            target="_blank"
                          >
                            <span className="blue-round-bg">
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="sync2" className="owl-carousel">
                  <div className="item">
                    <div className="midia-logos">
                      <div className="img">
                        <img
                          src="/assets/images/media/the-hindu.png"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="midia-logos">
                      <div className="img">
                        <img
                          src="/assets/images/media/the-hans-india.png"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="midia-logos">
                      <div className="img">
                        <img
                          src="/assets/images/media/telangana-today.png"
                          alt="Deep thought"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Latest --> */}

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

export default Home;
