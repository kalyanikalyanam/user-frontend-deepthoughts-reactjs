import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
class Home1 extends React.Component {
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
        <section class="hero-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <h1>
                  <span>Deep thought</span>
                  <span>teachers for a</span>
                  <span>Deep tech future</span>
                </h1>

                <p>
                  You need more than just studying - something bigger to achieve
                  your dreams so we provide all of these great things for you
                  and more!
                </p>
              </div>
              <div class="col-lg-5">
                <div id="owl-demo3" class="owl-carousel scroll-hero">
                  <div class="item">
                    <span
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#modal-video-01"
                    >
                      <img src="assets/images/icons/play-icon.svg" />
                    </span>
                    <img src="assets/images/hero-slide.jpg" />
                  </div>

                  <div class="item">
                    <span
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#modal-video-01"
                    >
                      <img src="assets/images/icons/play-icon.svg" />
                    </span>
                    <img src="assets/images/hero-slide.jpg" />
                  </div>

                  <div class="item">
                    <span
                      class="play-icon"
                      data-toggle="modal"
                      data-target="#modal-video-01"
                    >
                      <img src="assets/images/icons/play-icon.svg" />
                    </span>
                    <img src="assets/images/hero-slide.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          class="modal fade"
          id="modal-video-01"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document" data-dismiss="modal">
            <div
              class="close-mo-video-01 trans-0-4"
              data-dismiss="modal"
              aria-label="Close"
            >
              &times;
            </div>

            <div class="wrap-video-mo-01">
              <div class="video-mo-01">
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

export default Home1;
