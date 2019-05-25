import React, { Component } from "react";
import Images from "./Images";

class Main extends Component {
  state = {
    breeds: "",
    images: ""
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

  fetchData = e => {
    const breed = e.target.elements.breeds.value;
    const count = Number(e.target.elements.imageNumber.value);

    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          images: data.message
        });
      });
    e.preventDefault();
  };

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
        <form onSubmit={this.fetchData} className="form">
          {options}
          <select name="imageNumber">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <button>Generate</button>
        </form>
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default Main;
