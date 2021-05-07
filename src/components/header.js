import React from "react";

import axios from "axios";
import Loaderpage from "../components/LoaderPage";
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      sideBar: false,
    };

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://deepthoughts-nodejs.herokuapp.com/admin/menus`)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      });

    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/blog/update_blog/608a5f3bb23d99001525b0ce`
      )
      .then((res) => {
        console.log(res.data);
        const blog = {
          url: res.data.url,
        };
        console.log(blog.url);
        this.setState({
          url: blog.url,
        });
      });
  }
  handleSidebar() {
    this.setState({
      sideBar: !this.state.sideBar,
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

            {/* <div className="login-search-mobile">
              <span className="search-iocn">
                <i className="fas fa-search"></i>
              </span>
            </div> */}

            {/* <!-- Button show menu --> */}

            {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div> */}
            {/* <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
              <span className="hamburger-box">
                <span className="hamburger-inner"> */}
            <button
              onClick={this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}
            >
              <span />
              <span />
              <span />
            </button>
            {/* </span>
              </span>
            </div> */}
          </div>
          <nav>
            <ul
              className="mainNav"
              style={this.state.sideBar ? { transform: "translateX(0)" } : null}
            >
              {this.state.menus &&
                this.state.menus.map((menu, index) => {
                  return (
                    <li>
                      <a
                        href={`/SubMenuList/${menu.menu}`}
                        className={
                          this.isPathActive(`/SubMenuList/${menu.menu}`)
                            ? "active"
                            : null
                        }
                        className="mainNavLink"
                      >
                        {menu.menu}
                      </a>
                    </li>
                  );
                })}

              <li>
                <Link to="/blog" className="mainNavLink">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="mainNavLink">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* <!-- Menu Mobile --> */}

          <div className="menu-mobile">
            {/* <ul className="main-menu-m">
              {this.state.menus &&
                this.state.menus.map((menu, index) => {
                  return (
                    <li>
                      <a href={menu.menu}>{menu.menu}</a>
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
            </ul> */}
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
                            <a
                              href={`/SubMenuList/${menu.menu}`}
                              className={
                                this.isPathActive(`/SubMenuList/${menu.menu}`)
                                  ? "active"
                                  : null
                              }
                            >
                              {menu.menu}
                            </a>
                            <SubMenuView MenuName={menu.menu} />{" "}
                          </li>
                        );
                      })}

                    <li>
                      <a
                        href="/blog"
                        className={this.isPathActive("/blog") ? "active" : null}
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className={
                          this.isPathActive("/about") ? "active" : null
                        }
                      >
                        About Us{" "}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="login-search-desktop">
              {/* <span className="search-iocn">
                <i className="fas fa-search"></i>
              </span> */}
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
  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

class SubMenuView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {
    let selectedMenuName = this.props.MenuName;
    axios
      .get(
        `https://deepthoughts-nodejs.herokuapp.com/admin/submenuvalues/${selectedMenuName}`
      )
      .then((res) => {
        const submenus = res.data;
        console.log(submenus);
        this.setState({ submenus, loading: true });
      });
  }

  render() {
    var subSubMenuList =
      this.state.submenus &&
      this.state.submenus.map((data, index) => {
        return (
          <div className="col-md-6 sub-space" key={index}>
            <h1>
              {this.state.loading ? (
                <img src={data.image} />
              ) : (
                <div className="divLoader1">
                  <Loaderpage />
                </div>
              )}

              <a
                // href={`/PostList/${data.submenu}`}
                href={`/PostList/${data.submenu}/${data.menu}`}
                // className={
                //   this.isPathActive1(`/PostList/${data.submenu}`)
                //     ? "active"
                //     : null
                // }
              >
                {data.submenu}
              </a>
            </h1>
            <p>{data.description}</p>
          </div>
        );
      });

    return (
      <>
        <div className="sub-mega-menu">
          <div className="row col-12 p-0 m-0">{subSubMenuList} </div>
        </div>
      </>
    );
  }
  // isPathActive(path) {
  //   return this.props.location.pathname.startsWith(path);
  // }
}
export default withRouter(Header);
