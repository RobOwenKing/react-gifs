import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  // For each gif in the passed array, return a <Gif /> component
  render() {
    const { gifs, setSelected } = this.props;
    return (
      gifs.map((gif) => {
        return <Gif id={gif.id} key={gif.id} setSelected={setSelected} />;
      })
    );
  }
}

export default GifList;
