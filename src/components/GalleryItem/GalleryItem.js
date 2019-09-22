import React, { Component } from 'react';
import Axios from 'axios';

class GalleryList extends Component {
    state = {
        displayImage: true
    }

    photoClickToggle = () => {
        console.log("CLICKED ON PHOTO");
        this.setState({
            displayImage: !this.state.displayImage
        })
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
        const{displayImage} = this.state;
        return (
            <>
            {displayImage === true ? <img src={this.props.photo.path} alt={this.props.photo.description} onClick={this.photoClickToggle}></img> :""}
            {displayImage === false ? <p onClick={this.photoClickToggle}> {this.props.photo.description}</p> :""}
            <br/>
            <button onClick={this.likeClick}>LIKE</button><br/>
            <p>Likes: {this.props.photo.likes}</p>
            <hr/>
            </>
        );
    }
}

export default GalleryList;