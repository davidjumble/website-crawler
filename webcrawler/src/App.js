import React, { Component } from "react";
import Input from "./components/Input";
import * as api from "./api";
import "./App.css";

class App extends Component {
  state = {
    url: ""
  };

  render() {
    return (
      <div>
        <h1>title </h1>
        <Input />
      </div>
    );
  }

  handleClick = inputURL => {
    let url = inputURL.replace(/^https?:\/\//, "");
    let formattedURL = url.replace(/.com/g, "");
    console.log(formattedURL);
  };
}

export default App;
