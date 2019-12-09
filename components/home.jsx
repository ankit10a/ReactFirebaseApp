import React, { Component } from "react";
import fire from "../config/fire";
class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <div>
        <h1>Welcome user</h1>
        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
}

export default Home;
