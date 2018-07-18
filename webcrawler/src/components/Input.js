import React, { Component } from "react";

class Input extends Component {
  state = {
    inputURL: ""
  };

  handleChanges = ({ target: { value } }) => {
    this.setState({ inputURL: value });
  };

  render() {
    return (
      <div className="input">
        <input onChange={this.handleChanges} placeholder="URL TO TEST" />
        <button />
      </div>
    );
  }
}

export default Input;
