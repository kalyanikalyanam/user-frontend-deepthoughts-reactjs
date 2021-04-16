import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />

        <main className="layout">
          {/* <!-- Latest --> */}
          <section className="bg0">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="register-login">
                    <h1 className="txt-center main-head">Login to continue</h1>
                    <p className="txt-center">Login to manage your account</p>

                    <div className="row justify-content-center m-0">
                      <div className="col-md-6 col-lg-5 p-0">
                        <div className="col-md-12 p-0">
                          <div className="form-group">
                            <label className="label-100">Email Address</label>
                            <input
                              type="text"
                              className="form-control input-field"
                              placeholder="sample@mail.com"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 p-0">
                          <div className="form-group">
                            <label className="label-100">Password</label>
                            <div
                              className="input-group password-field"
                              id="show_hide_password"
                            >
                              <input
                                className="form-control input-field "
                                type="password"
                                placeholder="******"
                              />
                              <div className="input-group-addon pass-icon">
                                <a href="">
                                  <i
                                    className="fa fa-eye-slash"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12 p-0">
                          <p className="txt-center sign-btn-space">
                            <a href="#" className="btn-small d-block">
                              Login
                            </a>
                          </p>
                          <p className="txt-center terms-row">
                            Do not have an account?
                            <a href="/register"> Sign Up</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
    );
  }
}

export default Login;
