import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const giphy = require('giphy-api')();

class App extends Component {
/*  constructor(props) {

  }

  const search = (query) => {
    giphy.search({
      q: 'pokemon',
      limit: 10
    }, function (err, res) {
      // Res contains gif data!
    });
  }*/

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
