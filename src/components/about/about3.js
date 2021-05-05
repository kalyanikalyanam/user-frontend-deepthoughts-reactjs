import React from "react";
import axios from "axios";
import Loaderpage from "../../components/LoaderPage";
class About3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about3s: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/about/about3s`)
      .then((res) => {
        const about3s = res.data;
        console.log(about3s);
        this.setState({ about3s, loading: true });
      });
  }
  render() {
    return (
      <>
        <section className="leadership">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="txt-left main-head">Leadership Team</h1>
                <p className="leadership-para">
                  Meet the people behind Deep Thought, it takes a group of
                  enthusiastic leaders and innovators to make things happen
                </p>
              </div>
              {this.state.about3s &&
                this.state.about3s.map((about3, index) => {
                  return (
                    <>
                      {this.state.loading ? (
                        <div
                          className="col-sm- 6 col-md-4 col-lg-3"
                          key={index}
                        >
                          <div className="content">
                            <div className="content-overlay"></div>
                            <img src="/assets/images/team/team.png" />
                            <h5>{about3.name}</h5>
                            <p>{about3.designation}</p>
                            <div className="content-details fadeIn-top">
                              {about3.twitter === "" ? (
                                <></>
                              ) : (
                                <a
                                  href={about3.twitter}
                                  className="team-social"
                                >
                                  <i className="fab fa-twitter"></i>
                                </a>
                              )}
                              {about3.facebook === "" ? (
                                <></>
                              ) : (
                                <a
                                  href={about3.facebook}
                                  className="team-social"
                                >
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              )}
                              {about3.google === "" ? (
                                <></>
                              ) : (
                                <a href={about3.google} className="team-social">
                                  <i className="fab fa-google-plus-g"></i>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="divLoader1">
                          <Loaderpage />
                        </div>
                      )}
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About3;
