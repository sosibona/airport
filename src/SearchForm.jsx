import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    value: "",
    flyghts: []
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    console.log(this.state.value)
    return (
      <div className="form">
        <i className="fas fa-search form__input-icon"></i>
        <input
          className="form__input"
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
          placeholder="Airline, destination or flight #"
        />
        <button className="form__search-btn">search</button>
      </div>
    );
  }
}

export default SearchForm;
