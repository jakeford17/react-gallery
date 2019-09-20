import React, { Component } from 'react';
import Axios from 'axios';

class GalleryList extends Component {
    photoClick = () => {
        console.log("CLICKED ON PHOTO");
    }

    likeClick = () => {
        Axios({
            method: 'PUT',
            url: 'gallery/like/' + this.props.photo.id
        }).then((result) => {
            this.props.getRequest();
        })
    }

    render() {
        return (
            <>
            <img src={this.props.photo.path} alt={this.props.photo.description} onClick={this.photoClick}></img><br/>
            <button onClick={this.likeClick}>LIKE</button><br/>
            <p>Likes: {this.props.photo.likes}</p>
            <hr/>
            </>
        );
    }
}

export default GalleryList;