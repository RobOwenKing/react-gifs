import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const giphy = require('giphy-api')();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "3o7qEc1FhfvPMjlSCI" },
        { id: "E2USislQIlsfm" }
      ],
      selectedGifId: "3o7qEc1FhfvPMjlSCI"
    };

    this.search('test');
  }

  search = (query) => {
    giphy.search({
      q: 'pokemon',
      limit: 10
    }, function (err, res) {
      // Res contains gif data!
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
