import React, { Component } from "react";
import Logo from "../images/react.png";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">Welcome to React</div>
        <img src={Logo} />
      </div>
    );
  }
}

export default App;
