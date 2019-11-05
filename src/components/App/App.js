import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
//importing axios to use for GET function and GalleryList to use as a component
//also importing App.css for styling

class App extends Component {
  state = {
    imagesArray: []
  };
  //setting up an empty array to use for GET request to put image objects into

  componentDidMount = () => {
    this.getImages();
  }
  //runs getImages to display images on page load

  getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log("Response:", response.data);
      this.setState({ imagesArray: [] });
      response.data.forEach((image) => {
        this.setState({
          imagesArray: [...this.state.imagesArray, image]
        })
      })
    }).catch((error) => {
      console.log("Error: ", error);
    })
  }
  //emptying out the state's imagesArray
  //using GET request to get photos from gallery.data.js via gallery.router.js
  //taking the response (array of objects) and adding each object to this file's state array via spread operator

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Boston Sports Championships Gallery</h1>
        </header>
        <br />
        <GalleryList getRequest={this.getImages} listOfImages={this.state.imagesArray} />
      </div>
    );
  }
  //rendering the header and the GalleryList component
  //using props to pass on the getImages function and the imagesArray to child components
}

export default App;
