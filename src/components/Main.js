import React, { Component } from "react";

class Main extends Component {
  state = {
    breeds: ""
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => {
        this.setState({
          breeds: Object.keys(data.message)
        });
      });
  }
  render() {
    let options;
    const { breeds } = this.state;
    if (breeds !== "") {
      options = (
        <select name="breeds">
          {breeds.map(breed => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      );
    }
    return (
      <div className="container">
        <form className="form">
          {options}
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
