import React, { Component } from 'react';

/*class SearchBar extends Component {
  render() {
    return (
      <input type="text" className="form-control form-search" />
    );
  }
};*/

const SearchBar = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input type="text" className="form-control form-search" onChange={handleChange} />
  );
};

export default SearchBar;
