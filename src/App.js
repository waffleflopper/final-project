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

import API_URL from './serverInfo';

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
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
      },
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
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
        if (response) {
          fetch(`${API_URL}/image`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            }),
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count}))
          });
        } //end if
      }) //end predict.then
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false});
      route = 'signin';
    }

    if (route === 'home') this.setState({isSignedIn: true});
    this.setState({route: route});
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    }});
  }

  showContent = () => {
    switch(this.state.route) {
      case 'signin':
        return <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
      case 'register':
        return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>;
      case 'home':
        return <div className="nothing-wrapper">
                  <Rank name={this.state.user.name} entries={this.state.user.entries} />
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
          isSignedIn={this.state.isSignedIn}
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
