import React, { Component } from 'react';

class Gif extends Component {
  render() {
    // const id = "3o7qEc1FhfvPMjlSCI";
    // const id = "E2USislQIlsfm";
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif"></img>
    );
  }
};

export default Gif;
