import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import axios from 'axios';


class GalleryList extends Component {
    

    render() {
        return (
            <ul>
            {this.props.listOfImages.map((photo) => <li key={photo.id}><GalleryItem photo={photo} getRequest={this.props.getRequest}/></li>)}
            </ul>
        );
    }
}

export default GalleryList;