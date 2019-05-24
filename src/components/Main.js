import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <form className="form">
          <select name="breeds">
            <option value="golden">golden</option>
            <option value="ice">ice</option>
            <option value="spice">spice</option>
            <option value="nice">nice</option>
          </select>
          <select name="imageNumber">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <button>Generate</button>
        </form>
      </div>
    );
  }
}

export default Main;
