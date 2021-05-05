import React from "react";

import { Helmet } from "react-helmet";
import axios from "axios";
// import Loaderpage from "./LoaderPage";
import renderHTML from "react-render-html";
import Header from "../header";
import Footer from "../footer";

class Privatepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", loading: false };
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    console.log(_id);
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/private/update_privatepage/${_id}`
      )
      .then((res) => {
        console.log(res.data);
        const private1 = {
          title: res.data.title,
          description: res.data.description,
        };
        console.log(private1.title);
        this.setState({
          title: private1.title,
          description: private1.description,
          loading: true,
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
            <section className="deep-cms">
              <div className="container">
                <div className="row m-0">
                  {/* <div className="col-md-2"></div> */}
                  <div className="col-md-12">
                    {" "}
                    <h1 className="main-head">{this.state.title}</h1>
                    <p>{renderHTML(this.state.description)}</p>
                  </div>
                </div>
              </div>

              {/* <div className="tab-content p-t-35">
                <div className="row">
                  <div className="col-md-12">
                    <div className="video-box-stream">
                      <h4> {this.state.title}</h4>
                      <p>{renderHTML(this.state.description)}</p>
                    </div>
                  </div>
                </div>
              </div> */}
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
        </>
      </>
    );
  }
}

export default Privatepage;
