import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import axios from 'axios';


class GalleryList extends Component {
    

    render() {
        return (
            <>
            {this.props.listOfImages.map((photo) => <h2 key={photo.id}><GalleryItem photo={photo} getRequest={this.props.getRequest}/></h2>)}
            </>
        );
    }
}

export default GalleryList;