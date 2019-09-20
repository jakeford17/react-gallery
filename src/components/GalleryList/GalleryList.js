import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <>
            {this.props.listOfImages.map((photo) => {
                return <h2 key={photo.id}><br/><GalleryItem photo={photo}/></h2>
            })}
            </>
        );
    }
}

export default GalleryList;