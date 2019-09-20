import React, { Component } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';


class App extends Component {
  state = {
    imagesArray: []
  };

  componentDidMount = () => { 
    this.getImages();
  }

  getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log("Response:", response.data);
      this.setState({imagesArray:[]});
      response.data.forEach((image) => {
        this.setState({
          imagesArray: [...this.state.imagesArray, image]
        })
      })
    }).catch((error) => {
      console.log("Error: ", error);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Boston Sports Championships Gallery</h1>
          <h2 className="App-title">Since 2000</h2>
        </header>
        <br/>
        {this.state.images}
        <GalleryList getRequest={this.getImages} listOfImages={this.state.imagesArray}/>
      </div>
    );
  }
}

export default App;
