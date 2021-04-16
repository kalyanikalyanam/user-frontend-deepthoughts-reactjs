import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
class Register extends React.Component {
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
                    <h1 className="txt-center main-head">
                      Create your account
                    </h1>
                    <p className="txt-center">
                      Join and be part of the Revolution today
                    </p>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Full Name</label>
                          <input
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Parent Name</label>
                          <input
                            type="text"
                            className="form-control input-field"
                            placeholder="Enter parent full name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">DOB</label>
                          <div className="input-group password-field">
                            <input
                              type="text"
                              className="form-control input-field"
                              data-provide="datepicker"
                              data-date-format="dd M, yyyy"
                              data-date-autoclose="true"
                              placeholder="Select a date;"
                            />

                            <div className="input-group-addon  pass-icon">
                              <i className="far fa-calendar-alt"></i>
                            </div>
                          </div>
                          {/* <!-- input-group --> */}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">School</label>
                          <select
                            className="selectpicker form-control input-field"
                            data-container="body"
                            data-live-search="false"
                            title="Select your school"
                            data-hide-disabled="true"
                          >
                            <option>School Name 1</option>
                            <option>School Name 2</option>
                            <option>School Name 3</option>
                            <option>School Name 4</option>
                            <option>School Name 5</option>
                            <option>School Name 6</option>
                            <option>School Name 7</option>
                            <option>School Name 8</option>
                            <option>School Name 9</option>
                            <option>School Name 10</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Grade</label>
                          <select
                            className="selectpicker form-control input-field"
                            data-container="body"
                            data-live-search="false"
                            title="Select your grade"
                            data-hide-disabled="true"
                          >
                            <option>
                              Stepping Stones{" "}
                              <span className="grade">(III-V)</span>
                            </option>
                            <option>
                              Runway <span className="grade">(V-VII)</span>
                            </option>
                            <option>
                              Highfliers <span className="grade">(VIII-X)</span>
                            </option>
                            <option>
                              Self Explorers <span className="grade">(XI)</span>
                            </option>
                            <option>
                              Problem Solvers{" "}
                              <span className="grade">(XII)</span>
                            </option>
                            <option>
                              ReLearners{" "}
                              <span className="grade">(Adult Learners)</span>
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 d-none-mobile">
                        <div className="form-group">&nbsp;</div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Email Address</label>
                          <input
                            type="text"
                            className="form-control input-field"
                            placeholder="sample@mail.com"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
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

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Mobile</label>
                          <input
                            type="text"
                            className="form-control input-field"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="label-100">Access Code</label>
                          <input
                            type="text"
                            className="form-control input-field"
                            placeholder="Access Code"
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <p className="txt-center sign-btn-space">
                          <a href="#" className="btn-small">
                            Sign Me Up
                          </a>
                        </p>
                        <p className="txt-center terms-row">
                          By signing up, I agree to the{" "}
                          <span className="bold">Terms and Conditions</span>
                        </p>
                        <p className="txt-center terms-row">
                          Already have an account? <a href="/login">Login</a>
                        </p>
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

export default Register;
