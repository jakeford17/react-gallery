import React, { Component } from 'react';

class GalleryList extends Component {
    photoClick = () => {
        console.log("CLICKED ON PHOTO");
    }

    likeClick = () => {
        console.log("CLICKED ON LIKE BUTTON");
    }

    render() {
        return (
            <>
            <img src={this.props.photo.path} alt={this.props.photo.description} onClick={this.photoClick}></img><br/>
            <button onClick={this.likeClick}>LIKE</button><br/>
            <p>Likes: {this.props.photo.likes}</p>
            </>
        );
    }
}

export default GalleryList;