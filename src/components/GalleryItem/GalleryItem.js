import React, { Component } from 'react';
import axios from 'axios';
//importing axios to use for the "Like" function, which uses a PUT request

class GalleryList extends Component {
    state = {
        displayImage: true
    }
    //making in GalleryItem state object to allow for toggling

    photoClickToggle = () => {
        this.setState({
            displayImage: !this.state.displayImage
        })
    }
    //function that toggles displayImage boolean when image is clicked

    likeClick = () => {
        axios({
            method: 'PUT',
            url: 'gallery/like/' + this.props.photo.id
        }).then((result) => {
            this.props.getRequest();
        })
    }
    //using the PUT request on gallery.router.js to add likes when an image's "Like" button is clicked
    //referencing the id of the photo object passed on in the mapping function of GalleryList
    //running the getRequest function to re-render the image with the new number of likes

    render() {
        const{displayImage} = this.state;
        //using a const to reference the object in this.state, which has a boolean value (set to true to start)
        return (
            <>
            {displayImage === true ? <img src={this.props.photo.path} alt={this.props.photo.description} onClick={this.photoClickToggle}></img> :""}
            {displayImage === false ? <div className="toggleClass" onClick={this.photoClickToggle}> {this.props.photo.description}</div> :""}
            <br/>
            <button onClick={this.likeClick}>LIKE</button><br/>
            <p>Likes: {this.props.photo.likes}</p>
            <hr/>
            </>
        );
    }
    //if our const is true (which it will be on page load because it is set in state), conditional operator will render the image using the image path
    //if our const is false (happens if image is clicked, triggering the photoClickToggle function),...
    //...a div containing the description will appear in its place;...
    //...this div also contains the photoClickToggle function to allow for toggling back and forth
    //each image will gave a like button that will fire off the likeClick function on click to add likes
    //the "Like" counter references the "likes" key in each object that is held in gallery.data.js...
    //...these objects are passed here through GalleryList.js and App.js (which gets them using a GET function)
}

export default GalleryList;