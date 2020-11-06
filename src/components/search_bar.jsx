import React, { Component } from 'react';

class SearchBar extends Component {
  // Called for each key stroke changing the input's value
  // Uses function passed from <App /> to call API with input's value
  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
