import React, { Component } from 'react';

import Navigation from './components/navigation/Navigation';
import ImageLinkForm from './components/imageform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';

import {pink, grey}from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'

import Clarifai from 'clarifai';

import './App.css';

const app = new Clarifai.App({
  apiKey: '098385f82e6c430fafc059b485a02d00',
})

// THEME INFORMATION
const darkTheme = createMuiTheme({
  palette: {
      primary: {
        main: grey[800],
      },
      secondary: {
          main: pink[700],
      },
      type: 'dark',
  }
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: pink[800],
      },
      secondary: {
          main: pink[700],
      },
      type: 'light',
  }
});

//REACT APP STARTS HERE

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      lightTheme: false,
      box: {},
      route: 'signin',
    }
  }

  onThemeChange = () => {
    this.setState({lightTheme: !this.state.lightTheme})
  }

  onInputChange = (evt) => {
    this.setState({input: evt.target.value})
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState({imgURL: this.state.input});
    app.models.predict(
      "a403429f2ddf4b49b307e318f00e528b", 
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  showContent = () => {
    switch(this.state.route) {
      case 'signin':
        return <Signin onRouteChange={this.onRouteChange}/>;
      case 'register':
        return <Register onRouteChange={this.onRouteChange}/>;
      case 'home':
        return <div class="nothing-wrapper">
                  <Rank />
                  <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                    imgURL={this.state.imgURL}
                    box={this.state.box}
                  />
                </div>;
      default:
        return null;
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.lightTheme ? lightTheme : darkTheme}>
      <CssBaseline />
      {/*LEAVE ABOVE LINE ALONE */}

      <div className="App">
        <Navigation 
          route={this.state.route} 
          themeClicker={this.onThemeChange} 
          lightTheme={this.state.lightTheme}
          onRouteChange={this.onRouteChange}
        />
        <div className="container">
          {this.showContent()}
        </div>
      </div>

      {/*LEAVE BELOW ALONE*/}
      </MuiThemeProvider>
    );
  }
}

export default App;
