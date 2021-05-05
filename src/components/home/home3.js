import React from "react";
import axios from "axios";
// import Carousel from "react-elastic-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
class Home3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home3s: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/home/home3s`)
      .then((res) => {
        const home3s = res.data;
        console.log(home3s);
        this.setState({ home3s });
      });
  }

  render() {
    return (
      <section className="bg-white scrolls-space">
        <div className="container">
          <div className="row m-0">
            <div id="owl-demo2" className="owl-carousel scroll-two">
              <AliceCarousel
                mouseTracking
                items={1}
                disableButtonsControls={false}
                disableDotsControls={true}
              >
                {this.state.home3s &&
                  this.state.home3s.map((home3, index) => {
                    return (
                      <>
                        {/* {this.state.loading ? ( */}
                        <div className="item" key={index}>
                          <div className="row">
                            <div className="col-lg-6">
                              <img
                                // src="/assets/images/Placeholder-2.jpg"
                                src={home3.image}
                                alt="Deep thought"
                              />
                            </div>

                            <div className="col-lg-6 slider-text right">
                              <h1 className="main-head">{home3.title}</h1>
                              <h5>{home3.subtitle} </h5>
                              <p>{home3.description}</p>
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

export default Home3;
