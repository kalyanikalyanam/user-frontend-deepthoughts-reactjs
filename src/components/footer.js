import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="bg12 footer-space">
          <div className="container">
            <div className="row">
              <div className="footer-box-1 col-lg-7 col-md-6 p-b-20 p-l-0">
                <div className="footer-menu">
                  <h1>DEEP THOUGHT</h1>
                  <p>
                    2nd floor, Tejasvi Vidyaranya,<br></br>
                    Kakateeya Nagar, Habsiguda,<br></br>
                    Hyderabad
                  </p>
                </div>
              </div>

              <div className="footer-box-2 col-lg-3 col-md-3 p-b-20">
                <div className="footer-menu">
                  <h1>Explore</h1>
                  <ul>
                    <li>
                      <a href="/programmes">Programmes</a>
                    </li>
                    <li>
                      <a href="">Events and Talks</a>
                    </li>
                    <li>
                      <a href="">Quiz</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-box-3 col-lg-2 col-md-3 p-b-20 p-r-0">
                <div className="footer-menu">
                  <h1>Resources</h1>
                  <ul>
                    <li>
                      <a href="">Impact</a>
                    </li>
                    <li>
                      <a href="">Revolution</a>
                    </li>
                    <li>
                      <a href="">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg12">
          <div className="container size-h-4 p-tb-15 bdr-top-fotter">
            <div className="row">
              <span className="f1-s-1 cl0 txt-left col-md-6 p-0 line-copy">
                © Copyright 2021. All Rights Reserved.
              </span>
              <span className="f1-s-1 cl0 txt-right col-md-6 p-0">
                <ul className="social-links">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
