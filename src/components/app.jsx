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
  }

  search = (query) => {
    giphy.search({
      q: { query },
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
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
