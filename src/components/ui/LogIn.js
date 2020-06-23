import React from "react";
// import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailError: "",
      passwordError: "",
      hasEmailError: false,
      hasPasswordError: false,
    };
  }

  // email error messages
  async setEmailState(emailInput) {
    const lowerCasedEmailInput = emailInput.toLowerCase();
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput === "")
      this.setState({
        emailError: "Please enter your email address.",
        hasEmailError: true,
      });
    else if (emailRegex.test(lowerCasedEmailInput) === false) {
      this.setState({
        emailError: "Please enter a valid email address.",
        hasEmailError: true,
      });
    } else {
      this.setState({ emailError: "", hasEmailError: false });
    }
  }

  checkHasLocalPart(passwordInput, emailInput) {
    const localPart = emailInput.split("@")[0];
    if (localPart === "") return false;
    else if (localPart.length < 4) return false;
    else return passwordInput.includes(localPart);
  }

  // password error messages
  async setPasswordState(passwordInput, emailInput) {
    const uniqChars = [...new Set(passwordInput)];
    if (passwordInput === "") {
      this.setState({
        passwordError: "Please enter a password.",
        hasPasswordError: true,
      });
    } else if (passwordInput.length < 9) {
      this.setState({
        passwordError: "Your password must be at least 9 characters.",
        hasPasswordError: true,
      });
    } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
      this.setState({
        passwordError: "Your password cannot contain your email address.",
        hasPasswordError: true,
      });
    } else if (uniqChars.length < 3) {
      this.setState({
        passwordError:
          "Your password must contain at least 3 unique characters.",
        hasPasswordError: true,
      });
    } else {
      this.setState({ passwordError: "", hasPasswordError: false });
    }
  }

  async validateAndCreateUser() {
    // email cant be blank
    // must have valid email regex
    const emailInput = document.getElementById("login-email-input").value;
    const passwordInput = document.getElementById("login-password-input").value;
    await this.setEmailState(emailInput);
    await this.setPasswordState(passwordInput, emailInput);
    if (
      this.state.hasEmailError === false &&
      this.state.hasPasswordError === false
    ) {
      const user = {
        id: getUuid(),
        email: emailInput,
        password: hash(passwordInput),
        createdAt: Date.now(),
      };
      console.log(user);
    }
  }

  render() {
    return (
      <div className="col-lg-5 offset-lg-1  col-md-8 offset-md-2 col-10 offset-1 col-xl-4">
        <div id="inside-card" className="card mt-6">
          <div className="card-body">
            <h2 className="card-title ">Welcome back</h2>
            <p className="card-text-landing">
              Log in with your email address and password.
            </p>

            <div className="form-group">
              <label className="text-muted" htmlFor="login-email-input">
                Email address
              </label>
              <input
                type="email"
                className={classnames({
                  "form-control": true,
                  "mb-2": true,
                  "is-invalid": this.state.emailError,
                })}
                id="login-email-input"
              />
            </div>
            {this.state.hasEmailError && (
              <p className="text-danger">{this.state.emailError}</p>
            )}
            <div className="form-group">
              <label className="text-muted" htmlFor="login-password-input">
                Password
              </label>
              <input
                type="password"
                className={classnames({
                  "form-control": true,
                  "mb-2": true,
                  "is-invalid": this.state.hasPasswordError,
                })}
                id="login-password-input"
              />
              {this.state.hasPasswordError && (
                <p className="text-danger">{this.state.passwordError}</p>
              )}

              <button
                to="/create-answer"
                id="logIn"
                className="btn btn-success btn-lg btn-block btn-lg landing-Link mt-5"
                onClick={() => {
                  this.validateAndCreateUser();
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
