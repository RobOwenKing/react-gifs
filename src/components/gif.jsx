import React, { Component } from 'react';

class Gif extends Component {
  // When the component is clicked on, update the Gif in the left scene
  // Uses function passed from <App /> via <GifList />
  handleClick = () => {
    this.props.setSelected(this.props.id);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      // <div> around the <img> to take role
      // onKeyDown and tabIndex for accessibility reasons
      <div onClick={this.handleClick} onKeyDown={this.handleClick} role="menuitem" tabIndex={0}>
        <img src={src} className="gif" alt="" />
      </div>
    );
  }
}

export default Gif;
