import React, { Component } from "react";
import fire from "../config/fire";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firebase: "",
      formtitle: "Login",
      loginBtn: true
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  register = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ fireErrors: error.message }));
  };
  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => this.setState({ fireErrors: error.message }));
  };
  getAction = action => {
    if (action === "reg") {
      this.setState({
        formtitle: "Register New User",
        loginBtn: false,
        fireErrors: ""
      });
    } else {
      this.setState({ formtitle: "login", loginBtn: true, fireErrors: "" });
    }
  };
  render() {
    const { formtitle, email, password } = this.state;
    let errorNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;
    let submitBtn = this.state.loginBtn ? (
      <input
        className="loginBtn"
        type="submit"
        value="Login"
        onClick={this.login}
      />
    ) : (
      <input
        className="loginBtn"
        type="submit"
        value="Register"
        onClick={this.register}
      />
    );
    let login_register = this.state.loginBtn ? (
      <button className="registerBtn" onClick={() => this.getAction("reg")}>
        Register
      </button>
    ) : (
      <button className="registerBtn" onClick={() => this.getAction("login")}>
        Login
      </button>
    );
    return (
      <div className="form_block">
        <div id="title">{formtitle}</div>
        <form>
          E-mail:
          <input
            value={email}
            name="email"
            placeholder="Enter your Email"
            type="text"
            onChange={this.handleChange}
          />
          {errorNotification}
          Password :
          <input
            value={password}
            name="password"
            placeholder="Enter your password"
            type="password"
            onChange={this.handleChange}
          />
          {submitBtn}
        </form>
        {login_register}
      </div>
    );
  }
}

export default LoginRegister;
