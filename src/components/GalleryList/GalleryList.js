import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
//importing GalleryItem to use as a component

class GalleryList extends Component {
    render() {
        return (
            <ul>
            {this.props.listOfImages.map((photo) => <li key={photo.id}><GalleryItem photo={photo} getRequest={this.props.getRequest}/></li>)}
            </ul>
        );
    }
}
//mapping through the listOfImages array (passed here from App.js) and adding a GalleryItem li for each image object (all inside a ul)
//via props, passing each photo object and the getImages/getRequest function to GalleryItem

export default GalleryList;