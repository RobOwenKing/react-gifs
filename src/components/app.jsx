import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "3o7qEc1FhfvPMjlSCI" },
      { id: "E2USislQIlsfm" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="3o7qEc1FhfvPMjlSCI" />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
