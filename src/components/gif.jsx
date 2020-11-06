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
      <img src={src} className="gif" onClick={this.handleClick}></img>
    );
  }
}

export default Gif;
