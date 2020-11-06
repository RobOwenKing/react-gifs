import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.setSelected(this.props.id);
  }

  render() {
    // const id = "3o7qEc1FhfvPMjlSCI";
    // const id = "E2USislQIlsfm";
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div onClick={this.handleClick} onKeyDown={this.handleClick} role="menuitem" tabIndex={0}>
        <img src={src} className="gif" alt="" />
      </div>
    );
  }
}

export default Gif;
