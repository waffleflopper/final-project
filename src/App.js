import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageform/ImageLinkForm';
import Rank from './components/rank/Rank';

import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({
  apiKey: '098385f82e6c430fafc059b485a02d00',
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
    }
  }

  onInputChange = (evt) => {
    this.setState({input: evt.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input});
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(err) {
          console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
            imgURL={this.state.imgURL}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
