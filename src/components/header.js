import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/admin/menus`)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      });
  }
  render() {
    return (
      <header>
        <div className="container-menu-desktop">
          <div className="wrap-header-mobile">
            <div className="logo-mobile">
              <a href="/">
                <img src="/assets/images/logo/logo.svg" alt="IMG-LOGO" />
              </a>
            </div>

            <div className="login-search-mobile">
              <span className="search-iocn">
                <i className="fas fa-search"></i>
              </span>
            </div>

            {/* <!-- Button show menu --> */}

            <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>

          {/* <!-- Menu Mobile --> */}
          <div className="menu-mobile">
            <ul className="main-menu-m">
              {this.state.menus &&
                this.state.menus.map((menu, index) => {
                  return (
                    <li>
                      <a href="/programmes">{menu.menu}</a>
                      <ul className="sub-menu-m">
                        <li>
                          <a href="#">Workshops</a>
                        </li>
                        <li>
                          <a href="#">Socratic Dialogue</a>
                        </li>
                        <li>
                          <a href="#">Questionnaires</a>
                        </li>
                        <li>
                          <a href="#">Design Thinking</a>
                        </li>
                      </ul>
                      <span className="arrow-main-menu-m">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </li>
                  );
                })}

              {/* <li>
                <a href="#">Impact</a>
                <ul className="sub-menu-m">
                  <li>
                    <a href="#">Anecdotes</a>
                  </li>
                  <li>
                    <a href="#">Learning Communities</a>
                  </li>
                  <li>
                    <a href="#">Collaborations</a>
                  </li>
                  <li>
                    <a href="#">Scholarships</a>
                  </li>
                  <li>
                    <a href="#">Success Stories</a>
                  </li>
                </ul>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>

              <li>
                <a href="#">Revolution</a>
                <ul className="sub-menu-m">
                  <li>
                    <a href="#">Pedagogy</a>
                  </li>
                  <li>
                    <a href="#">Curriculum</a>
                  </li>
                  <li>
                    <a href="#">Content Engines</a>
                  </li>
                  <li>
                    <a href="#">Learning Rituals</a>
                  </li>
                </ul>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li>

              <li>
                <a href="#">Quizzes</a>
                <ul className="sub-menu-m">
                  <li>
                    <a href="#">MatSci</a>
                  </li>
                  <li>
                    <a href="#">Olympiad</a>
                  </li>
                  <li>
                    <a href="#">Entertainment</a>
                  </li>
                  <li>
                    <a href="#">YoungCEO</a>
                  </li>
                </ul>
                <span className="arrow-main-menu-m">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </span>
              </li> */}

              <li>
                <a href="#">Blogs</a>
              </li>

              <li>
                <a href="/about">About Us </a>
              </li>

              <li>
                <div className="login-search-mobile">
                  <span className="login">
                    <a href="/login" className="btn-small">
                      Login
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="wrap-logo container">
            {/* <!-- Logo desktop -->*/}
            <div className="logo">
              <a href="/">
                <img src="/assets/images/logo/logo.svg" alt="LOGO" />
              </a>
            </div>

            {/* <!-- Banner --> */}

            <div className="wrap-main-nav">
              <div className="main-nav">
                <nav className="menu-desktop">
                  <ul className="main-menu">
                    {this.state.menus &&
                      this.state.menus.map((menu, index) => {
                        return (
                          <li className="mega-menu-item">
                            <a href="/programmes">{menu.menu}</a>
                            <div className="sub-mega-menu">
                              <div className="row col-12 p-0 m-0">
                                <div className="col-md-6 sub-space">
                                  <h1>
                                    <img src="/assets/images/icons/workshop-icon.svg" />
                                    Workshops
                                  </h1>
                                  <p>
                                    Short two lines description about the
                                    programme section
                                  </p>
                                </div>
                                <div className="col-md-6 sub-space">
                                  <h1>
                                    <img src="/assets/images/icons/socratic-dialogue.svg" />
                                    Socratic Dialogue
                                  </h1>
                                  <p>
                                    Short two lines description about the
                                    programme section
                                  </p>
                                </div>
                                <div className="col-md-6 sub-space">
                                  <h1>
                                    <img src="/assets/images/icons/questionnaires.svg" />
                                    Questionnaires
                                  </h1>
                                  <p>
                                    Short two lines description about the
                                    programme section
                                  </p>
                                </div>
                                <div className="col-md-6 sub-space">
                                  <h1>
                                    <img src="/assets/images/icons/design-thinking.svg" />
                                    Design Thinking
                                  </h1>
                                  <p>
                                    Short two lines description about the
                                    programme section
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}

                    {/* <li className="mega-menu-item">
                      <a href="#">Impact </a>
                      <div className="sub-mega-menu">
                        <div className="row col-12 p-0 m-0">
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/anecdotes.svg" />
                              Anecdotes
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/learning-communities.svg" />
                              Learning Communities
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/collaborations.svg" />
                              Collaborations
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/scholarships.svg" />
                              Scholarships
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/success-stories.svg" />
                              Success Stories
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="mega-menu-item">
                      <a href="#">Revolution</a>

                      <div className="sub-mega-menu">
                        <div className="row col-12 p-0 m-0">
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/pedagogy.svg" />
                              Pedagogy
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/curriculum.svg" />
                              Curriculum
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/content-engines.svg" />
                              Content Engines
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/learning-rituals.svg" />
                              Learning Rituals
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="mega-menu-item">
                      <a href="#">Quizzes</a>

                      <div className="sub-mega-menu">
                        <div className="row col-12 p-0 m-0">
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/mat-sci.svg" />
                              MatSci
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/olympiad.svg" />
                              Olympiad
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/entertainment.svg" />
                              Entertainment
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                          <div className="col-md-6 sub-space">
                            <h1>
                              <img src="/assets/images/icons/youngCEO.svg" />
                              YoungCEO
                            </h1>
                            <p>
                              Short two lines description about the programme
                              section
                            </p>
                          </div>
                        </div>
                      </div>
                    </li> */}

                    <li>
                      <a href="#">Blogs</a>
                    </li>
                    <li>
                      <a href="/about">About Us </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="login-search-desktop">
              <span className="search-iocn">
                <i className="fas fa-search"></i>
              </span>
              <span className="login">
                <a href="/login" className="btn-small">
                  Login
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
