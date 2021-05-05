import React from "react";
import axios from "axios";
// import Carousel1 from "react-elastic-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import AliceCarousel from "react-alice-carousel";
// import Carousel from "react-bootstrap/Carousel";

class Home4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home4s: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/home/home4s`)
      .then((res) => {
        const home4s = res.data;
        console.log(home4s);
        this.setState({ home4s });
      });
  }

  render() {
    return (
      <>
        {/* <section className="media-resence">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h1 className="main-head txt-center pb-20">Media Presence</h1>
              </div>

              <div className="col-lg-8">
                <div id="sync1" className="owl-carousel">
               
                  <AliceCarousel
                    mouseTracking
                    items={1}
                    disableButtonsControls={true}
                    disableDotsControls={true}
                  >
                    {this.state.home4s &&
                      this.state.home4s.map((home4, index) => {
                        return (
                          <>
                        
                            <div className="item" key={index}>
                              <div>
                                <h4 className="main-head4 txt-center  pb-20 question-media">
                                  {home4.title}
                                </h4>
                                <p className="para-txt  txt-center pb-50">
                                  {home4.description}
                                </p>
                              
                                <div className="item">
                                  <div className="midia-logos">
                                    <div className="img">
                                      <img
                                        src={home4.image}
                                        alt="Deep thought"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                         
                          </>
                        );
                      })}
                  </AliceCarousel>
                </div>
              </div>

           
            </div>
          </div>
        </section> */}
        <section class="media-resence">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <h1 class="main-head txt-center pb-20">Media Presence</h1>
              </div>

              <Carousel
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                // infiniteLoop
                // emulateTouch
                // autoPlay
                // useKeyboardArrows
                // swipeable={true}
                // stopOnHover={false}
                transitionTime={800}
                selectedItem={1}
                width="300px"
              >
                {this.state.home4s &&
                  this.state.home4s.map((home4, index) => {
                    return (
                      <div className="slide-holder">
                        <img
                          alt=""
                          src={home4.image}
                          style={{ display: "block" }}
                        />
                        <div class="item">
                          <h4 class="main-head4 txt-center  pb-20 question-media">
                            {home4.title}
                          </h4>
                          <p class="para-txt  txt-center pb-50">
                            {home4.description}
                          </p>
                          <p class="para-txt txt-center">
                            <a href={home4.url} target="_blank">
                              <span class="blue-round-bg">
                                <i class="fas fa-arrow-right"></i>
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </Carousel>
            </div>
          </div>
        </section>

        {/* <section class="media-resence">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <h1 class="main-head txt-center pb-20">Media Presence</h1>
              </div>

              <div class="col-lg-8">
                <div id="sync1" class="owl-carousel">
                  <div class="item">
                    <div>
                      <h4 class="main-head4 txt-center  pb-20 question-media">
                        ‘Why should we remain silent in class?’
                      </h4>
                      <p class="para-txt  txt-center pb-50">
                        What is the purpose of sitting in the class if I am
                        unable to raise questions and clarify the doubts?
                      </p>
                      <p class="para-txt txt-center">
                        <a
                          href="https://www.thehindu.com/news/cities/Hyderabad/why-should-we-remain-silent-in-class/article19824590.ece"
                          target="_blank"
                        >
                          <span class="blue-round-bg">
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="item">
                    <div>
                      <h4 class="main-head4 txt-center  pb-20 question-media">
                        Brand for Science
                      </h4>
                      <p class="para-txt  txt-center pb-50">
                        Paying attention to detail and providing metaphysical
                        insights to people, is a vital aspect of sicence
                        communication and that is what Sciensation precisely
                        does.
                      </p>
                      <p class="para-txt txt-center">
                        <a
                          href="http://www.sciensation.tv/images/hansindiatarun.jpg"
                          target="_blank"
                        >
                          <span class="blue-round-bg">
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>

                  <div class="item">
                    <div>
                      <h4 class="main-head4 txt-center  pb-20 question-media">
                        Hyderabad: Media firm holds debate on parenting
                      </h4>
                      <p class="para-txt  txt-center pb-50">
                        The skills that are relevant today may not be relevant
                        tomorrow. Teachers should teach how to learn and that is
                        more important.
                      </p>
                      <p class="para-txt txt-center">
                        <a
                          href="https://telanganatoday.com/media-firm-holds-debate-parenting "
                          target="_blank"
                        >
                          <span class="blue-round-bg">
                            <i class="fas fa-arrow-right"></i>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="sync2" class="owl-carousel">
                <div class="item">
                  <div class="midia-logos">
                    <div class="img">
                      <img src="assets/images/media/the-hindu.png" />
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="midia-logos">
                    <div class="img">
                      <img src="assets/images/media/the-hans-india.png" />
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="midia-logos">
                    <div class="img">
                      <img src="assets/images/media/telangana-today.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    );
  }
}

export default Home4;
