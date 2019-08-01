import React, { Component } from "react";

class Logout extends Component {
  componentWillMount() {
    localStorage.clear();
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>Logging Out</h1>
      </div>
    );
  }
}

export default Logout;
