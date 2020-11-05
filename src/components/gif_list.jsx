import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  render() {
    const gifs = [
      { id: "3o7qEc1FhfvPMjlSCI" },
      { id: "E2USislQIlsfm" }
    ];
    return (
      gifs.map((gif) => { return <Gif id={gif.id} key={gif.id} />; })
    );
  }
};

export default GifList;
