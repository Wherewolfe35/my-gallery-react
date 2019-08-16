import React, { Component } from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="photoList">
        {this.props.galleryList.map(picture =>
          <div key={picture.id}>
            <GalleryItem picture={picture} getGallery={this.props.getGallery}/>
        </div>
          )}
      </div>
     );
  }
}
 
export default GalleryList;