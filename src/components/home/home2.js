import React from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home2s: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/home/home2s`)
      .then((res) => {
        const home2s = res.data;
        console.log(home2s);
        this.setState({ home2s });
      });
  }

  render() {
    return (
      <section className="bg-white scrolls-space">
        <div className="container">
          <div className="row m-0">
            <div id="owl-demo" className="owl-carousel scroll-one">
              <AliceCarousel
                mouseTracking
                items={1}
                disableButtonsControls={false}
                disableDotsControls={true}
              >
                {this.state.home2s &&
                  this.state.home2s.map((home2, index) => {
                    return (
                      <>
                        {/* {this.state.loading ? ( */}
                        <div className="item" key={index}>
                          <div className="row">
                            <div className="col-lg-6 slider-text">
                              <h1 className="main-head">{home2.title}</h1>
                              <h5>{home2.subtitle}</h5>

                              <p>{home2.description}</p>
                            </div>
                            <div className="col-lg-6">
                              <img
                                // src="/assets/images/Placeholder.jpg"
                                src={home2.image}
                                alt="Deep thought"
                              />
                            </div>
                          </div>
                        </div>

                        {/* ) : (
                          <div className="divLoader1">
                            <Loaderpage />
                          </div>
                        )} */}
                      </>
                    );
                  })}
              </AliceCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home2;
