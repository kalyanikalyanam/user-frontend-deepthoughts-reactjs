import React from "react";
import axios from "axios";
import Loaderpage from "../../components/LoaderPage";
class About2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about2s: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/about/about2s`)
      .then((res) => {
        const about2s = res.data;
        console.log(about2s);
        this.setState({ about2s, loading: true });
      });
  }
  render() {
    return (
      <>
        <section className="values-about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="txt-left main-head value-margin">
                  Values
                  <br />& Principles
                </h1>
              </div>

              {this.state.about2s &&
                this.state.about2s.map((about2, index) => {
                  return (
                    <>
                      {this.state.loading ? (
                        <div className="col-md-6 col-lg-4" key={index}>
                          <div className="values">
                            <img src={about2.image} />
                            <h4>{about2.title}</h4>
                            <p>{about2.description}</p>
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

export default About2;
