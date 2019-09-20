import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';


class GalleryList extends Component {
    putRequest = () => {
    axios({
        method: 'PUT',
        url: '/gallery'
      })
    }

    render() {
        return (
            <>
            {this.props.listOfImages.map((photo) => {
                return <h2 key={photo.id}><br/><GalleryItem photo={photo} putRequest={() => {
                    axios({
                        method: 'PUT',
                        url: '/gallery/like/'+ photo.id
                      }).then((result) => {
                        this.props.getRequest();
                      })
                    }}
                    /></h2>
            })}
            </>
        );
    }
}

export default GalleryList;