import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

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

  // Function to call the giphy API
  // Passed to <SearchBar /> to be called from there
  search = (query) => {
    giphy('MFzKrICxFdlIKgpqMbloPeMXt3g8t2Mi').search({
      q: query,
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  // Function to change GIF in left scene to one clicked on in right scene
  // Passed to <GifList /> then each <Gif />
  setSelected = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    const { gifs, selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={gifs} setSelected={this.setSelected} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
