import React from "react";
import landingLogo from "../../img/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="background-image">
        <div className="container">
          <div id="landing-brand" className="row">
            <div className="col-lg-1 offset-lg-0 col-md-2 col-sm-12 offset-sm-1 col-10 offset-2 col-xl-1">
              <img
                className="bear-logo "
                src={landingLogo}
                alt="White Bear Landing Logo"
              />
            </div>

            <div className="col-xl-7 offset-xl-1 col-lg-6 offset-lg-2 col-md-6 offset-md-2 col-sm-12 offset-sm-2 col-11 offset-1">
              <h1 className="logo-text">White Bear</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1 col-xl-4">
              {/* first login card */}
              <div id="inside-card" className="card mt-6">
                <div id="sign-up-card" className="card-body">
                  <h2 className="card-title ">Nice to meet you</h2>
                  <p className="card-text-landing mb-6">
                    Sign up for White Bear. Free forever.
                  </p>
                  <Link
                    to="/create-answer"
                    id="sign-up-button"
                    type="button"
                    className="btn btn-success btn-lg btn-block btn-lg landing-button"
                  >
                    Sign up
                  </Link>
                  {/* second login card */}
                  <div id="sign-up-card2">
                    <p className="card-text-landing sign-up-text">
                      Let's get you signed up.
                    </p>
                    <div className="form-group">
                      <label className="text-muted" htmlFor="inputEmail1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control input-outline border"
                        id="inputEmail1"
                      />
                    </div>
                    {/* email error message */}
                    <div className="invalidEmailFeedback"></div>
                    <div className="form-group">
                      <label className="text-muted" htmlFor="inputPassword1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control input-outline border"
                        id="inputPassword1"
                      />
                    </div>
                    {/* password error messages */}
                    <div className="invalidPasswordFeedback"></div>
                    <Link
                      to="/create-answer"
                      id="letsGo"
                      className="btn btn-success btn-lg btn-block btn-lg landing-Link"
                    >
                      Let's go!
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="col-lg-5 offset-lg-1  col-md-8 offset-md-2 col-10 offset-1 col-xl-4">
              <div id="inside-card" className="card mt-6">
                <div className="card-body">
                  <h2 className="card-title ">Welcome back</h2>
                  <p className="card-text-landing">
                    Log in with your email address and password.
                  </p>

                  <div className="form-group">
                    <label className="text-muted" htmlFor="inputEmail2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control input-outline border"
                      id="inputEmail2"
                    />
                  </div>
                  <div className="invalid-feedback" id="emailError2">
                    Please enter your email address
                  </div>
                  <div className="form-group">
                    <label className="text-muted" htmlFor="inputPassword2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control input-outline border"
                      id="inputPassword2"
                    />
                    <div
                      className="invalid-feedback"
                      id="passwordEnterError2"
                      style={{ display: "none" }}
                    >
                      Please enter your password
                    </div>
                    <div
                      className="invalid-feedback"
                      id="passwordLengthError2"
                      style={{ display: "none" }}
                    >
                      Your password must be at least 9 characters
                    </div>

                    <Link
                      to="/create-answer"
                      id="logIn"
                      className="btn btn-success bt-lg  float-right landing-Link"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
